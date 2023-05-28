import { useState } from "react";
import { Form } from "react-bootstrap";

const CategorySelector = (props) => {

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        props.setSearch((prevSearch) => ({
            ...prevSearch,
            categorySearch: event.target.value
        }))
    }


  return (
    <Form.Group>
      <Form.Label>Category</Form.Label>
      <Form.Select name="categorySearch" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Choose category</option>
        {props.category.map((prev) => {
          return (
            <option value={prev.id} key={prev.id}>
              {prev.naziv}
            </option>
          );
        })}
      </Form.Select>
    </Form.Group>
  );
};

export default CategorySelector;
