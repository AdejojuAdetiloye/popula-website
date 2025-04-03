import { useState } from "react";
import "../components/footer.css";
import emailjs from "emailjs-com";

export default function Footer() {
  const service_id = "service_ef1pbwr";
  const public_api_key = "7dtdT8XWawVr0D79K";
  const template_id = "template_3h2loxk";

  const [formData, setFormData] = useState({
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(service_id, template_id, e.target, public_api_key).then(
      (result) => {
        console.log(result.text);
        alert("Email sent successfully!");
        setFormData({
          user_email: "",
          message: "",
        });
      },
      (error) => {
        console.log(error.text);
        alert("Error sending email.");
      }
    );
  };

  return (
    <div className="footer">
      <div className="first">
        <h4 className="company">Popula llc</h4>
        <h6 className="email">populallc001@gmail.com</h6>
        <div className="phones">
          <h6>+234 706 792 3101</h6>
          <h6>+234 901 581 6695</h6>
        </div>
        <h4 className="address">
          4, Ogunleye Street, The Bells, Ota, Ogun State, Nigeria.
        </h4>
      </div>
      <div className="second">
        <h6 className="motto">Motto: With Integrity</h6>
        <p className="description">
          @Popula llc, we believe in integrity and we do our services in
          integrity. Join us now and be apart of our students, staff, or
          investors. We make sure to put smile on your face.
        </p>
        <h6 className="copywright">Copywright 2025</h6>
      </div>
      <div className="third">
        <h4 className="title">Send us a message</h4>

        <form className="message-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="email-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="message-input"
          />
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
      
    </div>
  );
}
