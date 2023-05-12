import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import "../App.css";
import { Context } from "..";
import axios from "axios";

const GroupSelection = observer(({onChange}) => {
  const { group } = useContext(Context);
  const [item, setItems] = useState([]);
  const [groupId, setGroupId] = useState('');


  const handleGroupChange = (event) =>{
    setGroupId(event.target.value)
    onChange(event.target.value)
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/groups")
      .then((response) => setItems(response.data));
  }, []);
  
  return (
    <select className="form-select"
    onChange={handleGroupChange}>
        {item.map(group =>
        <option 
        value={group.id}
        key={group.id}
        >{group.name}</option>)}
      </select> 
  );
  
});

export default GroupSelection;
