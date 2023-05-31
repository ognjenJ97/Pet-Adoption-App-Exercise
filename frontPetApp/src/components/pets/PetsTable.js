import { Row, Table } from "react-bootstrap";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { useSelector } from "react-redux";
import classes from './PetsTable.module.css';

const PetsTable = (props) => {

  const pageNo = useSelector((state) => state.pets.pageNo);

  return (
    <Row>
      <Table id="pets-table">
        <TableHeader />
        <TableBody search={props.search}/>
      </Table>
      <Row className={classes.centeredContent}>Page number: {pageNo}</Row>
    </Row>
  );
};

export default PetsTable;