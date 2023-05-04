import "../App.css";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Divisions = observer(() => {
  return (
    <div className="container main_margins">
      <table>
        <tr>
          <td width={"15%"}>
            <Link to={"/"}>
              <button
                type="button"
                className="btn btn-outline-primary button_menu"
              >
                Вернуться назад
              </button>
            </Link>
          </td>
          <td width={"70%"} className="heading">
            Контактные данные подразделений ИРНИТУ
          </td>
          <td width={"15%"}></td>
        </tr>
        <tr>
          <td colSpan="3">
            <div className="divisions_margins">
              <ul>
                <p>
                  <li>
                    <a href="https://www.istu.edu/kontakty/telefonnyy_spravochnik/administrativnye_podrazdeleniya">
                      Административные подразделения
                    </a>
                  </li>
                </p>
                <p>
                  <li>
                    <a href="https://www.istu.edu/kontakty/telefonnyy_spravochnik/obshchestvennye_obedineniya">
                      Первичная профсоюзная организация студентов ИРНИТУ
                    </a>
                  </li>
                </p>
                <p>
                  <li>
                    <a href="https://www.istu.edu/kontakty/telefonnyy_spravochnik/uchebnye_podrazdelenija">
                      Учебные подразделения
                    </a>
                  </li>
                </p>
                <p>
                  <li>
                    <a href="https://www.istu.edu/deyatelnost/sport/sportivnyy_klub/rasp_22">
                      Спортивные секции Спортклуба ИРНИТУ
                    </a>
                  </li>
                </p>
                <p>
                  <li>
                    <a href="https://www.istu.edu/deyatelnost/molodezhnaya_politika/mp/tsentr_kmivr/tvorcheskie_kollektivy">
                      Творческие коллективы
                    </a>
                  </li>
                </p>
              </ul>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
});

export default Divisions;
