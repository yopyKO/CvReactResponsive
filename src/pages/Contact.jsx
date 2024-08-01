import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './Contact.css';


function Contact() {

  const form = useRef();

  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xserg7c',
        'template_71psnql',
        form.current, 
        'JWRz-mapX4b2U3Flz',)
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleReset = () => {
    form.current.reset();
    setIsSubmitted(false);
  };


    return (
        
          <div id="contact" className="d-flex flex-column align-items-center">
                <h1>Me Contacter</h1>
                  {/* FORMULAIRE DE CONTACT*/}
            <Form className="w-100" ref={form} onSubmit={sendEmail}>
              
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" name="user_name" placeholder="Nom" required/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adresse mail</Form.Label>
                <Form.Control type="email" name="user_email" placeholder="Entrer l'email" required/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Numéro de téléphone</Form.Label>
                <Form.Control type="phone" name="user_phone" placeholder="Numéro de téléphone" required/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Label>Sujet</Form.Label>
                <Form.Control type="text" name="user_subject" placeholder="Sujet" required/>
              </Form.Group>

              <div className="mb-3">
                <label htmlFor="validationTextarea">Votre message</label>
                <textarea rows="4" className="form-control" id="validationTextarea" name="message" placeholder="Votre message" required></textarea>
                <div className="invalid-feedback">
                Merci de remplir ce champ!
                </div>
              </div>

              <Button variant="primary" type="submit">
                Envoyer
              </Button>

              {isSubmitted && ( <div className="modal show d-block mx-auto b">
                                <Modal.Dialog>
                                  <Modal.Body>
                                    <p>Votre message a été envoyé avec succès!</p>
                                  </Modal.Body>
                                  <Modal.Footer>
                                    <Button variant="secondary" onClick={handleReset}>
                                    Réinitialiser le formulaire
                                    </Button>
                                  </Modal.Footer>
                                </Modal.Dialog>
                                </div>                              
                              )}
            </Form>


                  <br />
                  <br />
                {/* COORDONNEES DE JOHN DOE*/}
                <div className="mb-5 pb-5 d-flex flex-column align-items-center">
                  <h1>Mes Coordonnées</h1>
                  <br />
                  <address>
                  13 Rue des Olivettes, 44000 Nantes <br />
                    <a href="tel:+033606060606">0606060606</a>
                  </address>
                  <iframe width="300" height="300" src="https://maps.google.com/maps?width=300&amp;height=300&amp;hl=en&amp;q=13%20Rue%20des%20Olivettes,%2044000%20Nantes+(John%20Doe)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
                </div>

          </div>
        

    )
  }
  
  export default Contact