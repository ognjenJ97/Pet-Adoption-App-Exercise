import { Table, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "../../store/pets";
import RowPet from "./RowPet";
import { useEffect, useState } from "react";
import PageNo from "./PageNo";

const PetsTable = (props) => {

    const dispatch = useDispatch();
    const pets = useSelector((state) => state.pets.pets);
    const loading = useSelector((state) => state.pets.loading);
    const error = useSelector((state) => state.pets.error);
    const [pageNo, setPageNo] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    console.log('Search props:', props.search);

    useEffect(() => {
      dispatch(fetchPets({ search: props.search, newPageNo: pageNo }))
        .then((response) => {
          setTotalPages(response.payload.totalPages); // Postavite broj ukupnih stranica
        });
    }, [dispatch, props.search, pageNo]);

    const handlePageChange = (newPageNo) => {
      setPageNo(newPageNo);
    };

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }


    const renderPet = () => {
        return pets.map((pet) => {
            return (
                <RowPet key={pet.id} pet={pet}>
                </RowPet>
            )
        })
    }

    return (
      <>
      <PageNo pageNo={pageNo} totalPages={totalPages} onPageChange={handlePageChange}/>
      <Row>
      <Table id="pets-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age(in months)</th>
            <th>Vaccinated</th>
            <th>Gender</th>
            <th>Weight</th>
            <th>Description</th>
            <th>Category</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderPet()}</tbody>
      </Table>
      </Row>
      </>
    );
}

export default PetsTable;