import "../App.css";
import { Link } from 'react-router-dom';
import React, { useContext, createContext, useEffect, useState } from "react";
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { Container } from "react-bootstrap";
import GroupSelection from "../components/GroupSelection"
import axios from "axios";

const Events = observer(() => {

  const {event} = useContext(Context)
  const [item, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/events")
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
            <td width={'33%'} className="heading">Мероприятия</td>
            <td width={'17%'}><button type="button" className="btn btn-outline-primary button_menu">Добавить запись</button></td>
            <td width={'17%'}>
              <GroupSelection />
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <table className="table table-striped main_margins">
                <thead>
                  <tr>
                    <th scope="col">№</th>
                    <th scope="col">Мероприятие</th>
                    <th scope="col">Место проведения</th>
                    <th scope="col">Ответственный</th>
                    <th scope="col">Дата проведения</th>
                    <th scope="col">Участники</th>
                  </tr>
                </thead>
                <tbody>
                {item.map(event =>
                  <tr key={event.id}>
                    <th scope="row">{event.id}</th>
                    <td>{event.name}</td>
                    <td>{event.place}</td>
                    <td>{event.responsible}</td>
                    <td>{event.date}</td>
                    <td>{event.student.FIO}</td>
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

export default Events;