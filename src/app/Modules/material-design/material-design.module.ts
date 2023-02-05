import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const materialDesignComponents = [MatButtonModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatDialogModule,
  MatIconModule,
  MatSelectModule,
  MatCardModule,
  MatSnackBarModule
  ];

@NgModule({
  declarations: [],
  imports: [CommonModule, materialDesignComponents,],
  exports: [materialDesignComponents],
})
export class MaterialDesignModule {}
