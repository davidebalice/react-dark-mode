import Card from "react-bootstrap/Card";

const CardArticle = ({ variant, image }) => {
  return (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      className="card mb-2"
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Card Title </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardArticle;
