import { useState } from "react";
import {  Form } from "react-bootstrap";

const GenderSelection = ({setSearch}) => {

    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
        setSearch((prevSearch) => ({
            ...prevSearch,
            genderSearch: event.target.value
        }))
    }

  return (
    <Form.Group>
      <Form.Label>Gender</Form.Label>
      <Form.Select name="genderSearch" value={selectedGender} onChange={handleGenderChange}>
        <option value="">Choose gender</option>
        <option value="muski">Men</option>
        <option value="zenski">Female</option>
      </Form.Select>
    </Form.Group>
  );
};

export default GenderSelection;
