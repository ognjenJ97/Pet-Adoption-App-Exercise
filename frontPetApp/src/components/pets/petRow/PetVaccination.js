import { useDispatch } from "react-redux"
import { vaccination } from "../../../store/pets";

const PetVaccination = ({petId, pet}) => {

    const dispatch = useDispatch();


    const renderVaccinationRow = () => {
        if (pet.vakcinisan === false) {
            return (
                <input
                type="checkbox"
                checked={false}
                onClick={() => dispatch(vaccination(petId))}
              />
            )
        } else if (pet.vakcinisan === true) {
            return (
                <input
                type="checkbox"
                checked={true}
              />
            )
        }
    }

    return renderVaccinationRow();
}

export default PetVaccination;