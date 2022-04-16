import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberListComponent } from './member-list/member-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MemberService } from './shared/member.service';

import {NgxPaginationModule} from 'ngx-pagination';
import { MemberListItemComponent } from './member-list-item/member-list-item.component';
import { HeaderComponent } from './header/header.component';
import { MembersComponent } from './members/members.component';


@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    MemberListItemComponent,
    HeaderComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
