import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from 'react-bootstrap/Button';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Achievements() {


    const projects = [
      {
        title: "Project Title 1",
        description: "Some description for project 1",
        imageUrl: "./src/assets/img/achievements1.jpg",
        link: "https://github.com/github-john-doe/TypoEditor/tree/BkTree",
      },
      {
        title: "Project Title 2",
        description: "Some description for project 2",
        imageUrl: "./src/assets/img/achievements2.jpg",
        link: "https://github.com/github-john-doe/TypoEditor/tree/netcore3",
      },
      {
        title: "Project Title 3",
        description: "Some description for project 3",
        imageUrl: "./src/assets/img/achievements3.jpg",
        link: "https://github.com/github-john-doe/TypoEditor/tree/private/exploring-mock-test",
      }
    ];
  
    return (
      <div className="d-flex flex-wrap justify-content-evenly">
        <h1>Mes réalisations</h1>
        <div className="col-12">
        <div className="d-flex flex-wrap justify-content-evenly">
          {projects.map((project) => (
            <Card key={project.title} style={{ width: '18rem', height:'22rem', margin: '10px' }}>
              <Card.Img variant="top" src={project.imageUrl} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                {project.link && (
                <Link to={`${project.link}`} target="_blank">
                  <Button variant="primary">En savoir plus...</Button>
                </Link>
              )}
              </Card.Body>
            </Card>
          ))}
          </div>
        </div>
        
      </div>
  );
  }
  
  export default Achievements