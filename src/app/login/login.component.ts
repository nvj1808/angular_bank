import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router:Router, private ds:DataService, private fb:FormBuilder ){ }

  ngOnInit(): void {
      
  }


  loginForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })

  login(){
   let psw = this.loginForm.value.psw
   let acno = this.loginForm.value.acno

   if(this.loginForm.valid){
      const loginResult = this.ds.login(acno,psw)

      if(loginResult){
      this.router.navigateByUrl("dashboard")
      }else{
      alert("Incorrect account number or password")
   }
   }else{
    alert("Validation error")
   }
  }
}






























// login(a:any,b:any){
//   // console.log(a.value);
  
  
//   var acnum=a.value
//   var psw=b.value
//   var userDetails=this.userDetails
//   if(acnum in userDetails)
//   if(psw==userDetails[acnum]["password"]){
//     alert("login success")
//   }
//   else{
//     alert("incurrect password")
//   }
//   else{
//     alert("acno incurrect or not registered yet")
//   }

// }


// acnoChange(event:any){
//  this.acno=event.target.value
  
// }
// pswrdChange(event:any){
// this.psw=event.target.value
// // console.log(this.psw);

// }

