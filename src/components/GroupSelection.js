import React, { useContext, createContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../App.css";
import { Context } from "..";
import { fetchGroups } from "../http/groupAPI";
import axios from "axios";

const GroupSelection = observer(() => {
  const { group } = useContext(Context);
  const { student } = useContext(Context);
  const [item, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/groups")
      .then((response) => setItems(response.data));
  }, []);

  //   useEffect(() => {
  //     fetchGroups().then((data) => group.setGroups(data.data));
  //   }, []);

  return (
    // <DropdownButton
    //   id="dropdown-basic-button"
    //   title="Группа"
    //   // onClick={() => group.setSelectedGroup(group)}
    // >
    //   {item.map((group) => (
    //     <Dropdown.Item 
    //     onClick={() => group.setSelectedGroup(group)} 
    //     key={group.id}>{group.name}</Dropdown.Item>
    //   ))}
    // </DropdownButton>

    // <Dropdown>
    // <Dropdown.Toggle className="mt-2 mb-2">Группа</Dropdown.Toggle>
    // <Dropdown.Menu>
    //     {item.map(group =>
    //       <Dropdown.Item 
    //         onClick={() => group.setSelectedGroup(group)} 
    //         key={group.id}>{group.name}
    //       </Dropdown.Item>
    //       )}
    // </Dropdown.Menu>
    // </Dropdown>

    <select class="form-select">
        {item.map(group =>
        <option onClick={() => group.setSelectedGroup(group)}key={group.id}>{group.name}</option>)}
      </select>
  );
});

export default GroupSelection;
