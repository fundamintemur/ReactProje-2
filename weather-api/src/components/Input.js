import { useContext } from 'react';
import { MDBContainer } from "mdb-react-ui-kit";
import InputContext from '../context/InputContext';

function Input() {
 
const { city, setCity, cities } = useContext(InputContext)

return (
    <MDBContainer>
      <div className="form-outline mb-4">
        <label className="form-label fw-bold mt-2" htmlFor="exampleSelect">
          İl Seçiniz...
        </label>
        <select className="form-select w-75 mx-auto" id="exampleSelect"  onChange={(e) => setCity(e.target.value)}>
        <option defaultValue={city || "Seçiniz"}>{city || "Seçiniz"}</option>
          {
            cities.map((item) => (
              <option key={item.id}>{item.name}</option>
            ))
          }
        </select>
      </div>
    </MDBContainer>
  );
}

export default Input;