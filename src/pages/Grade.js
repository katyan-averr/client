import "../App.css";
import { Link } from 'react-router-dom';

function Grade() {
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
            <div className="term_selection">
                <button
                  className="btn btn-primary dropdown-toggle button_menu"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Семестр
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item">1 семестр</a>
                  </li>
                  <li>
                    <a className="dropdown-item">2 семестр</a>
                  </li>
                  <li>
                    <a className="dropdown-item">3 семестр</a>
                  </li>
                  <li>
                    <a className="dropdown-item">4 семестр</a>
                  </li>
                </ul>
              </div>
            </td>
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
                    <th scope="col">ФИО/Предмет</th>
                    <td>Математика</td>
                    <td>Физика</td>
                    <td>Программирование</td>
                    <td>ООП</td>
                    <td>Управление данными</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Петров Петр Петрович</td>
                    <td>зачет</td>
                    <td>незачет</td>
                    <td>зачет</td>
                    <td>незачет</td>
                    <td>зачет</td>
                  </tr>
                  <tr>
                    <td>Васильев Василий Васильевич</td>
                    <td>зачет</td>
                    <td>зачет</td>
                    <td>зачет</td>
                    <td>зачет</td>
                    <td>зачет</td>
                  </tr>
                  <tr>
                    <td>Никитин Никита Никитич</td>
                    <td>зачет</td>
                    <td>зачет</td>
                    <td>зачет</td>
                    <td>зачет</td>
                    <td>незачет</td>
                  </tr>
                  <tr>
                    <td>Иванов Иван Иванович</td>
                    <td>незачет</td>
                    <td>незачет</td>
                    <td>незачет</td>
                    <td>зачет</td>
                    <td>зачет</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
      </table>
    </div>
  );
}

export default Grade;