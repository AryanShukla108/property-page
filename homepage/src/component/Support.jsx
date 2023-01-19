import React from 'react'

import './support.css'

import { SiHomeassistant } from 'react-icons/si'

import { MdSupportAgent } from 'react-icons/md'

import { FaHandshakeAltSlash } from 'react-icons/fa'



function Support() {
    return (
        <div className='setting'>

            <h4 className='key'>Key Benefits</h4>

            <div className="more">

                <div className='benefits'>
                    <h3 className='logos'> <SiHomeassistant />  </h3>
                    <h4 className='home'>Home Loans</h4>
                    <p className='graph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores veniam rem adipisci. Ipsum molestias dolores mollitia molestiae, sequi a!</p>
                </div>

                <div className='benefits'>

                    <h3 className='logos'> <MdSupportAgent />  </h3>
                    <h4 className='home'>24x7 Support</h4>
                    <p className='graph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia unde ex dignissimos mollitia a iusto, corrupti reiciendis nesciunt dolore.</p>

                </div>

                <div className='benefits'>

                    <h3 className='logos'> <FaHandshakeAltSlash />  </h3>
                    <h4 className='home'>Buy & Sellings</h4>
                    <p className='graph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda unde omnis asperiores consectetur corporis, obcaecati fugit nemo voluptas nostrum?</p>
                </div>

            </div>

        </div>
    )
}

export default Support