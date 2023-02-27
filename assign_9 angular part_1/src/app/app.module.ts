import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormValidationComponent } from './form-validation/form-validation.component';


// const appRouter :Routes=[
//   {path:'', redirectTo:'servers', pathMatch:'full'},
//   {path:'home', component:HomeComponent},
//   {
//     path:'servers', component:ServersComponent,
//   children:[
//       {
//         path:':id', component:ServerComponent
//       },
//       {
//         path:':id/edit', component:EditServerComponent
//       }
//     ]
//   },
  
//   {path:'users', component:UsersComponent},
//   {path:'server', component:ServersComponent},
//   // {path:'servers/:id', component:ServerComponent},
//   // {path:'servers/:id/edit', component:EditServerComponent},
//   {path:'**', component:HomeComponent}

  
// ]

@NgModule({
  declarations: [
    AppComponent,
    FormValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
