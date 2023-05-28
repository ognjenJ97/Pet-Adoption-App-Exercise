import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../../store/category";
import GenderSelection from "./GenderSelection";
import CategorySelector from "./CategorySelector";
import DescriptionSelector from "./DescriptionSelector";
import { Row, Col, Button } from "react-bootstrap";
import classes from './Search.module.css';

const Search = (props) => {


    const dispatch = useDispatch();

    const empty_search = {
        categorySearch: '',
        genderSearch: '',
        descSearch: ''
      };

    const [search, setSearch] = useState(empty_search);
    const category = useSelector((state) => state.category.category);

    useEffect (() => {
        dispatch(fetchCategory())
    }, [dispatch])

    const handleSearch = () => {
      console.log('Search state:', search);
      props.setSearch(search);
    };
   
    return (
      <Row>
        <Row className={classes.searchRow}>
          <Col>
            <DescriptionSelector setSearch={setSearch}/>
          </Col>
          <Col>
            <GenderSelection setSearch={setSearch} />
          </Col>
          <Col>
            <CategorySelector category={category} setSearch={setSearch}/>
          </Col>
          <Col className={classes.button}>
            <Button onClick={handleSearch}>Search</Button>
          </Col>
        </Row>
      </Row>
    );
    


}

export default Search;