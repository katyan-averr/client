import React,{ useContext, createContext, useState } from 'react';
import { Context } from '..';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";

const AddMeetings = ({show, onHide}) => {
    const {student} = useContext(Context)
    
    return(
        <Modal
            show ={show}
            onHide = {onHide}
            centered
        >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить данные о встрече
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown>
                <Dropdown.Toggle className="mt-2 mb-2">Студент</Dropdown.Toggle>
                <Dropdown.Menu>
                    {student.students.map(student =>
                      <Dropdown.Item 
                        onClick={() => student.setSelectedStudent(student)} 
                        key={student.id}>{student.FIO}
                      </Dropdown.Item>
                      )}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control className="mt-2 mb-2"
                placeholder={"Причина встречи"}
            />
            <Form.Control className="mt-2 mb-2"
                placeholder={"Результат встречи"}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Отмена</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default AddMeetings;