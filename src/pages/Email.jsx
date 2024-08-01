import emailjs from 'emailjs-com';
import  { useRef } from 'react';




export const ContactUs = () => {
  const form = useRef();
          
  const sendEmail = (e) => {
  e.preventDefault();
          
  emailjs.sendForm('service_xserg7c', 'template_71psnql', form.current, {
    publicKey: '3dCItlB_LnzCr5I2a',
    })
    .then(() => {console.log('SUCCESS!');},
                (error) => {console.log('FAILED...', error.text);},
                );
  };
          
return (
  <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
  </form>
);
};