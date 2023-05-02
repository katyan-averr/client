import "../App.css";
import { Link } from 'react-router-dom';
import GroupSelection from "../components/GroupSelection"
import axios from "axios";
import React, { useContext, createContext, useEffect, useState } from "react";
import { Context } from '..';

function Teachers() {
  const {teacher} = useContext(Context)
  const [item, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/teachers")
      .then((response) => setItems(response.data));
  }, []);
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
              <GroupSelection />
            </td>
          </tr>
          <tr>
            <td colspan="3">
              <table className="table table-striped main_margins">
                <thead>
                  <tr>
                    <th scope="col">№</th>
                    <th scope="col">ФИО</th>
                    {/* <th scope="col">Дисциплина</th> */}
                    <th scope="col">Контакты</th>
                  </tr>
                </thead>
                <tbody>
                {item.map(teacher =>
                  <tr key={teacher.id}>
                    <th scope="row">{teacher.id}</th>
                    <td>{teacher.FIO}</td>
                    {/* <td>{teacher.discipline}</td> */}
                    <td>{teacher.contacts}</td>
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