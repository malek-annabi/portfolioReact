import emailjs from 'emailjs-com';
import "./contact.scss";

export default function Contact() {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_9jnp4oz', 'template_rktw5im', e.target, 'user_ttYgjryoIsoKyT1WkUsNw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={sendEmail}>
        <input type="text" placeholder="Name" name="name"/>
          <input type="text" placeholder="Email" name="email"/>
          <input type="text" placeholder="Subject" name="subject"/>
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {/* { && <span>Thanks, I'll reply ASAP :)</span>} */}
        </form>
      </div>
    </div>
  );
}
