import { Row, Table } from "react-bootstrap";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const PetsTable = (props) => {

  return (
    <Row>
      <Table id="pets-table">
        <TableHeader />
        <TableBody search={props.search}/>
      </Table>
    </Row>
  );
};

export default PetsTable;