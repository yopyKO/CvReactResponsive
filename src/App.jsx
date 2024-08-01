import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import Home from './pages/Home';
import Services from './pages/Services';
import Achievements from './pages/Achievements';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Notices from './pages/Notices';
import AboutMe from './pages/AboutMe';
import PageNotFound from './pages/404';
import ScrollToTopButton from './pages/Scroll';


function App() {

  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [previousScrollPos, setPreviousScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsScrolledDown(currentScrollPos > previousScrollPos);
      setPreviousScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, );

  return (
    <>
      <div className='container'>
        <BrowserRouter>
            <header className="navBar">
              
              <Navbar expand="lg" class="position-absolute top-0 start-0" collapseOnSelect>
                <Container>
                  <Navbar.Brand href="/">JOHN DOE PROJECTS</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >Accueil</Nav.Link>
                        <Nav.Link as={Link} to="/services" eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >Services</Nav.Link>
                        <Nav.Link as={Link} to="/achievements" eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >Réalisations</Nav.Link>
                        <Nav.Link as={Link} to="/blog" eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >Blog</Nav.Link>
                        <Nav.Link as={Link} to="/contact" eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >Me Contacter</Nav.Link>
                        <Nav.Link as={Link} to="/notices" eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >Mentions Légales</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                </Container>
              </Navbar>

            </header>

            <body className='pt-5 mt-2'>
              <div className='h-100'>
                  <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/services" element={<Services/>}></Route>
                    <Route path="/achievements" element={<Achievements/>}></Route>
                    <Route path="/blog" element={<Blog/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/notices" element={<Notices/>}></Route>
                    <Route path="/aboutme" element={<AboutMe/>}></Route>
                    <Route path="*" element={<PageNotFound/>}></Route>
                  </Routes>
                </div> 
          
            </body>
          

          <footer>
          
            <div aria-expanded="lg" className='row mw-100'>
              <div className="d-flex flex-wrap justify-content-evenly">
                    <div className='col-3 bg'>
                      <ul>
                        <li>John Doe</li>
                        <li><Nav.Link href="https://g.co/kgs/7KhQ8NL"  target='#blank'><address>13 Rue des Olivettes, 44000 Nantes</address></Nav.Link></li>
                        <li><Nav.Link as={Link} to="tel:+033606060606">0606060606</Nav.Link></li>
                        <li><Nav.Link as={Link} to="https://x.com/home" target='#blank'>X (twitter)</Nav.Link></li>
                        <li><Nav.Link as={Link} to="https://github.com/" target='#blank'>Github</Nav.Link></li>
                        <li><Nav.Link as={Link} to="https://www.linkedin.com/" target='#blank'>LinkedIn</Nav.Link></li>
                      </ul>
                    </div>

                    <div className='col-3 bg'>
                      <ul>
                        <li><Nav.Link as={Link} to="/#" eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >Accueil</Nav.Link></li>
                        <li><Nav.Link as={Link} to="/services#" eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >Services</Nav.Link></li>
                        <li><Nav.Link as={Link} to="/contact#" eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >Me Contacter</Nav.Link></li>
                        <li><Nav.Link as={Link} to="/notices#"eventKey={1} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }} >Mentions Légales</Nav.Link></li>
                      </ul>
                      
                    
                    </div>

                    <div className='col-3 bg'>
                      <ul>
                        <li><Nav.Link as={Link} to="https://github.com/github-john-doe/TypoEditor/tree/BkTree" target='#blank'>Réalisation 1</Nav.Link></li>
                        <li><Nav.Link as={Link} to="https://github.com/github-john-doe/TypoEditor/tree/netcore3" target='#blank'>Réalisation 2</Nav.Link></li>
                        <li><Nav.Link as={Link} to="https://github.com/github-john-doe/TypoEditor/tree/private/exploring-mock-test" target='#blank'>Réalisation 3</Nav.Link></li>
                      </ul>
                    </div>

                    <div className='col-3 bg'>
                      <ul>
                        <li><Nav.Link as={Link} to="https://github.com/github-john-doe/TypoEditor/tree/BkTree" target='#blank'>Blog 3</Nav.Link></li>
                        <li><Nav.Link as={Link} to="https://github.com/github-john-doe/TypoEditor/tree/netcore3" target='#blank'>Blog 4</Nav.Link></li>
                        <li><Nav.Link as={Link} to="https://github.com/github-john-doe/TypoEditor/tree/private/exploring-mock-test" target='#blank'>Blog 6</Nav.Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className='d-flex justify-content-center'>
                    © John Doe 2024

                    <div id="up-button" className={isScrolledDown ? '' : 'show'}>
                    <ScrollToTopButton/>
                    </div> 
              </div>
            </div>
            
          </footer>
        </BrowserRouter>
      </div>
    </>
  )
}


export default App
