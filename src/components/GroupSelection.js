import React,{ useContext, createContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../App.css";
import { Context } from '..';
import { fetchGroups } from '../http/groupAPI';
import axios from "axios";


const GroupSelection = observer(() => {
    const {group} = useContext(Context)

    useEffect(() => {
        fetchGroups().then(data => group.setGroups(data.data))
    }, [])
    return (
        <DropdownButton id="dropdown-basic-button" title="Группа"
        onClick={() => group.setSelectedGroup(group)}
        >
            {group.groups.map(group =>
            <Dropdown.Item key={group.id}>{group.name}</Dropdown.Item>
            )}
        </DropdownButton>
    );
})


export default GroupSelection;