import { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import code from "../assets/code.avif";

const Contact = () => {
  const formDetails = {
    name: "",
    email: "",
    message: "",
  };

  const [details, setDetails] = useState(formDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = () => {
    console.log('Hey')
  }

  const handleSubmit = () => {

  }

  return (
    <div>
      <NavBar />
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6">
            <img src={code} alt="myself" />
          </div>
          <div className="col-md-6 text-white">
            <h2 className="">Get in touch!</h2>
            <p className="fw-lighter">Do you have a product idea, want to discuss a project, or need a developer? Drop me an email!</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 ">
                <label htmlFor="formGroupExampleInput" className="form-label d-flex align-items-cente fw-lighter py-3">Email address</label>
                <input type="email" className="form-control py-3" id="formGroupExampleInput" placeholder="name@example.com"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label d-flex align-items-cente fw-lighter pb-1">Name</label>
                <input type="text" className="form-control py-3" id="exampleInputName" placeholder="Your name"/>
              </div>
              <div className="mb-3">
                <label htmlFor="floatingTextarea" className="form-label d-flex align-items-cente fw-lighter pb-1">Message</label>
                <textarea className="form-control" placeholder="Leave a message here" id="floatingTextarea" rows='6'></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send email</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
