import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { animationFrames } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  user:any
  
 acno:any


  constructor(private ds:DataService,private  fb:FormBuilder,private router:Router){

    this.user=this.ds.currentUser
  }
  depositeForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    amnt:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })

  withdrawForm=this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],
    amnt1:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw1:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })

  ngOnInit(): void{
    if(!localStorage.getItem("currentAcno")){
alert("please login")
this.router.navigateByUrl("")
    }
  }


  Deposit(){

var acno=this.depositeForm.value.acno
var psw=this.depositeForm.value.psw
var amnt=this.depositeForm.value.amnt
if(this.depositeForm.valid){
const result=this.ds.deposit(acno,psw,amnt)
if(result){
alert(`your ac has been credited with amount ${amnt}. balance is ${result}`)
}
else{
  alert("incurrect acno or password")
}
  }
  else{
    alert("invalid form")
  }
  }

  Withdraw(){
    
    var acno=this.withdrawForm.value.acno1
var psw=this.withdrawForm.value.psw1
var amnt=this.withdrawForm.value.amnt1
    const result=this.ds.Withdraw(acno,psw,amnt)
    if(this.depositeForm.valid){
    if(result){
      alert(`your ac has been debited with amount ${amnt}.
       balance is ${result}`)
      }}
      
      else{
        alert("invalid form")
      }
  }
logout(){
  localStorage.removeItem('currentUser')
  localStorage.removeItem('currentAcno')
  this.router.navigateByUrl("")

}
deleteParent(){
 this.acno=JSON.parse(localStorage.getItem('currentAcno') || "")

}
}