import React,{ useContext, createContext } from 'react';
import { observer } from 'mobx-react-lite';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../App.css";
import { Context } from '..';

// const Context = createContext("without provider");

const GroupSelection = observer(() => {
    const {group} = useContext(Context)
    return (
        <DropdownButton id="dropdown-basic-button" title="Группа">
            {group.groups.map(group =>
            <Dropdown.Item key={group.id}>{group.name}</Dropdown.Item>
            )}
        </DropdownButton>
    );
})

export default GroupSelection;