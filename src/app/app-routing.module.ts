import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PostComponentComponent } from './post-component/post-component.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponentComponent },
  { path: 'post', component: PostComponentComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
