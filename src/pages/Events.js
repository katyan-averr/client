import "../App.css";
import { Link } from 'react-router-dom';
import React, { useContext, createContext, useEffect, useState } from "react";
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import GroupSelection from "../components/GroupSelection"
import axios from "axios";
import AddEvents from "../components/AddEvents";

const Events = observer(() => {
  const [AddEventVisible, setAddEventVisible] = useState(false)
  const {event} = useContext(Context)
  const [item, setItems] = useState([]);
  let number = 0;

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
            <td width={'17%'}><button type="button" className="btn btn-outline-primary button_menu" onClick={() => setAddEventVisible(true)}>Добавить запись</button></td>
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
                    <th scope="col">Примечание</th>
                  </tr>
                </thead>
                <tbody>
                {item.map(event =>
                  <tr key={event.id}>
                    <th scope="row">{number = number + 1}</th>
                    <td>{event.name}</td>
                    <td>{event.place}</td>
                    <td>{event.responsible}</td>
                    <td>{event.date}</td>
                    <td>{event.student.FIO}</td>
                    <td>{event.note}</td>
                  </tr>
                )}
                </tbody>
              </table>
            </td>
          </tr>
      </table>
      <AddEvents show={AddEventVisible} onHide={() => setAddEventVisible(false)} />
    </div>
  );
})

export default Events;