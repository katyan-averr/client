import "../App.css";
import { Link } from 'react-router-dom';

function Events() {
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
            <td colspan="4">
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
                  <tr>
                    <th scope="row">1</th>
                    <td>Поход в музей</td>
                    <td>Музей</td>
                    <td>Иванов Иван Иванович</td>
                    <td>22.05.2022</td>
                    <td>Список учасников</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Поход в музей</td>
                    <td>Музей</td>
                    <td>Иванов Иван Иванович</td>
                    <td>22.05.2022</td>
                    <td>Список учасников</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Поход в музей</td>
                    <td>Музей</td>
                    <td>Иванов Иван Иванович</td>
                    <td>22.05.2022</td>
                    <td>Список учасников</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Поход в музей</td>
                    <td>Музей</td>
                    <td>Иванов Иван Иванович</td>
                    <td>22.05.2022</td>
                    <td>Список учасников</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
      </table>
    </div>
  );
}

export default Events;