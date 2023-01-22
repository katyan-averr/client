import "../App.css";
import { Link } from 'react-router-dom';

function Teachers() {
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
            <td width={'33%'} className="heading">Преподаватели</td>
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
              <table className="table table-striped main_margins">
                <thead>
                  <tr>
                    <th scope="col">№</th>
                    <th scope="col">ФИО</th>
                    <th scope="col">Дисциплина</th>
                    <th scope="col">Контакты</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Иванов Иван Иванович</td>
                    <td>Математика</td>
                    <td>88005553535</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Петров Петр Петрович</td>
                    <td>Математика</td>
                    <td>88005553535</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Иванов Иван Иванович</td>
                    <td>Математика</td>
                    <td>88005553535</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Петров Петр Петрович</td>
                    <td>Математика</td>
                    <td>88005553535</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
      </table>
    </div>
  );
}

export default Teachers;