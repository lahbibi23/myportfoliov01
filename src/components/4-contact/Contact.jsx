
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
 import {doneAnimation}  from "../../../public/animation/done.json";


function Contact() {
  const [state, handleSubmit] = useForm("xkndqvzq");

 
  return (
    <div className="contact ">
      <h1 className="title">
        <span style={{ alignSelf: "center" }} className="icon-envelope"></span>
        Contact us
      </h1>
      <p className="sub-title">
      Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className=" flex ">
        <form onSubmit={handleSubmit}>
          <div className="flex ">
            <label htmlFor="email">email address :</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex " style={{ marginTop: "14px" }}>
            <label htmlFor="message">Your message :</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit"  type="submit" disabled={state.submitting}>
          {state.submitting ? "submitting ..." : "submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
          <Lottie animationData={doneAnimation} />; 
              Your message has been sent successfully 👌
            </p> 
         )}

        </form>
       
        <section className=" animation border">animation</section>

      </div>
      
       <p>
         <button>click</button>
       </p>

    </div>
 );
}
export default Contact;
