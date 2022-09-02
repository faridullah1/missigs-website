import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
    imports: [
        CommonModule,

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
		MatCheckboxModule,
		MatSliderModule
    ],
    exports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
		MatCheckboxModule,
		MatSliderModule
    ]
})
export class MaterialModule { }
