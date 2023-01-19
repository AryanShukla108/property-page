import React from 'react'

import './form.css'

function Form() {
  return (
    <div className='container'>

      <h3>Get the Best deal customised to your needs!</h3>

      <h2>Contact With Us</h2>

      <form >


        <div className="wrapper">

          <div className="form-page">
            <label htmlFor="fname">First Name</label>
            <input type="text" name='fname' id='fname' required />
            
          </div>

          <div className="form-page">
            <label htmlFor="lname">Last Name</label>
            <input type="text" name='lname' id='lname' required />
            
          </div>

        </div>


        <div className="wrapper">

          <div className="form-page">
            <label htmlFor="email">Email</label>
            <input type="email" name='mail' id='email' required />
            
          </div>


        </div>


        <div className="wrapper">

          <div className="form-page">
            <label htmlFor="tel"> Contact </label>
            <input type="text" name='tel' id='tel' required />
            
          </div>

        </div>










      </form>

      <input type="submit" name='' value="Enquire Now" />


    </div>
  )
}

export default Form