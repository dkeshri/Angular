import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  get(key:string){
    return JSON.parse(localStorage.getItem(key) || '{}') || {};
  }
  set(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
    return true;
  }
  remove(key:string){
    localStorage.removeItem(key);
    return true;
  }
  clear(){
    localStorage.clear();
  }
}
