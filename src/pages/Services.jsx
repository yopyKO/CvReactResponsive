import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from 'react-bootstrap/Button';
import {Card} from 'react-bootstrap';

function Services() {

  const projects = [
    {
      title: "Site vitrine",
      description: "Some description for service 1",
      link: "#",
    },
    {
      title: "Application mobile",
      description: "Some description for service 2",
      link: "#",
    },
    {
      title: "Site sur-mesure",
      description: "Some description for service 3",
      link: "#",
    },
    {
      title: "Site e-commerce",
      description: "Some description for service 4",
      link: "#",
    },
    {
      title: "Audit et optimisations",
      description: "Some description for service 5",
      link: "#",
    },
    {
      title: "Maintenances",
      description: "Some description for service 6",
      link: "#",
    },

  ];

  return (

      <div className="d-flex flex-wrap justify-content-evenly">
        <h1>Mes services</h1>
        <div className="col-12">
          <div  className="d-flex flex-wrap justify-content-evenly">
            {projects.map((project) => (
              <Card key={project.title} style={{ width: '18rem', height:'10rem', margin: '10px' }}>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  {project.link && <Button variant="primary" href={project.link} target='#blank'>En savoir plus...</Button>}
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>

);

}
  
  export default Services