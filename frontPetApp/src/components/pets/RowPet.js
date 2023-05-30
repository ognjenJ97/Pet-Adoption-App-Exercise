import { useNavigate } from "react-router-dom";
import PetDelete from "./PetDelete";


const RowPet = (props) => {

    var navigate = useNavigate()
    var petId = props.pet.id;

    const renderVaccinated = ()=> {
        if (props.pet.vakcinisan === false) {
            return (<p>Not vaccinated</p>)
        } else if (props.pet.vakcinisan === true) {
            return (<p>Vaccinated</p>)}
    }

    return (
        <tr key={props.pet.id}>
          <td>{props.pet.ime}</td>
          <td>{props.pet.starost}</td>
          <td>{renderVaccinated()}</td>
          <td>{props.pet.pol}</td>
          <td>{props.pet.tezina}</td>
          <td>{props.pet.opis}</td>
          <td>{props.pet.kategorijaNaziv}</td>
          <td>{window.localStorage.getItem("role") === "ROLE_ADMIN" && <PetDelete petId={petId}/>}</td>
        </tr>
      );

}
export default RowPet;