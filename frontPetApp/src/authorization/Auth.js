import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { login } from "../services/auth"
import classes from './Auth.module.css';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return(
            <Col>
                <Row className={`${classes.container} ${classes.columnWithBackground}`}>
                <Form>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" onChange={(e)=>setUsername(e.target.value)}></Form.Control>
                </Form>
                <Form>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)}></Form.Control>
                </Form>
                <Button onClick={() => login(username, password)} className={classes.button}>Log in</Button>
                </Row>
            </Col>
    )
}

export default Login