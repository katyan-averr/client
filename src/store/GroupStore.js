import {makeAutoObservable} from "mobx";

export default class GroupStore{
    constructor() {
        this._groups = [
            {id:1, name: 'ИСТб 19-1'},
            {id:2, name: 'ИСТб 19-2'},
            {id:3, name: 'ИСМб 19-1'},
            {id:4, name: 'ИБб 19-1'},
        ]
        makeAutoObservable(this)
    }

    setGroups(groups){
        this._groups = groups
    }

    setSelectedGroup(group){
        this._selectedGroup = group
    }

    get groups(){
        return this._groups
    }
    
    get selectedGroup(){
        return this._selectedGroup
    }
    
}