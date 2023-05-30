import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "../../store/pets";
import RowPet from "./RowPet";
import { useEffect } from "react";

const TableBody = (props) => {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets.pets);
  const loading = useSelector((state) => state.pets.loading);
  const error = useSelector((state) => state.pets.error);
  const pageNo = useSelector((state) => state.pets.pageNo);

  useEffect(() => {
    dispatch(fetchPets({ search: props.search, newPageNo: pageNo }));
  }, [dispatch, props.search, pageNo]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const renderPet = () => {
    return pets.map((pet) => {
      return <RowPet key={pet.id} pet={pet} />;
    });
  };

  return (<tbody>{renderPet()}</tbody>);
};

export default TableBody;
