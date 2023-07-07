import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AccountComponent } from './account/account.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { HomeComponent } from './home/home.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { DeleteaccountmodalComponent } from './account/deleteaccountmodal/deleteaccountmodal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogsComponent,
    NotificationsComponent,
    AccountComponent,
    MyblogsComponent,
    HomeComponent,
    BlogdetailComponent,
    DeleteaccountmodalComponent,
    LoginformComponent,
    RegisterformComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
