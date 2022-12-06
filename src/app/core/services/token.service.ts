import { AppConstants } from './../../shared/models/app-constants';
import { LocalStorageService } from './storages/local-storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private localStorageService: LocalStorageService) { }
  getToken(){
    let userData = this.localStorageService.get(AppConstants.AUTH_USER_KEY);
    if(userData.hasOwnProperty('token')){
      return userData['token'];
    }
    return null;

  }
  setToken(token:any){
    this.localStorageService.set(AppConstants.AUTH_USER_KEY,token);
  }
  logout(){
    this.localStorageService.remove(AppConstants.AUTH_USER_KEY);
  }
}
