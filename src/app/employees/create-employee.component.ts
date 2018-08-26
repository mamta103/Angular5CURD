import { Department } from './../models/department.model';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  departments: Department[]=[
    {id:1, name:"HelpDesk"},
    {id:2, name:"HR"},
    {id:3, name:"IT"},
    {id:4, name:"Payroll"},
    {id:5, name:"Admin"}
  ];
  constructor() { }

  ngOnInit() {
  }

  saveEmployee(empForm:NgForm): void{
    console.log(empForm.value);
  }
  

}
