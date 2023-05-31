import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Link, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './authorization/Auth';
import { logout } from './services/auth';
import classes from './index.module.css';
import { Provider } from 'react-redux';
import store from './store';
import Pets from './components/pets/Pets';
import AddPet from './components/pets/AddPet';


const App = () => {

    if(window.localStorage.getItem("jwt")){
    return (
      <>
        <Router>
          <Navbar expand bg="dark" variant="dark" className={classes.container}>
            <Nav className={classes.nav}>
              <Nav.Link as={Link} to="/">
                Home page
              </Nav.Link>
              <Nav.Link as={Link} to="/pets">
                Pets
              </Nav.Link>
              <Button onClick={logout}>Log out</Button>
            </Nav>
          </Navbar>
          <Container style={{ paddingTop: "10px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate replace to="/login" />} />
              <Route path="/pets/add" element={<AddPet />} />
              <Route path="/pets" element={<Pets />} />
            </Routes>
          </Container>
        </Router>
      </>
    )}else{
        return (
            <>
            <Router>
                <Navbar expand bg="dark" variant="dark" className={classes.container}>
                <Nav className={classes.nav}>
                    <Nav.Link as={Link} to="/">
                        Home page
                    </Nav.Link>
                    <Nav.Link as={Link} to="/login">
                        Login
                    </Nav.Link>
                    </Nav>
            </Navbar>
            <Container style={{paddingTop:"10px"}}>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="*" element={<Navigate replace to="/login" />} />
                </Routes>
            </Container>
            </Router>
        </>
        )
   
        }
};


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
