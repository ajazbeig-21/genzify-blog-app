import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';
import { Parse } from "parse";
import { RegisterComponent } from './register/register.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PostComponentComponent } from './post-component/post-component.component';

Parse.initialize(environment.PARSE_APP_ID, environment.PARSE_JS_KEY);
Parse.serverURL = environment.serverURL;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    HomeComponentComponent,
    PostComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
