import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule,MatSnackBarModule, MatCheckbox, MatCheckboxModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

import{UserService} from './user.service';
import{ExcerciseService} from './excercise.service';
import { CreateExComponent } from './components/create-ex/create-ex.component';
import { EditExComponent } from './components/edit-ex/edit-ex.component';
import { ListExComponent } from './components/list-ex/list-ex.component';
import { SelectComponent } from './components/select/select.component';

import{ChartsModule} from 'ng2-charts-x';



const routes: Routes = [
  {path: 'create', component:CreateComponent},
  {path: 'edit/:id', component:EditComponent},
  {path: 'list', component:ListComponent},
  {path: 'listEx', component:ListExComponent},
  {path: 'editEx/:id', component:EditExComponent},
  {path: 'createEx', component:CreateExComponent},
  {path: 'select/:id', component:SelectComponent},
  {path: '', redirectTo:'list',pathMatch:'full'} //the default route
];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    CreateExComponent,
    EditExComponent,
    ListExComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule, 
    MatInputModule,
    MatOptionModule,
    MatSelectModule, 
    MatIconModule, 
    MatButtonModule,
    MatCardModule,
    MatTableModule, 
    MatDividerModule,
    MatSnackBarModule,
    MatCheckboxModule,
    ChartsModule
  ],
  providers: [UserService,ExcerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
