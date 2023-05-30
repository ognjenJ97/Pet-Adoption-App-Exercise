import { Row, Table } from "react-bootstrap";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const PetsTable = (props) => {

  return (
    <Row>
      <Table id="pets-table">
        <TableHeader />
        <TableBody search={props.search} onPageChange={props.onPageChange}/>
      </Table>
    </Row>
  );
};

export default PetsTable;