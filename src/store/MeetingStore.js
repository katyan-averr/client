import {makeAutoObservable} from "mobx";

export default class MeetingStore{
    constructor() {
        this._meetings = [
            {id:1, FIO: 'Аверьянова Екатерина Дмитриевна', reason:'Какая-то причина', result:'Какой-то результат'},
            {id:2, FIO: 'Аверьянова Екатерина Дмитриевна', reason:'Какая-то причина', result:'Какой-то результат'},
            {id:3, FIO: 'Аверьянова Екатерина Дмитриевна', reason:'Какая-то причина', result:'Какой-то результат'},
            {id:4, FIO: 'Аверьянова Екатерина Дмитриевна', reason:'Какая-то причина', result:'Какой-то результат'},
        ]
        makeAutoObservable(this)
    }

    setMeetings(meetings){
        this._meetings = meetings
    }

    setSelectedMeeting(meeting){
        this._selectedMeeting = meeting
    }

    get meetings(){
        return this._meetings
    }
    
    get selectedMeeting(){
        return this._selectedMeeting
    }
    
}