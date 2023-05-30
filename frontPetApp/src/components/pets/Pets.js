import { Col, Row } from "react-bootstrap";
import Search from "./search/Search";
import { useState } from "react";
import classes from './Pets.module.css';
import PetsPage from "./PetsPage";


const Pets = () => {

    const [search, setSearch] = useState({
        categorySearch: '',
        genderSearch: '',
        descSearch: ''
      });

    return (
        <Col className={`${classes.container} ${classes.columnWithBackground}`}>
            <Col className={classes.secondCol}>
                <Row className={classes.smallContainer}> <Search setSearch={setSearch}/> </Row>
                <Row className={`${classes.smallContainer} ${classes.smallContainerCentered}`}> <PetsPage search={search}/> </Row>
            </Col>
        </Col>
    )
}

export default Pets;

