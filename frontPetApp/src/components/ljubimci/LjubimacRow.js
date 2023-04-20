import { useNavigate } from "react-router-dom";
import TestAxios from "../../apis/TestAxios";
import { useState, useEffect } from "react";
import { Row, Col, Button, Table, Form } from "react-bootstrap";
import moment from 'moment';

const LjubimacRow = (props) => {

    var navigate = useNavigate()
    var ljubimacId = props.ljubimac.id;
    

    const deleteLjubimac = (ljubimacId) => {
        TestAxios.delete('/ljubimci/' + ljubimacId)
        .then(res => {
            console.log(res);
            alert('Pet was deleted successfully!');
            props.onDelete();
        })
        .catch(error => {
            console.log(error);
            alert('Error occured please try again!');
         });
    }

    const udomljavanje = (id) => {
      const newDate = moment().format("YYYY-MM-DD HH:mm");

       var params = {
        datumUdomljavanja: newDate,
        ljubimacId: id,
         };
   
       TestAxios.post('/udomljavanja', params)
       .then(res => {
           console.log(res);
           alert('Uspesno ste udomili ljubimca!');
           window.location.reload(); 
       })
       .catch(error => {
           console.log(error);
           alert('Error occured please try again!');
        });
   }

    const renderLine = ()=> {
        if (props.ljubimac.vakcinisan === false) {
            return (<td>Nije vakcinisan</td>)
        } else if (props.ljubimac.vakcinisan === true) {return (<td>Vakcinisan</td>)}
    }

    const renderLineAdmin = () => {
        if (props.ljubimac.vakcinisan === false) {
            return (
                <input
                type="checkbox"
                checked={false}
                onClick={() => promena(props.ljubimac.id)}
              />
            )
        } else if (props.ljubimac.vakcinisan === true) {return (
            <input
                type="checkbox"
                checked={true}
                
              />
        )}
    }

    const vakcinacija = () => {
      if (window.localStorage.getItem("role") === "ROLE_KORISNIK") {
        return renderLine();
      } else if (window.localStorage.getItem("role") === "ROLE_ADMIN") {
        return renderLineAdmin();
      } else {return null}
    }

    const action = () => {
      if (window.localStorage.getItem("role") === "ROLE_KORISNIK" && props.ljubimac.udomljen === false && props.ljubimac.vakcinisan === true) {
        return (
        <td style={{ width: "10%" }}>
            <Button
            className="button button-navy"
            onClick={() => udomljavanje(props.ljubimac.id)} >Udomi </Button> 
         </td>)
      } else if (window.localStorage.getItem("role") === "ROLE_ADMIN") {
        return (
        <td style={{ width: "10%" }}>
            <Button
            className="button button-navy"
            onClick={() => deleteLjubimac(props.ljubimac.id)}
            style={{ backgroundColor: "red" }}> Delete </Button>
        </td>)
      } else {return <td style={{ width: "10%" }}/>}
    }




    const promena = (id) => {
      TestAxios.post(`/ljubimci/${id}/promena`)
        .then((res) => {
          console.log(res);
          alert("Uspesno ste promenili stanje!");
          props.onUdomljavanje();
        })
        .catch((error) => {
          console.log(error);
          alert("Error occured please try again!");
        });
    };

    return (
      <tr key={props.ljubimac.id} style={{textAlign: "center"}}>
        <td style={{ width: "15%" }}>{props.ljubimac.ime}</td>
        <td style={{ width: "10%" }}>{props.ljubimac.starost}</td>
        {vakcinacija()}
        <td style={{ width: "10%" }}>{props.ljubimac.pol}</td>
        <td style={{ width: "10%" }}>{props.ljubimac.tezina}</td>
        <td style={{ width: "25%" }}>{props.ljubimac.opis}</td>
        <td style={{ width: "15%" }}>{props.ljubimac.kategorijaNaziv}</td>
        {action()}
      </tr>
    );

}

export default LjubimacRow;