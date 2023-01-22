import { Link } from 'react-router-dom';
import '../App.css';

function Main(){
    return (
        <div className="container main_margins">
            <table>
            <tr>
            <td width={'33%'}>
              <button
                type="button"
                className="btn btn-outline-primary button_menu"
              >
                Вернуться назад
              </button>
            </td>
            <td width={'33%'} className="heading">Кабинет куратора</td>
            <td width={'33%'}>
              <div className="group_selection">
                <button
                  className="btn btn-primary dropdown-toggle button_menu"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Группа
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item">ИСТб 19-1</a>
                  </li>
                  <li>
                    <a className="dropdown-item">ИСТб 19-2</a>
                  </li>
                  <li>
                    <a className="dropdown-item">ИСМб 19-1</a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="3">
            <div className="btn-group-vertical main_margins" role="group" aria-label="Basic outlined example">
                        <Link to={'/groupList'}><button type="button" className="btn btn-outline-primary button_menu menu_width">Список группы</button></Link>
                        <Link to={'/teachers'}><button type="button" className="btn btn-outline-primary button_menu menu_width">Преподаватели</button></Link>
                        <Link to={'/'}><button type="button" className="btn btn-outline-primary button_menu menu_width">Подразделения ИРНИТУ</button></Link>
                        <Link to={'/schedule'}><button type="button" className="btn btn-outline-primary button_menu menu_width">Расписания занятий</button></Link>
                        <Link to={'/events'}><button type="button" className="btn btn-outline-primary button_menu menu_width">Мероприятия</button></Link>
                        <Link to={'/meetings'}><button type="button" className="btn btn-outline-primary button_menu menu_width">Индивидуальные встречи</button></Link>
                        <Link to={'/grade'}><button type="button" className="btn btn-outline-primary button_menu menu_width">Успеваемость</button></Link>
                        <Link to={'/studentInformation'}><button type="button" className="btn btn-outline-primary button_menu menu_width">Сведенья о студентах</button></Link>
                        <Link to={'/arrears'}><button type="button" className="btn btn-outline-primary button_menu menu_width">Задолженности студентов</button></Link>
                    </div>
            </td>
          </tr>
      </table>
        </div>
    );
}

export default Main;