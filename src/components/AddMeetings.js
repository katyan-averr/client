import React from "react";
import {Button, Form, Modal} from "react-bootstrap";

const AddMeetings = ({show, onHide}) => {
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
                placeholder={"Введите причину встречи"}
            />
            <Form.Control 
                placeholder={"Введите результат встречи"}
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