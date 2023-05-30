
import { fetchPets } from "../../store/pets";
import PageNo from "./PageNo";
import PetsTable from "./PetsTable";
import { useDispatch, useSelector } from "react-redux";

const PetsPage = (props) => {

    const dispatch = useDispatch();
    
    const pageNo = useSelector((state) => state.pets.pageNo);
    const totalPages = useSelector((state) => state.pets.totalPages);
    const handlePageChange = (newPageNo) => {
        dispatch(fetchPets({ search: props.search, newPageNo }));
    };
  
    return (
      <>
        <PageNo
          pageNo={pageNo}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <PetsTable search={props.search} />
      </>
    );
  };
  
  export default PetsPage;