import "../App.css";
import { Link } from 'react-router-dom';
import GroupSelection from "../components/GroupSelection";
import TermSelection from "../components/TermSelection";
import React, { useContext, createContext, useEffect, useState } from "react";
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import axios from "axios";

const Grade = observer(() => {
  const {grade} = useContext(Context)
  const [item, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/grades")
      .then((response) => setItems(response.data));
  }, []);

  return (
    <div className="container main_margins">
      <table>
          <tr>
            <td width={'33%'}>
            <Link to={'/'}>
              <button
                type="button"
                className="btn btn-outline-primary button_menu"
              >
                Вернуться назад
              </button>
              </Link>
            </td>
            <td width={'33%'} className="heading">Успеваемость</td>
            <td width={'17%'}>
              <TermSelection />
            </td>
            <td width={'17%'}>
              <GroupSelection />
            </td>
          </tr>
          <tr>
            <td colSpan="4">
            
              <table className="table table-striped main_margins">
                <thead>
                  <tr>
                    <th scope="col">ФИО/Предмет</th>
                    {item.map(grade =>
                    <td key={grade.id}>{grade.load.discipline.name}</td>)}
                  </tr>
                </thead>
                <tbody>
                {item.map(grade =>
                  <tr key={grade.id}>
                    <td>{grade.student.FIO}</td>
                    <td>{grade.result}</td>
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

export default Grade;