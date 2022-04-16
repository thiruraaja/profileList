import { Component, OnInit } from '@angular/core';
import { MemberService } from '../shared/member.service';

@Component({
  selector: 'app-member-list-item',
  templateUrl: './member-list-item.component.html',
  styleUrls: ['./member-list-item.component.css']
})
export class MemberListItemComponent implements OnInit {

  getSingleList:any;

  constructor(private memberservice: MemberService) { }

  ngOnInit(): void {
    this.memberservice.retrievePassedObject()
    .subscribe((data:any)=> this.getSingleList = data)
  
  }

}
