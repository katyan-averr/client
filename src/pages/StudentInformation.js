import "../App.css";
import { Link } from 'react-router-dom';
import GroupSelection from "../components/GroupSelection"
import React,{ useContext, createContext } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const StudentInformation = observer(() => {
  const {student} = useContext(Context)
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
            <td width={'33%'} className="heading">Сведенья о студентах</td>
            <td width={'33%'}>
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
                    <th scope="col">Дата рождения</th>
                    <th scope="col">Контакты</th>
                    <th scope="col">Форма обучения</th>
                    <th scope="col">Сведенья о студенте</th>
                    <th scope="col">Сведенья о родителях</th>
                  </tr>
                </thead>
                <tbody>
                {student.students.map(student =>
                  <tr key={student.id}>
                    <th scope="row">{student.id}</th>
                    <td>{student.FIO}</td>
                    <td>{student.birthdate}</td>
                    <td>{student.contacts}</td>
                    <td>{student.form_education}</td>
                    <td>{student.stud_info}</td>
                    <td>{student.parent_info}</td>
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

export default StudentInformation;