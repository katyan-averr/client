import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
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
      <select className="form-select">
        {item.map(student =>
        <option onClick={() => meeting.setSelectedStudent(student)} key={student.id}>{student.FIO}</option>)}
      </select>
  );
});

export default StudentSelection;