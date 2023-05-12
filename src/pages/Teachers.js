import "../App.css";
import { Link } from 'react-router-dom';
import GroupSelection from "../components/GroupSelection"
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context } from '..';

function Teachers() {
  const {load} = useContext(Context)
  const [item, setItems] = useState([]);
  const [groupId, setGroupId] = useState('1')
  let number = 0;

  const fetchItems= () => {
    axios
      .get("http://localhost:5000/api/loads?groupId=" + groupId)
      .then((response) => setItems(response.data));
  }

  useEffect(() => {
    fetchItems();
  }, []);
  
  const handleGroupChange = (value) =>{
    setGroupId(value)
    fetchItems();
  }

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
            <td width={'70%'} className="heading">Преподаватели</td>
            <td width={'15%'}>
              <GroupSelection onChange={handleGroupChange}/>
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <table className="table table-striped main_margins">
                <thead>
                  <tr>
                    <th scope="col">№</th>
                    <th scope="col">ФИО</th>
                    <th scope="col">Дисциплина</th>
                    <th scope="col">Вид занятия</th>
                    <th scope="col">Контакты</th>
                  </tr>
                </thead>
                <tbody>
                {item.map(load =>
                  <tr key={load.id}>
                    <th scope="row">{number = number + 1}</th>
                    <td>{load.teacher.FIO}</td>
                    <td>{load.discipline.name}</td>
                    <td>{load.type}</td>
                    <td>{load.teacher.contacts}</td>
                  </tr>
                )}
                </tbody>
              </table>
            </td>
          </tr>
      </table>
    </div>
  );
}

export default Teachers;