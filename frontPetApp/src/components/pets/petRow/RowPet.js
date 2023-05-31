
import PetAdopt from "./PetAdopt";
import PetDelete from "./PetDelete";
import PetVaccination from "./PetVaccination";


const RowPet = (props) => {

    var petId = props.pet.id;
    var pet = props.pet;
    const role = window.localStorage.getItem("role");

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
          <td>{role === "ROLE_ADMIN" ? (<PetVaccination petId={petId} pet={pet}/>) : (renderVaccinated())}</td>
          <td>{props.pet.pol}</td>
          <td>{props.pet.tezina}</td>
          <td>{props.pet.opis}</td>
          <td>{props.pet.kategorijaNaziv}</td>
          <td>{role === "ROLE_ADMIN" ? (<PetDelete petId={petId}/>) : role === "ROLE_KORISNIK" && pet.udomljen === false && pet.vakcinisan === true ? (<PetAdopt petId={petId}/>) : null}</td>
        </tr>
      );

}
export default RowPet;