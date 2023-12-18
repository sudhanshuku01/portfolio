import React,{useState} from "react";
import Layout from "./Layout/Layout";
import { useMode } from "./Context/Mode";

const Connect = () => {
  const [lm]=useMode();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle the form submission logic here, e.g., send the data to a server
    console.log('Form submitted:', formData);

    // For simplicity, let's clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };


  return (
    <Layout
      title="Connect - sudhanshu kushwaha"
      description="This is the connect page of sudhanshu kushwaha where you can mail him"
      type="connect page of programmer"
      key="coder connect page design, programmer connect page,connect page,connect page design,connect page of sudhanshu,connect page ux ui,beautiful connect page"
      url="https://www.sudhanshukushwah.com/connect"
    >
      <div style={{background:lm?'#fef8b4':'hsl(257, 8%, 18%)',color:lm?'#404040':'#f7f7f7'}} className="connect">
      <div className="connect-page">
        <h2>Connect with Us</h2>
        <p>Fill out the form below to get in touch:</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          ></textarea>

          <button style={{background:lm?"#007bf0":"#ad998a"}} type="submit">Submit</button>
        </form>
      </div>
      </div>
    </Layout>
  );
};

export default Connect;
