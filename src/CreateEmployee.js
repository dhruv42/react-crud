import React, { useState} from 'react';
import axios from 'axios'
import {
    Button, Card, CardBody,
    CardFooter, Col, Container,
    Form, Input, InputGroup, Row
} from 'reactstrap';

import * as config from './apis.json';

export default function CreateEmployee(props) {
    const [employee, setEmployee] = useState({ name: '', salary: '', age: '' })
    // const [showLoading, setShowLoading] = useState(false)

    const insertEmployee = async (e) => {
        e.preventDefault()
        const data = {
            name:employee.name,
            salary:employee.salary,
            age:employee.age
        }
        axios.post(config.CREATE,data)
            .then((result)=>{
                props.history.push('/')
            });
    }

    const handleChange = (e)=> {
        e.persist()
        setEmployee({
            ...employee,
            [e.target.name]:e.target.value
        })
    }

    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="12" lg="10" xl="8">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form onSubmit={insertEmployee}>
                                    <h1>Register</h1>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="name" id="name" placeholder="Name" value={employee.name} onChange={handleChange} />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <Input type="text" name="salary" id="salary" placeholder="Salary" value={employee.salary} onChange={handleChange} />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <Input type="text" name="age" id="age" placeholder="Age" value={employee.age} onChange={handleChange} />
                                    </InputGroup>

                                    <CardFooter className="p-4">
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <Button type="submit" className="btn btn-info mb-1" block>Save</Button>
                                            </Col>

                                            <Col xs="12" sm="6">
                                                <Button className="btn btn-info mb-1" block>Cancel</Button>
                                            </Col>
                                        </Row>
                                    </CardFooter>

                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}