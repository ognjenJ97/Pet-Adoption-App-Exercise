import { useDispatch } from "react-redux";
import { adoption } from "../../../store/pets";
import { Button } from "react-bootstrap";


const PetAdopt = ({petId}) => {

    
    console.log("id u petADopt" + petId)
    console.log("Ovde je usao u komponentu petAdopt")
    const dispatch = useDispatch();
    return (<Button onClick={() => dispatch(adoption(petId))}>Adopt</Button>)
}

export default PetAdopt;