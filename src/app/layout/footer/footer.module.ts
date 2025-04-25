import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material-module';

@NgModule({
  declarations: [FooterComponent],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: "", component: FooterComponent }
    ])
  ]
})
export class FooterModule { }
