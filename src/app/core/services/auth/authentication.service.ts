import { Observable, map } from 'rxjs';
import { ApiService } from './../api/api.service';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import { AuthenticatedUser } from '../../model/authenticated-user.model';

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
  login(userCrediential:any):Observable<boolean>{
    return this.apiService.post('auth/login',userCrediential).pipe(
      map((response:AuthenticatedUser)=>{
        this.tokenService.setToken(response);
        return true;
      })
    );
  }
}
