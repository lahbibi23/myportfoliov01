import React from 'react'
import "./contact.css"
function Contact() {
  return (

    <div className='contact '>

      <h1 className="title">
        <span style={{ alignSelf: "center" }} className="icon-envelope"></span>
        Contact us
      </h1>
      <p className="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat veniam dignissimos animi ut possimus</p>



      <div className=" flex ">

        <form >
          <div className="flex ">
            <label htmlFor="email">email address :</label>
            <input required type="email" id='email' />
          </div>

          <div className="flex " style={{ marginTop: "14px" }}>
            <label htmlFor="message">Your message :</label>
            <textarea required name="message" id="message" ></textarea>
          </div>

          <button className='submit'>Submit</button>

        </form>

        <section className=" animation border">animation</section>
      </div>

    </div>
  )
}

export default Contact