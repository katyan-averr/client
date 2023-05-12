import "../App.css";
import { Link } from 'react-router-dom';
import GroupSelection from "../components/GroupSelection"
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const GroupList = observer(() => {
  const {student} = useContext(Context)
  const [item, setItems] = useState([]);
  const [groupId, setGroupId] = useState('1')
  let number = 0;

  const fetchItems= () => {
    axios
      .get("http://localhost:5000/api/students?groupId=" + groupId)
      .then((response) => setItems(response.data));
  }

  useEffect(() => {
    fetchItems();
  }, []);
  
  const handleGroupChange = (value) =>{
    setGroupId(value)
    fetchItems();
  }

  console.log(groupId)

  return (
    <div className="container main_margins">
      <table>
          <tr>
            <td width={'15%'}>
            <Link to={'/'}>
              <button
                type="button"
                className="btn btn-outline-primary button_menu"
              >
                Вернуться назад
              </button>
              </Link>
            </td>
            <td width={'70%'} className="heading">Список группы</td>
            <td width={'15%'} >
              <GroupSelection onChange={handleGroupChange} />
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <table className="table table-striped main_margins">
                <thead>
                  <tr>
                    <th scope="col">№</th>
                    <th scope="col">ФИО</th>
                  </tr>
                </thead>
                <tbody>
                {item.map(student =>
                  <tr key={student.id}>
                    <th scope="row">{number = number + 1}</th>
                    <td>{student.FIO}</td>
                  </tr>
                )}
                </tbody>
              </table>
            </td>
            
          </tr>
      </table>
    </div>
  );
})

export default GroupList;
