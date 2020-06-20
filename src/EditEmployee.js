import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { 
    Button, Card, CardBody, 
    CardFooter, Col, Container, 
    Form, Input, InputGroup, 
    InputGroupAddon, InputGroupText, Row 
} from 'reactstrap';

import * as config from './apis.json';

export default function EditEmployee(props) {
    const [employee,setEmployee] = useState({name:"",salary:"",age:""})
    
    useEffect(()=>{
        const getData = async () => {
            const result = await axios(`${config.GET}/${props.match.params.id}`)
            console.log(result);
            setEmployee(result.data.data)
        }
        getData()
    },[])
    
    const handleChange = (e)=> {
        e.persist()
        setEmployee({
            ...employee,
            [e.target.name]:e.target.value
        })
    }

    const updateEmployee = async (e) =>{
        e.preventDefault();
        const data = {
            name:employee.name,
            salary:employee.salary,
            age:employee.age
        }
        axios.put(`${config.UPDATE}/${props.match.params.id}`,data)
            .then((result)=>{
                console.log(result)
                props.history.push('/list')
            }).catch((error)=>{
                console.log(error)
            })
    }

    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="12" lg="10" xl="8">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form onSubmit={updateEmployee}>
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