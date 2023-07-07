import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AccountComponent } from './account/account.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { LoginformComponent } from './loginform/loginform.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"blogs",component:BlogsComponent},
  {path:"blogs/:id",component:BlogdetailComponent},
  {path:"notifications",component:NotificationsComponent},
  {path:"logout",component:LoginformComponent},
  {path:"account",component:AccountComponent},
  {path:"my-blogs",component:MyblogsComponent},
  {path:"my-blogs/:id",component:BlogdetailComponent},
  {path:"login",component:LoginformComponent},
  {path:"**",component:NotfoundComponent}

  // {path:"blogs",loadChildren:()=>import("./blogs/blogs.component").then((b)=>b.BlogsComponent),pathMatch:"full"},
  // {path:"notifications",loadChildren:()=>import("./notifications/notifications.component").then((n)=>n.NotificationsComponent),pathMatch:"full"},
  // {path:"logout",redirectTo:""},
  // {path:"account",loadChildren:()=>import("./account/account.component").then((a)=>a.AccountComponent)},
  // {path:"my-blogs",loadChildren:()=>import("./myblogs/myblogs.component").then((mb)=>mb.MyblogsComponent)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
