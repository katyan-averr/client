import React from "react";
import { observer } from "mobx-react-lite";

import "../App.css";

const TermSelection = observer(() => {

  return (
    <select className="form-select">
        <option >1 семестр</option>
        <option >2 семестр</option>
        <option >3 семестр</option>
        <option >4 семестр</option>
      </select>
  );
});

export default TermSelection;