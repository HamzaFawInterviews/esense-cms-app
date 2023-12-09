import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ItemTileComponent } from './components/item-tile/item-tile.component';
import { CustomInputComponent } from './components/form-components/custom-input/custom-input.component';
import { CustomTransparentButtonComponent } from './components/form-components/custom-transparent-button/custom-transparent-button.component';
import { CustomDialogComponent } from './components/custom-dialog/custom-dialog.component';

@NgModule({
  declarations: [
    AvatarComponent,
    ItemTileComponent,
    CustomInputComponent,
    CustomTransparentButtonComponent,
    CustomDialogComponent,
  ],
  imports: [
    CommonModule
  ],

  exports: [
    AvatarComponent,
    ItemTileComponent,
    CustomInputComponent,
    CustomTransparentButtonComponent,
    CustomDialogComponent
  ]
})
export class SharedModule { }
