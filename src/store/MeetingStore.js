import {makeAutoObservable} from "mobx";

export default class MeetingStore{
    constructor() {
        this._meetings = []
        this._students = []
        this._groups = []
        this._selectedStudent ={}
        this._selectedGroup ={}
        makeAutoObservable(this)
    }

    setMeetings(meetings){
        this._meetings = meetings
    }

    setStudents(students){
        this._students = students
    }
    setStudents(groups){
        this._groups = groups
    }

    setSelectedMeeting(meeting){
        this._selectedMeeting = meeting
    }

    setSelectedStudent(student){
        this._selectedStudent = student
    }

    setSelectedGroup(group){
        this._selectedGroup = group
    }

    get meetings(){
        return this._meetings
    }

    get students(){
        return this._students
    }

    get groups(){
        return this._groups
    }
    
    get selectedMeeting(){
        return this._selectedMeeting
    }

    get selectedStudent(){
        return this._selectedStudent
    }

    get selectedGroup(){
        return this._selectedGroup
    }
}