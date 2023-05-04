import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Dropdown from "react-bootstrap/Dropdown";
import "../App.css";
import { Context } from "..";
import axios from "axios";

const StudentSelection = observer(({show, onHide}) => {
    const {student} = useContext(Context)
    const {meeting} = useContext(Context)
    const [item, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/students")
      .then((response) => setItems(response.data));
  }, []);

  return (
    // <Dropdown>
    //         <Dropdown.Toggle className="mt-2 mb-2">{student.FIO || "Студент"}</Dropdown.Toggle>
    //          <Dropdown.Menu>
    //              {item.map(student =>
    //                   <Dropdown.Item 
    //                     onClick={onHide}
    //                     key={student.id}>{student.FIO}
    //                   </Dropdown.Item>
    //                   )}
    //             </Dropdown.Menu>
    // </Dropdown>

      <select className="form-select">
        {item.map(student =>
        <option onClick={() => meeting.setSelectedStudent(student)} key={student.id}>{student.FIO}</option>)}
      </select>
  );
});

export default StudentSelection;