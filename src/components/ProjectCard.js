import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProjectCard(props) {
  return (
    <Card className="card">
      <Card.Img variant="top" src={props.image} className="card-img" />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{props.name}</Card.Title>
        <Card.Text className="card-desc">{props.description}</Card.Text>
        <div className="card-btns">
          <Button variant="light" className="btn">
            <a className="site-link" href={props.link}>
              Visit Site
            </a>
          </Button>
          <Button variant="light" className="btn">
            <a className="site-link" href={props.code}>
              {" "}
              View code
            </a>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
