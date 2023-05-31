import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePet } from "../../../store/pets";

const PetDelete = (props) => {

    const dispatch = useDispatch();
    
    const handleDelete = () => {
        console.log("za brisanje" + props.petId)
        dispatch(deletePet(props.petId));
    }


    return (
        <Button onClick={handleDelete}>Delete</Button>
    )
}

export default PetDelete;