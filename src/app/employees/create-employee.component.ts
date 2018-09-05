import { Department } from './../models/department.model';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto= false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  dateOfBirth: Date= new Date(2018,11,30);
  
  employee:Employee= {
    id:null,
    name:null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: '-1',
    isActive: null,
    photoPath: null
  };

  departments: Department[] = [
    { id: 1, name: "HelpDesk" },
    { id: 2, name: "HR" },
    { id: 3, name: "IT" },
    { id: 4, name: "Payroll" },
    { id: 5, name: "Admin" }
  ];
  constructor() {
      this.datePickerConfig = Object.assign({}, { 
      containerClass: "theme-dark-blue" ,
      showWeekNumbers:false,
      minDate:new Date(2018, 0, 1),
      maxDate:new Date(2018,11,31),
      dateInputFormat:'DD/MM/YYYY'    
    });
  }
  togglePhotoPreview(){
    this.previewPhoto= !this.previewPhoto;
  }
  ngOnInit() {
  }

  saveEmployee(newEmployee: Employee): void {
    console.log(newEmployee);
  }


}
