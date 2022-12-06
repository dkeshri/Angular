import { TokenService } from './../../core/services/token.service';
import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { faLock,faUserLock } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/core/services/auth/authentication.service';
interface UserCrediential{
  shopId: number,
  userName:string,
  password:string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faUserLock = faUserLock;
  size = '20px';
  red = 'pink';
  shopId:number = 0;
  userName:string = '';
  password:string = '';
  // 
  faUserLockStyles = { 
    color: 'rgb(63 81 181)'
   };
  constructor(
    private authenticationService:AuthenticationService,
    private router:Router,
    private tokenService: TokenService
    ) { 
  }

  ngOnInit(): void {
  }

  onSubmit(){


    let userCrediential:UserCrediential = {} as UserCrediential;
    userCrediential.shopId = this.shopId;
    userCrediential.userName = this.userName;
    userCrediential.password = this.password;
    this.authenticationService.login(userCrediential)
    .subscribe((response)=>{
      console.log(response);
      this.router.navigate(['']);
    });
  }
}
