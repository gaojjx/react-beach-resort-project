import React, { useContext } from 'react'
import { RoomContext } from '../Context'
import { Title } from './Title'

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
export const RoomFilter = ({rooms}) => {
    const context = useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
      } = context
    let types = ['all', ...getUnique(rooms, 'type')]
    types = types.map((type, index) => {
        return <option key={index} value={type}>{type}</option>
    })

    let capacitys = getUnique(rooms, 'capacity')
    capacitys = capacitys.map((capacity, index) => {
        return <option key={index} value={capacity}>{capacity}</option>
    })
    
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">type</label>
                    <select 
                        name="type" 
                        id="type"
                        className="form-control"
                        onChange={handleChange}
                        value={type}
                        >
                        {types}
                    </select>
                </div>
                {/* end select type */}
                {/* capacity */}
                <div className="form-group">
                    <label htmlFor="capacity">capacity</label>
                    <select name="capacity" id="capacity" className="form-control" value={capacity} onChange={handleChange}>
                        {capacitys}
                    </select>
                </div>
                {/* end capacity */}
                {/* price */}
                <div className="form-group">
                    <label htmlFor="price">room price: ${price}</label>
                    <input 
                        type="range" 
                        name="price"
                        id="price"
                        value={price}
                        min={minPrice}
                        max={maxPrice}
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">room size </label>
                    <div className="size-inputs">
                        <input
                        type="number"
                        name="minSize"
                        value={minSize}
                        onChange={handleChange}
                        className="size-input"
                        />
                        <input
                        type="number"
                        name="maxSize"
                        value={maxSize}
                        onChange={handleChange}
                        className="size-input"
                        />
                    </div>
                </div>
                {/* end price */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input
                        type="checkbox"
                        name="breakfast"
                        id="breakfast"
                        checked={breakfast}
                        onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input 
                            type="checkbox"
                            name="pets"
                            id="pets"
                            checked={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
            </div>
          </form>
        </section>
    )
}