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
            <td width={'33%'} className="heading">Задолженности</td>
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
                    <th scope="col">ФИО</th>
                    <th scope="col">Дисциплина</th>
                    <th scope="col">Дата зачета</th>
                    <th scope="col">Причина неуспеваемости</th>
                    <th scope="col">Предпологаемая дата погашения</th>
                    <th scope="col">Фактическая дата погашения</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Иванов Иван Иванович</td>
                    <td>Физика</td>
                    <td>25.12.2022</td>
                    <td>Какая-то причина</td>
                    <td>15.01.2023</td>
                    <td>15.01.2023</td>
                  </tr>
                  <tr>
                    <td>Петров Петр Петрович</td>
                    <td>Теория вероятностей</td>
                    <td>20.12.2022</td>
                    <td>Какая-то причина</td>
                    <td>25.01.2023</td>
                    <td>08.02.2023</td>
                  </tr>
                  <tr>
                    <td>Васильев Василий Васильевич</td>
                    <td>Дискретная математика</td>
                    <td>28.12.2022</td>
                    <td>Какая-то причина</td>
                    <td>10.01.2023</td>
                    <td>24.01.2023</td>
                  </tr>
                  <tr>
                    <td>Никитин Никита Никитич</td>
                    <td>Физика</td>
                    <td>25.12.2022</td>
                    <td>Какая-то причина</td>
                    <td>15.01.2023</td>
                    <td>15.01.2023</td>
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