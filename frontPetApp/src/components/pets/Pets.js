import { Col, Row } from "react-bootstrap";
import PetsTable from "./PetsTable";
import Search from "./Search";
import { useState } from "react";


const Pets = () => {

    const [search, setSearch] = useState({
        categorySearch: '',
        genderSearch: '',
        descSearch: ''
      });

    return (
        <Col>
            <Row><h1>All our pets</h1></Row>
            <Row> <Search setSearch={setSearch}/> </Row>
            <Row><p>dugmici</p></Row>
            <Row> <PetsTable search={search}/> </Row>
        </Col>
    )
}

export default Pets;

