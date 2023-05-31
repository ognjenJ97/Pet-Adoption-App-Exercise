import { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../store/category";
import { addPet } from "../../store/pets";
import classes from './AddPet.module.css';
import { useNavigate } from "react-router-dom";

const AddPet = () => {
  var empty_newPet = {
    name: "",
    age: -1,
    gender: "",
    weight: -1,
    description: "",
    categoryId: -1,
  };

  const [newPet, setNewPet] = useState(empty_newPet);
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.category);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const valueInputChange = (e) => {
    const { name, value } = e.target;
    setNewPet((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddPet = () => {
    if (
      !newPet.name ||
      newPet.age < 0 ||
      !newPet.gender ||
      newPet.weight < 0 ||
      !newPet.description ||
      newPet.categoryId === -1
    ) {
      alert("Please fill in all fields.");
      return;
    }
    dispatch(addPet(newPet));
    navigate("/pets");
  };

  return (
    <Col className={`${classes.container} ${classes.columnWithBackground}`}>
      <Form>
        <h4 className={classes.label}>Add new pet (all inputs must be added)</h4>
      </Form>
      <Form.Group className={classes.smallContainer}>
        <Form.Label>Pet name</Form.Label>
        <Form.Control
          id="name"
          name="name"
          type="text"
          placeholder="Enter name"
          onChange={(e) => valueInputChange(e)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className={classes.smallContainer}>
        <Form.Label>Age(in months)</Form.Label>
        <Form.Control
          type="number"
          id="age"
          name="age"
          placeholder="Enter pet age"
          onChange={(e) => valueInputChange(e)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className={classes.smallContainer}>
        <Form.Label>Gender</Form.Label>
        <Form.Select name="gender" onChange={(e) => valueInputChange(e)}>
          <option value="">Choose gender</option>
          <option value="muski">Men</option>
          <option value="zenski">Femal</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className={classes.smallContainer}>
        <Form.Label>Weight</Form.Label>
        <Form.Control
          type="number"
          id="weight"
          name="weight"
          placeholder="Enter weight"
          onChange={(e) => valueInputChange(e)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className={classes.smallContainer}>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          id="description"
          name="description"
          placeholder="Enter description"
          onChange={(e) => valueInputChange(e)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className={classes.smallContainer}>
        <Form.Label>Category</Form.Label>
        <Form.Select name="categoryId" onChange={(e) => valueInputChange(e)}>
          <option value="">Choose category</option>
          {category.map((prev) => {
            return (
              <option key={prev.id} value={prev.id}>
                {prev.naziv}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
      <Button type="button" className={classes.button} onClick={handleAddPet}>Add</Button>
    </Col>
  );
};
export default AddPet;
