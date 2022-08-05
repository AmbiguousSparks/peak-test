import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GetComponent } from './get.component';

const routes: Routes = [
  {
    path: '',
    component: GetComponent
  }
]

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [GetComponent]
})
export class GetModule {}
