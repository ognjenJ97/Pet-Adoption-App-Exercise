import React from "react";
import { Row, Col } from "react-bootstrap";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <Col className={`${classes.container} ${classes.columnWithBackground}`}>
        <Row>
          <div className={classes.box}>
            <h1>Welcome to the Animal Adoption Website!</h1>
          </div>
        </Row>
        <Row>
          <div className={classes.box}>
            <p>
              Find your new furry friend and provide them with a loving home.
            </p>
            <p>
              At Pet Paradise, we believe that every animal deserves a safe and
              loving home. <br /> Our mission is to connect you with your
              perfect companion and make the adoption process a joyful and
              rewarding experience.
            </p>
          </div>
        </Row>
        <Row>
          <div className={classes.box}>
            <p>Contact Information:</p>
            <p>Email: info@pethaven.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Pet Street, Cityville, Country</p>
          </div>
        </Row>
        <Row>
          {window.localStorage.getItem("role") === "ROLE_KORISNIK" ||
          window.localStorage.getItem("role") === "ROLE_ADMIN" ? (
            <Link to="/pets">See all our pets</Link>
          ) : (
            <Link to="/login">Log in to see our pets!</Link>
          )}
        </Row>
        <Row>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5615.1595693675645!2d19.825824461146205!3d45.276504587500845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b11025965befb%3A0x243afd70ecaf0e7c!2z0J_QtdGCINGG0LXQvdGC0LDRgCDQndC-0LLQuCDQodCw0LQ!5e0!3m2!1ssr!2srs!4v1685042343418!5m2!1ssr!2srs"
            width="50rem"
            height="450"
            style={{ border: "0", width: "50rem" }} // Stilovi se definišu kao JavaScript objekti
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Row>
        <Row className={classes.footerRow}>
          <p className={classes.footerText}>Pet Center Co since 2020</p>
        </Row>
      </Col>
    );
  }
}

export default Home;
