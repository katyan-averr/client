import {makeAutoObservable} from "mobx";

export default class StudentStore{
    constructor() {
        this._students = []
        makeAutoObservable(this)
    }

    setStudents(students){
        this._students = students
    }

    setSelectedStudent(student){
        this._selectedStudent = student
    }

    get students(){
        return this._students
    }

    get selectedStudent(){
        return this._selectedStudent
    }
    
}