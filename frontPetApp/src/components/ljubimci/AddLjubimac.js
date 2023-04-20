import React, { useState, useEffect, useCallback } from "react";
import { Row, Col, Button, Table, Form } from "react-bootstrap";
import TestAxios from "../../apis/TestAxios";
import { useNavigate } from "react-router-dom";

const AddLjubimac = () => {

    var ljubimac = {
        ime: '',
        starost: -1,
        pol: '',
        tezina: -1,
        opis: '',
        kategorijaId: -1,
        kategorijaNaziv: ''
      };

      const [addLjubimac, setAddLjubimac] = useState(ljubimac);
      var navigate = useNavigate();
      const [kategorije, setKategorije] = useState([]);


      const getKategorije = () => {
        TestAxios.get("/kategorije")
          .then((res) => {
            console.log(res);
            setKategorije(res.data);
          })
          .catch((error) => {
            console.log(error);
            alert("Error occured please try again!");
          });
      };

      useEffect(() => {
        getKategorije();
      }, []);

      const valueInputChanged = (e) => {
        const { name, value } = e.target;
  
        setAddLjubimac((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
     

      const create = (e) => {
        e.preventDefault();
      
         if (
          !addLjubimac.ime ||
          addLjubimac.starost < 0 ||
          !addLjubimac.pol ||
          addLjubimac.tezina < 0 ||
          !addLjubimac.opis ||
          addLjubimac.kategorijaId === -1
        ) {
          alert("Molimo Vas popunite sva polja.");
          return;
        }

        var params = {
          ime: addLjubimac.ime,
          starost: addLjubimac.starost,
          pol: addLjubimac.pol,
          tezina: addLjubimac.tezina,
          opis: addLjubimac.opis,
          kategorijaId: addLjubimac.kategorijaId
        };
    
        TestAxios.post('/ljubimci', params)
        .then(res => {
            console.log(res);
            alert('Pet was added successfully!');
            navigate('/ljubimci'); 
        })
        .catch(error => {
            console.log(error);
            alert('Error occured please try again!');
         });
    }

    return(
        <Row>
          
          <Col xs="12" sm="10" md="8">
            <h1>Dodavanje novih ljubimaca</h1>

            <Form>

              <Form.Group>
                <Form.Label htmlFor="ime">ime</Form.Label>
                <Form.Control
                  id="ime"
                  name="ime"
                  type="text"
                  placeholder="Unesite ime"
                  onChange={(e) => valueInputChanged(e)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="starost">starost</Form.Label>
                <Form.Control
                  type="number"
                  id="starost"
                  name="starost"
                  placeholder="Unesite starost"
                  onChange={(e) => valueInputChanged(e)}
                />
              </Form.Group>
  
              <Form.Group>
                  <Form.Label>Pol</Form.Label>
                  <Form.Select name="pol" onChange={(e) => valueInputChanged(e)}>
                    <option value="">Izaberi pol</option>
                    <option value="muski">Muski</option>
                    <option value="zenski">Zenski</option>
                  </Form.Select>
                </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="tezina">tezina</Form.Label>
                <Form.Control
                  type="number"
                  id="tezina"
                  name="tezina"
                  placeholder="Unesite tezinu"
                  onChange={(e) => valueInputChanged(e)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="opis">opis</Form.Label>
                <Form.Control
                  type="text"
                  id="opis"
                  name="opis"
                  placeholder="Unesite opis"
                  onChange={(e) => valueInputChanged(e)}
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Kategorija</Form.Label>
                    <Form.Select name="kategorijaId" onChange={(e) => valueInputChanged(e)}>
                    <option value="">Izaberi kategoriju</option>
                      {kategorije.map((prev) => {
                        return (
                          <option
                            key={prev.id}
                            value={prev.id}
                          >
                            {prev.naziv}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                </Col>
                </Row>

               
                

              <Button type="submit" onClick={create}>
                Edit
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
    )

}

export default AddLjubimac;