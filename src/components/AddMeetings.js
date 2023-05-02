import React, { useContext, createContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from '..';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import axios from "axios";
import StudentSelection from "./StudentSelection";

const AddMeetings = observer(({show, onHide}) => {
    
    const {meeting} = useContext(Context)
    const [item, setItems] = useState([]);
    const [reason, setReason] = useState('');
    const [result, setResult] = useState('');

    const addMeeting = (() =>{
      const formData = new FormData()
      formData.append('reason', reason)
      formData.append('result', result)
      // formData.append('studentId', meeting.selectedStudent.id)
      axios
        .post("http://localhost:5000/api/meetings", formData).then(data => onHide());
    });

    useEffect(() => {
      axios
        .get("http://localhost:5000/api/students")
        .then((response) => setItems(response.data));
    }, []);
    
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
            <Form.Control 
                value={reason}
                onChange={e => setReason(e.target.value)}
                className="mt-2 mb-2"
                placeholder={"Причина встречи"}
            />
            <Form.Control 
                value={result}
                onChange={e => setResult(e.target.value)}
                className="mt-2 mb-2"
                placeholder={"Результат встречи"}
            />
            {/* <StudentSelection /> */}
            {/* <select class="form-select">
              {item.map(student =>
                <option onClick={() => meeting.setSelectedStudent(student)} key={student.id}>{student.FIO}</option>)}
            </select> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Отмена</Button>
        <Button variant="outline-success" onClick={addMeeting}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    );
});

export default AddMeetings;