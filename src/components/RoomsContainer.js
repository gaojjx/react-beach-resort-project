import React, { useContext } from 'react'
import { RoomList } from './RoomList'
import { RoomFilter } from './RoomFilter'
import { RoomContext } from '../Context'
import { Loading } from '../components/Loading'

export const RoomsContainer = () => {
    const context = useContext(RoomContext)
    const {loading, sortedRooms, rooms} = context
    if (loading) {
        console.log(loading)
        return (
            <Loading />
        )
    }
    return (
        <>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms} />
        </>
    )
}
