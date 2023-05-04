import React, { useContext, createContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import "../App.css";
import { Context } from "..";
import axios from "axios";

const GroupSelection = observer(() => {
  const { group } = useContext(Context);
  const [item, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/groups")
      .then((response) => setItems(response.data));
  }, []);
  
  return (
    <select className="form-select">
        {item.map(group =>
        <option 
        onClick={() => group.setSelectedGroup(group)}
        key={group.id}
        >{group.name}</option>)}
      </select> 
  );
  
});

export default GroupSelection;
