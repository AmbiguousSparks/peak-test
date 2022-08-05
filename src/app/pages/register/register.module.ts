import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import {  NbButtonModule, NbInputModule } from "@nebular/theme";
import { RegisterComponent } from "./register.component";

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [RegisterComponent],
  exports: [RegisterComponent, RouterModule],
  imports: [FormsModule, ReactiveFormsModule, NbButtonModule, CommonModule, RouterModule.forChild(routes), NbInputModule]
})
export class RegisterModule {}
