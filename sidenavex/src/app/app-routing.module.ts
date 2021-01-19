import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
//import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
//import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: '', redirectTo:'',pathMatch:'full' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  {path:'feed',component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
