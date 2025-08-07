import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    const date = new Date();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
            <p>Copyright {date.getFullYear()}. All Rights Reserved</p>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer