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
            </td>
          </tr>
          <tr>
            <td colSpan="3">
            <div className="btn-group-vertical main_margins" role="group" aria-label="Basic outlined example">
                        <Link to={'/groupList'}><button type="button" className="btn btn-outline-primary button_menu menu_width">Список группы</button></Link>
                        <Link to={'/teachers'}><button type="button" className="btn btn-outline-primary button_menu menu_width">Преподаватели</button></Link>
                        <Link to={'/divisions'}><button type="button" className="btn btn-outline-primary button_menu menu_width">Подразделения ИРНИТУ</button></Link>
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