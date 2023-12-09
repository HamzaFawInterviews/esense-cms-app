import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { EntityListingComponent } from './components/external-entities/entity-listing/entity-listing.component';

const routes: Routes = [
  { path: '', redirectTo: 'entities', pathMatch:'full' },
  {
    path: '', component: SettingsComponent, children: [
      { path: 'entities', component: EntityListingComponent }
    ]

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
