import {makeAutoObservable} from "mobx";

export default class MeetingStore{
    constructor() {
        this._meetings = []
        this._students = []
        this._selectedStudents ={}
        makeAutoObservable(this)
    }

    setMeetings(meetings){
        this._meetings = meetings
    }

    setStudents(students){
        this._students = students
    }

    setSelectedMeeting(meeting){
        this._selectedMeeting = meeting
    }

    setSelectedStudent(student){
        this._selectedStudent = student
    }

    get meetings(){
        return this._meetings
    }

    get students(){
        return this._students
    }
    
    get selectedMeeting(){
        return this._selectedMeeting
    }

    get selectedStudent(){
        return this._selectedStudent
    }
}