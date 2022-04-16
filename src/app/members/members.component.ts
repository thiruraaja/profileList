import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  title = 'profileList';
  importedDatas: Array<any> = [];
  
  show = 5;
  
  isChecked:any;
  isCheckedName:any;
  
  constructor() {  }
  
  @Input() selectedCheckbox:any;
  
    receivedData(event:string[]) {
      this.importedDatas = event;
        }
  
        viewMore() {
          this.show += 10; 
        }
  
        ngOnInit() {
           
        }
  
        filterCity(event:any) {
       this.importedDatas.forEach((val:any) => {
      if (val.location.city == event.target.value) val.isSelected = !val.isSelected;
      else {
        val.isSelected = false;
      }
    });   
     
         if(event.target.checked) {
            this.selectedCheckbox = event.target.value;
          
          } else {
            this.selectedCheckbox = '';
            this.isChecked = false;
          }
         
         // console.log( this.selectedCheckbox)
        }

}
