import { useState } from "react";
import { Form } from "react-bootstrap";

const DescriptionSelector = ({ setSearch }) => {

  const [selectedDesc, setSelectedDesc] = useState('');

  const handleDescChange = (event) => {
    setSelectedDesc(event.target.value);
    setSearch((prevSearch) => ({
      ...prevSearch,
      descSearch: event.target.value,
    }));
  };

  return (
    <Form.Group>
      <Form.Label>Description</Form.Label>
      <Form.Control
        name="descSearch"
        as="input"
        placeholder="Add description"
        type="text"
        value={selectedDesc} 
        onChange={handleDescChange}
      ></Form.Control>
    </Form.Group>
  );
};

export default DescriptionSelector;
