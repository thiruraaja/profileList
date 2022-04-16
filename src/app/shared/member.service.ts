import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  
  
url:any = "https://tsi-frontend-challenge.s3.amazonaws.com/frontend-challenge.json";
//url:any = "https://jsonplaceholder.typicode.com/posts";

constructor(private http:HttpClient) { }

allPassedData: BehaviorSubject<any> = new BehaviorSubject<any>([]);

getmemberList(){
  return this.http.get(this.url);
    }

    sendDatas(passedData:any) {
      this.allPassedData.next(passedData);
  }

  retrievePassedObject() {
    return this.allPassedData;
    
}
}
