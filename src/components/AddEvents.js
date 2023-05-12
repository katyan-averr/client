import React, { useContext, createContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from '..';
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";

const AddEvents = observer(({show, onHide}) => {
    
    const {event} = useContext(Context)
    const [item, setItems] = useState([]);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [place, setPlace] = useState('');
    const [responsible, setResponsible] = useState('');
    const [note, setNote] = useState('');
    const [studentId, setStudentId] = useState(null);

    const addEvent = (() =>{
      axios
        .post("http://localhost:5000/api/events", {name: name, date: date, place: place, responsible: responsible, note: note, studentId:studentId}).then(data => onHide());
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
          Добавить данные о мероприятии
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control 
                value={name}
                onChange={e => setName(e.target.value)}
                className="mt-2 mb-2"
                placeholder={"Название мероприятия"}
            />
            <Form.Control 
                value={place}
                onChange={e => setPlace(e.target.value)}
                className="mt-2 mb-2"
                placeholder={"Место проведения"}
            />
            <input 
                value={date}
                onChange={e => setDate(e.target.value)}
                type="date" name="Date" id="davaToday" 
            />
            <Form.Control 
                value={responsible}
                onChange={e => setResponsible(e.target.value)}
                className="mt-2 mb-2"
                placeholder={"Ответственный"}
            />
            <Form.Control 
                value={note}
                onChange={e => setNote(e.target.value)}
                className="mt-2 mb-2"
                placeholder={"Примечание"}
            />
            <select class="form-select" onChange={e => setStudentId(e.target.value)}>
              {item.map(student =>
                <option value={student.id} key={student.id}>{student.FIO}</option>)}
            </select> 
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Отмена</Button>
        <Button variant="outline-success" onClick={addEvent}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    );
});

export default AddEvents;