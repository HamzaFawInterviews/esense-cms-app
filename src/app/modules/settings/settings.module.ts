import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SettingsSidenavComponent } from './components/settings-sidenav/settings-sidenav.component';
import { SharedModule } from '../../shared/shared.module';
import { SearchControlHeaderComponent } from './components/search-control-header/search-control-header.component';
import { EntityListingComponent } from './components/external-entities/entity-listing/entity-listing.component';
import { EditEntityFormComponent } from './components/external-entities/edit-entity-form/edit-entity-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SettingsComponent, SettingsSidenavComponent, EntityListingComponent, SearchControlHeaderComponent, EditEntityFormComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SettingsModule { }
