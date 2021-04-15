import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { user } from '../karama';
import { KaramaService } from '../karama.service';
import { VersioningComponent } from '../versioning/versioning.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:user;
token:string;
spinlogin= false;
  constructor(
    private svkarama:KaramaService,
    private _snackBar: MatSnackBar,
    private router : Router,
    ) { this.user=new user}

  ngOnInit(): void {
  }
  onSubmit(){

   
    // this.router.navigate(['/users',input.value]);   //  
    console.log(this.user);
    this.svkarama.login(this.user).subscribe(
    (dataa) => {  this.spinlogin=false;
                  this.token=dataa;
                  console.log(this.token);
                  this.router.navigate(['Suivi-Avantage'])
                    },
 
    (error) => {   this.spinlogin=false;
                   this._snackBar.open('wrong username or password ','dismiss' ,{
                   duration: 10000,panelClass:'red-snackbar'
                   });
                   this.ngOnInit();
                   });            
}

}
