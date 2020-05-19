import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';

import { NgModule } from  '@angular/core';

@NgModule({
imports: [
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCardModule,
    MatSidenavModule
],
exports: [
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCardModule,
    MatSidenavModule
],

})
 
export  class  MyMaterialModule { }