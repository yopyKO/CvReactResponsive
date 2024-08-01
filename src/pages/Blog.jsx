import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from 'react-bootstrap/Button';
import {Card} from 'react-bootstrap';


function Blog() {


    const projects = [
      {
        title: "Project Blog 1",
        description: "Some description for project 1",
        imageUrl: "./src/assets/img/blog1.jpg",
        link: "#",
      },
      {
        title: "Project Blog 2",
        description: "Some description for project 2",
        imageUrl: "./src/assets/img/blog2.jpg",
        link: "#",
      },
      {
        title: "Project Blog 3",
        description: "Some description for project 3",
        imageUrl: "./src/assets/img/blog3.jpg",
        link: "#",
      },
      {
        title: "Project Blog 4",
        description: "Some description for project 4",
        imageUrl: "./src/assets/img/blog4.jpg",
        link: "#",
      },
      {
        title: "Project Blog 5",
        description: "Some description for project 5",
        imageUrl: "./src/assets/img/blog5.jpg",
        link: "#",
      },
      {
        title: "Project Blog 6",
        description: "Some description for project 6",
        imageUrl: "./src/assets/img/blog6.jpg",
        link: "#",
      },

    ];

    return (

        <div className="d-flex flex-wrap justify-content-evenly">
          <h1>Blog</h1>
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-evenly">
              {projects.map((project) => (
                <Card key={project.title} style={{ width: '18rem', height:'22rem', margin: '10px' }}>
                  <Card.Img variant="top" src={project.imageUrl} />
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
  
  export default Blog