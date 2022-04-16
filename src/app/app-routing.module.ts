import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListItemComponent } from './member-list-item/member-list-item.component';
import { MembersComponent } from './members/members.component';
import { MemberListComponent } from './member-list/member-list.component';

const routes: Routes = [
  { path:  'members', component:  MembersComponent},
  { path:  'member-list', component:  MemberListComponent},
  { path:  'member-list-item', component:  MemberListItemComponent},
 { path: "",redirectTo: '/members', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
