import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
         
        
  signUpData={
    name:'',email:'',password:'',repeatPassword:''
   }

 constructor(private userService:UserService,private route:Router){

 }

 onSubmit() {
   console.log("data admin ",this.signUpData);

    if(this.signUpData.password !== this.signUpData.repeatPassword){
      // ToDO : use toast here
      window.confirm("password does not match")
    }
    
    else{
       let data={
         name:'',emailId:'',password:'',role:'user'
       }
       data.name=this.signUpData.name;
       data.emailId=this.signUpData.email
       data.password=this.signUpData.password
       //call user service
       this.userService.registerUser(data).subscribe(
         (response)=>{
            window.alert("Registerd Successfully");
            setTimeout(() => {
              this.route.navigate(['login']);
            }, 1000);
         },
         (error)=>{
          window.alert("Something went Wrong")
         }
       );

    }
 }
}
