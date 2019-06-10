import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private location:Location, private  authService:  AuthService, private  router:  Router) { }


  ngOnInit() {
  }
  
  login(form){
    this.authService.login(form.value).subscribe((res)=>{
      this.router.navigateByUrl('home');
    });
  }
  goback(){
    this.location.back();
  }
}
