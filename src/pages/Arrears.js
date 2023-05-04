import "../App.css";
import { Link } from 'react-router-dom';
import GroupSelection from "../components/GroupSelection";
import TermSelection from "../components/TermSelection";
import React, { useContext, createContext, useEffect, useState } from "react";
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import axios from "axios";

const Arrear = observer(() => {
  const {arrear} = useContext(Context)
  const [item, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/arrears")
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
            <td width={'33%'} className="heading">Задолженности</td>
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
                    <th scope="col">ФИО</th>
                    <th scope="col">Дисциплина</th>
                    <th scope="col">Дата зачета</th>
                    {/* <th scope="col">Причина неуспеваемости</th> */}
                    {/* <th scope="col">Предпологаемая дата погашения</th> */}
                    <th scope="col">Дата погашения</th>
                  </tr>
                </thead>
                <tbody>
                {item.map(arrear =>
                  <tr key={arrear.id}>
                    <td>{arrear.student.FIO}</td>
                    <td>{arrear.load.discipline.name}</td>
                    <td>{arrear.offset_date}</td>
                    {/* <td>{arrear.reason}</td> */}
                    {/* <td>{arrear.planned_date}</td> */}
                    <td>{arrear.actual_date}</td>
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

export default Arrear;