import "../App.css";
import { Link } from 'react-router-dom';
import AddMeetings from "../components/AddMeetings"
import React,{ useContext, createContext, useState } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { Container } from "react-bootstrap";
import GroupSelection from "../components/GroupSelection"

const Meetings = observer(() => {
  const [AddMeetingVisible, setAddMeetingVisible] = useState(false)

  return (
    <Container className="container main_margins">
      
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
            <td width={'33%'} className="heading">Встречи</td>
            <td width={'17%'}><button type="button" className="btn btn-outline-primary button_menu" onClick={() => setAddMeetingVisible(true)}>Добавить запись</button></td>
            <td width={'17%'}>
              <GroupSelection />
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <table className="table table-striped main_margins">
                <thead>
                  <tr>
                    <th scope="col">№</th>
                    <th scope="col">ФИО</th>
                    <th scope="col">Причины и вопросы встречи</th>
                    <th scope="col">Достигнутые результаты</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Иванов Иван Иванович</td>
                    <td>Какая-то причина</td>
                    <td>Какой-то результат</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Иванов Иван Иванович</td>
                    <td>Какая-то причина</td>
                    <td>Какой-то результат</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Иванов Иван Иванович</td>
                    <td>Какая-то причина</td>
                    <td>Какой-то результат</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Иванов Иван Иванович</td>
                    <td>Какая-то причина</td>
                    <td>Какой-то результат</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          
      </table>
      <AddMeetings show={AddMeetingVisible} onHide={() => setAddMeetingVisible(false)} />
    </Container>
  );
})

export default Meetings;