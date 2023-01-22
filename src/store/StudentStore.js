import {makeAutoObservable} from "mobx";

export default class StudentStore{
    constructor() {
        this._students = [
            {id: 1, FIO:'Аверьянова Екатерина Дмитриевна', birthdate: '2001-11-21', contacts: '89086562775', form_education: 'Бюджет', stud_info: 'Какая-то информация', parent_info: 'Какая-то информация'},
            {id: 2, FIO:'Аверьянова Екатерина Дмитриевна', birthdate: '2001-11-21', contacts: '89086562775', form_education: 'Бюджет', stud_info: 'Какая-то информация', parent_info: 'Какая-то информация'},
            {id: 3, FIO:'Аверьянова Екатерина Дмитриевна', birthdate: '2001-11-21', contacts: '89086562775', form_education: 'Бюджет', stud_info: 'Какая-то информация', parent_info: 'Какая-то информация'},
            {id: 4, FIO:'Аверьянова Екатерина Дмитриевна', birthdate: '2001-11-21', contacts: '89086562775', form_education: 'Бюджет', stud_info: 'Какая-то информация', parent_info: 'Какая-то информация'},
        ]
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