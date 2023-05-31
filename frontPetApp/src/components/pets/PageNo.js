import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import classes from './PageNo.module.css';
import { useNavigate } from "react-router-dom";

const PageNo = React.memo(({ pageNo, totalPages, onPageChange }) => {


  const navigate = useNavigate();

  const handlePrevPage = () => {
    if (pageNo > 0) {
      onPageChange(pageNo - 1);
    }
  };

  const handleNextPage = () => {
    if (pageNo < totalPages - 1) {
      onPageChange(pageNo + 1);
    }
  };

  const goToAdd = () => {
    navigate("/pets/add");
  };

  return (
    <Row className={classes.row}>
      <Col className={classes.leftAlign}>
        <Button onClick={() => goToAdd()}>Add new pet</Button>
      </Col>
      <Col className={classes.rightAlign}>
        <Button disabled={pageNo === 0} onClick={handlePrevPage}>Prev</Button>
        <Button disabled={pageNo === totalPages - 1} onClick={handleNextPage}>Next</Button>
      </Col>
    </Row>
  );
});

export default PageNo;
