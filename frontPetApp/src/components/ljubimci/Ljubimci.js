import React, { useState, useEffect, useCallback } from "react";
import { Row, Col, Button, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TestAxios from "../../apis/TestAxios";
import LjubimacRow from "./LjubimacRow";
import store from "../../store";
import { petsActions } from "../../store/pets";

const Ljubimci = () => {

    const empty_search = {
        kategorijaPretraga: "",
        polPretraga: "",
        opisPretraga: ''
      };

      const [search, setSearch] = useState(empty_search);
      const [totalPages, setTotalPages] = useState(1);
      const [pageNo, setPageNo] = useState(0);
      const [ljubimci, setLjubimci] = useState([]);
      const [kategorije, setKategorije] = useState([]);
      var navigate = useNavigate();

      // Dispečovanje akcije
      store.dispatch(petsActions.fetchPets({ params: {/* parametri */} }));

      // Pretplata na promene stanja
      store.subscribe(() => {
        console.log('Ažurirano stanje:', store.getState().pets);
      });

      const getLjubimci = (newPageNo) => {
        const conf = {
          params: {
            kategorijaId: search.kategorijaPretraga,
            pol: search.polPretraga,
            opis: search.opisPretraga,
            pageNo: newPageNo,
          },
        };
    
        TestAxios.get("/ljubimci", conf)
          .then((result) => {
            console.log(result);
            setPageNo(newPageNo);
            setTotalPages(result.headers["total-pages"]);
            console.log(totalPages);
            setLjubimci(result.data);
          })
          .catch((error) => {
            console.log(error);
            alert("Error occured please try again!");
          });
      };

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
        getLjubimci(0);
        getKategorije();
      }, []);

      const onInputChange = (event) => {
        const { name, value } = event.target;
    
        setSearch((prevSearch) => ({
          ...prevSearch,
          [name]: value,
        }));
      };

      const renderLjubimac = useCallback(() => {
        return ljubimci.map((ljubimac) => {
          return (
            <LjubimacRow
              key={ljubimac.id}
              ljubimac={ljubimac}
              onDelete={() => getLjubimci(0)}
              onUdomljavanje={() => getLjubimci(0)}
            ></LjubimacRow>
          );
        });
      }, [ljubimci]);

      const goToAdd = () => {
        navigate("/ljubimci/add");
      };

      const renderSearchForm = () => {
        return (
          <>
          
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Opis</Form.Label>
                  <Form.Control
                    name="opisPretraga"
                    as="input"
                    type="text"
                    onChange={(e) => onInputChange(e)}
                    placeholder="Unesite opis"
                  ></Form.Control>
                </Form.Group>
              </Col>
              
              <Col>
                <Form.Group>
                  <Form.Label>Pol</Form.Label>
                  <Form.Select name="polPretraga" onChange={onInputChange}>
                    <option value="">Izaberi pol</option>
                    <option value="muski">Muski</option>
                    <option value="zensk">Zenski</option>
                    
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Katgorije</Form.Label>
                  <Form.Select name="kategorijaPretraga" onChange={onInputChange}>
                    <option value="">Izaberi kategoriju</option>
                    {kategorije.map((prev) => {
                      return (
                        <option value={prev.id} key={prev.id}>
                          {prev.naziv}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
              <Row style={{height: "16px"}}></Row>
                <Button  className="mt-3" onClick={() => getLjubimci(0)}>
                  Search
                </Button>
              </Col>
            </Row>
          </>
        );
      };

      return (
        <div>  

            
          <Col>

            <Row>
              <h1>Prikaz svih Ljubimaca</h1>
            </Row>
            
            <Row>{renderSearchForm()}</Row>
            <br />

            <Row>
              <Col><Button onClick={() => goToAdd()}>Dodaj ljubimca</Button></Col>
            <Col>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              disabled={pageNo === 0}
              onClick={() => getLjubimci(pageNo - 1)}
              className="mr-3"
            >
              Prev
            </Button>
            <Button
              disabled={pageNo === totalPages - 1}
              onClick={() => getLjubimci(pageNo + 1)}
            >
              Next
            </Button>
            </div>
            </Col>
            </Row>

            <br />
            <Row>
              <Col>
                <Table id="ljubimci-table">
                  <thead style={{ backgroundColor: "black", color: "white" }}>
                    <tr style={{textAlign: "center"}}>
                      <th>Ime</th>
                      <th>Starost(broj meseci) </th>
                      <th>Vakcinisan</th>
                      <th>Pol</th>
                      <th>Tezina</th>
                      <th>Opis</th>
                      <th>Kategorija</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{renderLjubimac()}</tbody>
                </Table>
              </Col>
            </Row>
          </Col>
        </div>
      );


}

export default Ljubimci;