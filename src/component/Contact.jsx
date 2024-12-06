import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setAlert,clearAlert } from './Redux/Slices/alertReducer';

const Contact = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();
  const handleValue = (e) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Eamil",email );
    localStorage.setItem("Message",msg);
    dispatch(setAlert({
      message:"Submited Successfully !",
      type:"success"
    }))
    setTimeout(() => {
      dispatch(clearAlert())
    
    }, 2500);
  }
  return (
    <>
      <div className="contact-container px-3 ">
        <nav aria-label="breadcrumb d-flex align-items-center justify-content-center mt-4 mb-4">
          <ol className="breadcrumb d-flex align-items-center justify-content-center my-4 ">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="contact">Contact</li>
          </ol>
        </nav>
        <div className="row my-5 contact-row">

          <div className="col cont-col">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5415.105939599135!2d-87.47620919984801!3d41.65779970344219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8811d94dda258cd5%3A0xa4c72b9eb15dd773!2s101%20E%20129th%20St%2C%20East%20Chicago%2C%20IN%2046312%2C%20USA!5e1!3m2!1sen!2sin!4v1730105308786!5m2!1sen!2sin" height="450" style={{ border: 0, borderRadius: "5px", width: "100%", boxShadow: "0px 2px 14px #0000005e" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="col cont-col mt">
            <h4>Contact Us</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required onChange={(e) => { setName(e.target.value) }} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInpuEmail1" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setEmail(e.target.value) }} required />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" onChange={(e) => { setMsg(e.target.value) }}required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleValue}>Submit</button>
            </form>
          </div>


        </div>
      </div>
    </>
  )
}

export default Contact
