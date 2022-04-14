import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  
url:any = "https://tsi-frontend-challenge.s3.amazonaws.com/frontend-challenge.json";

constructor(private http:HttpClient) { }

getmemberList(){
  return this.http.get(this.url);
    }
}
