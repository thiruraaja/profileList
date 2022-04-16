import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { MemberService } from '../shared/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit, OnChanges {
  pagedList: any[]= [];
  myList: any;

  pageSize = 6;
  page = 6;
  total:any;
  
  selectitems:any = ['Select','Name','Gender']
  selected:any = this.selectitems[0];
  clonedArr:any;
  @Input() checkboxValue:any;

  constructor(private memberservice: MemberService, private router: Router) { }

  @Output() transferData:EventEmitter<string[]> = new EventEmitter<string[]>();

  ngOnInit(): void {
    this.memberservice.getmemberList().subscribe((data:any)=> {
      this.myList = data.results;
    //  console.log(typeof(this.myList))
     // this.pagedList = this.myList.slice(0, 3);
     this.total =  this.myList.length;
     this.transferData.emit(this.myList);    
    })
 this.pagedList = this.myList;
  }

   ngOnChanges() {     
     setTimeout(()=>{
      this.clonedArr = [...this.myList];
      // console.log(clonedArr);
      if(this.checkboxValue === '') {
        this.myList = this.myList
      } else {
        this.clonedArr= this.clonedArr.filter((item:any)=> item.location.city === this.checkboxValue)
       // console.log(this.clonedArr)
      }
     },10)
    
   }

   myFilter() {
     if(this.checkboxValue != '') {
    this.myList = this.myList.filter((item:any)=>
    item.location.city === this.checkboxValue
   )} if (this.checkboxValue === ''){
     return this.myList
   }
   
    

  
    /* this.pagedList = this.myList.filter((item:any)=>
      item.location.city === this.checkboxValue
       
     )
     if (this.checkboxValue === '') { return this.myList}
     else {this.myList = this.pagedList}
    */
     
   }

  public valueSelected() {
this.myList.map((element:any) => {
  
 if(this.selected === "Name") {
 
  console.log(this.pagedList)
  this.myList.sort(function(x:any,y:any) {
    if (x.name.first < y.name.first) return -1;
    if (x.name.first > y.name.first) return 1;
    return 0;
  })
 }
 if(this.selected === "Gender") {
  
    this.myList.sort((x:any)=> {
      if (x.gender === "male") return -1;
    if (x.gender === "female") return 1;
    return 0;
    })
  
  //console.log(this.pagedList)
  
 }
});


}

getData(data:any) {
this.memberservice.sendDatas(data)
this.router.navigate(['member-list-item']);
console.log("alrt")
}


}
