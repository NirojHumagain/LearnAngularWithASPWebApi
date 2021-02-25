import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://localhost:44362/api"

  constructor(private http:HttpClient) { }

  getAllData():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Personal-details')
  }
  addperson(val:any){
    return this.http.post(this.APIUrl+'/Personal-details', val)
  }

  updateperson(val:any){
    return this.http.put(this.APIUrl+'/Personal-details', val)
  }

  deleteperson(val:any){
    return this.http.delete(this.APIUrl+'/Personal-details'+val)
  }

}
