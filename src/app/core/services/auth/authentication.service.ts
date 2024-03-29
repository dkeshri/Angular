import {AuthenticatedUser, UserCrediential } from './../../model/authenticated-user.model';
import { Observable, map, of } from 'rxjs';
import { ApiService } from './../api/api.service';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private apiService: ApiService,
    private tokenService: TokenService) { }

  isAuthenticated(){
    return this.tokenService.getToken()!=null;
  }
  logout(){
    this.tokenService.logout();
  }
  login(userCrediential:UserCrediential):Observable<boolean>{
    // return this.apiService.post('auth/login',userCrediential).pipe(
    //   map((response:AuthenticatedUser)=>{
    //     this.tokenService.setToken(response);
    //     return true;
    //   })
    // );
    let authUser:AuthenticatedUser = {} as AuthenticatedUser;
    authUser.token = 'jfsldkfjdlsfjdslfkjs dfjfl sjfldskjfljkf';
    authUser.userName = userCrediential.userName;
    this.tokenService.setToken(authUser);
    return of(true);
  }
}
