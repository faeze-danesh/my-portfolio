import "./Contact.scss";

const Contact = () => {
  return (
    <section  className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact__container">

        <form className="contact__form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="6"></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact__info">
          <p><strong>Email:</strong> faeze.danesh@yahoo.com</p>
          <p><strong>Location:</strong> Canada</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;