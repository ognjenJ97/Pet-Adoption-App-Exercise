import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { login } from "../services/auth"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return(
        <Row className="justify-content-center">
            <Col md={6}>
                <Form>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" onChange={(e)=>setUsername(e.target.value)}></Form.Control>
                </Form>
                <Form>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)}></Form.Control>
                </Form>
                <Button onClick={() => login(username, password)}>Log in</Button>
            </Col>
        </Row>
    )
}

export default Login