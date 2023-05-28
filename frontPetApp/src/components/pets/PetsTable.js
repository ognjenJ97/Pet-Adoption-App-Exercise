import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "../../store/pets";
import RowPet from "./RowPet";
import { useEffect } from "react";

const PetsTable = () => {

    const dispatch = useDispatch();
    const pets = useSelector((state) => state.pets.pets);
    const loading = useSelector((state) => state.pets.loading);
    const error = useSelector((state) => state.pets.error);

    useEffect(() => {
      dispatch(fetchPets());
    }, [dispatch]);

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
    );
}

export default PetsTable;