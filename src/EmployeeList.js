import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

const API = "http://dummy.restapiexample.com/api/v1";

export default function EmployeeList(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const result = await axios(`${API}/employees`);
            setData(result.data.data)
        }
        getData();
    }, [])

    const editEmployee = async (id) => {
        props.history.push(`/edit/${id}`)
    }

    const deleteEmployee = async (id) => {
        debugger;
        axios.delete(`${API}/delete/${id}`)
            .then((result) => {
                props.history.push('/')
            })
    }



    return (
        <div className="animated fadeIn">
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify">Employee List</i>
                        </CardHeader>
                        <CardBody>
                            <Table hover bordered striped responsive size="sm">
                                <thead>
                                    <tr>
                                        <td>Name</td>
                                        <td>Salary</td>
                                        <td>Age</td>
                                        <td>ACTION</td>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        data.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.employee_name}</td>
                                                    <td>{item.employee_salary}</td>
                                                    <td>{item.employee_age}</td>
                                                    <td>
                                                        <div className="btn-group btn-toolbar">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-primary btn-sm"
                                                                onClick={() => { editEmployee(item.id) }}
                                                            >
                                                                EDIT
                                                            </button>

                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-danger btn-sm"
                                                                onClick={() => { deleteEmployee(item.id) }}
                                                            >
                                                                DELETE
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}