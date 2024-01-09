import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/modal/place';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{

        placeList:Place[]=[]
        preferenceList:any[]=[]
        formData={
          startDate:'',endDate:'',preference:''
        }
       constructor(private userService:UserService,
        private router:Router,private authService:AuthService){

       }
       

       ngOnInit(): void {
       

           this.getTagsFromPlace();
           console.log("authenticated ",this.authService.isAuthenticatedUser())
       }

      getTagsFromPlace() {
         this.userService.getAllTags().subscribe(data=>{
          this.preferenceList=data
         })
      }


      onSubmit(){
         console.log("formdata",this.formData)
         this.userService.getPlacesByTag(this.formData.preference).subscribe(
           data=>{
                console.log("Return *** data",data);
                this.router.navigate(['user/booking/',this.formData.preference])
           }
         )
      }

      onPreferenceChange() {
        console.log('Selected preference:', this.formData.preference);
      }

      logOut() {
        this.authService.logout();
        this.router.navigate(['/']);
      }
}
