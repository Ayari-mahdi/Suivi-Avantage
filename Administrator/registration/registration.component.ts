import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { user } from '../../karama';
import { KaramaService } from '../../karama.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user:user;
  spinregister: boolean;
  constructor( 
    private svkarama:KaramaService,
    private _snackBar: MatSnackBar,
    private router : Router) 
    {this.user=new user}

  ngOnInit(): void {
    if(!this.svkarama.isUserLoggedIn())
    {
      this.router.navigate(['login']);
    }
    
  }
  onSubmit(){

   
    // this.router.navigate(['/users',input.value]);   //  
    console.log(this.user);
    this.svkarama.register(this.user).subscribe(
    (dataa) => {   this._snackBar.open('agent registred successfully ','dismiss' ,{
                    duration: 10000,panelClass:'green-snackbar'
                     });
                },
    (error) => {   this.spinregister=false;
                   this._snackBar.open('username exist already ','dismiss' ,{
                   duration: 10000,panelClass:'red-snackbar'
                   });
                  
                 });            
  }

}
