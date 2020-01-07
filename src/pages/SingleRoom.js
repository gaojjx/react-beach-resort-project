import React, {useContext} from 'react'
import defaultBcg from '../images/room-1.jpeg'
import {RoomContext} from '../Context.js'

import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { Banner } from '../components/Banner'
import StyledHero from '../components/StyledHero'

export const SingleRoom = props => {
    const slug = props.match.params.slug

    console.log(slug)
    const context = useContext(RoomContext)
    const room = context.getRoom(slug)
    if (!room) {
        return (
            <div className="error">
            <h3> no such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </div>
        )
    }
    const {name, price, images, description, size, capacity, pets, breakfast, extras} = room
    const [mainImg, ...defaultImages] = images
    return (
        <>
            <StyledHero img={mainImg ? mainImg : defaultBcg}>
                <Banner title={`${name} room`} >
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImages.map((item, index) => (
                        <img key={index} src={item} alt={name} />
                    ))}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>description</h3>
                        <h6>{description}</h6>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price: ${price}</h6>
                        <h6>size: {size} SOFT</h6>
                        <h6>max capacity: {capacity > 1 ? `${capacity} people`: `${capacity} person`}</h6>
                        <h6>{pets? "allow pets": "not pets allowed"}</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h3>extras</h3>
                <ul className="extras">
                    {extras.map((item, index) => {
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
        </>
    )
}
