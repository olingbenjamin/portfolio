/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";
import { useState } from "react";

const Footer = () => {
  let [name, setName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  function handleChange(e) {
    let { name, value } = e.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  }
  function handleClick() {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  }
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:olingbenjamin@outlook.com" className="p-text">
            olingbenjamin@outlook.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+256 757 482 646" className="p-text">
            0757482646
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your name"
              value={formData.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              placeholder="Your message"
              value={formData.message}
              name="message"
              cols="30"
              rows="10"
              className="p-text"
              onChange={handleChange}></textarea>
          </div>
          <button className="b-text" type="button" onClick={handleClick}>
            {isLoading ? "sending" : "send message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
