import { Col, Row } from "react-bootstrap";
import PetsTable from "./PetsTable";


const Pets = () => {

    return (
        <Col>
            <Row><h1>All our pets</h1></Row>
            <Row><p>ovde search</p></Row>
            <Row><p>dugmici</p></Row>
            <Row> <PetsTable /> </Row>
        </Col>
    )
}

export default Pets;

