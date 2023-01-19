import React from 'react'

import './consultancy.css';

import { AiFillFileAdd } from 'react-icons/ai'

import { MdOutlineCarRental } from 'react-icons/md'

import { MdSell } from 'react-icons/md'

import { BsFillHouseDoorFill } from 'react-icons/bs'

function Consultancy() {
    return (

        <div className="god-father">

        
            <div className='main-father'></div>

            <div className="father">

                <img className='logo' src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="profile" />
                <h1 className='snail'>Snail Consultansy Pvt.Ltd.</h1>
                <h5 className='number'>Contact: +78328383338</h5>

            </div>

            <div className='icons'>

                <h1> < AiFillFileAdd className='g'/>New Projects </h1>

                <h1> <MdOutlineCarRental className='g' />Rental </h1>

                <h1> <MdSell className='g' />Resell </h1>

                <h1> <BsFillHouseDoorFill className='g' />Commercial </h1>
                
                
            </div>

        </div>
    )
}

export default Consultancy