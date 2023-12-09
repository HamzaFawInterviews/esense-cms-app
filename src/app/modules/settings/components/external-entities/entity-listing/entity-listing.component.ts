import { Component, ViewChild } from '@angular/core';
import { EntityService } from '../../../../../core/services/entity.service';
import { Observable } from 'rxjs';
import { Entity } from '../../../../../core/models/entity.model';
import { EditEntityFormComponent } from '../edit-entity-form/edit-entity-form.component';

@Component({
  selector: 'app-entity-listing',
  templateUrl: './entity-listing.component.html',
  styleUrl: './entity-listing.component.scss'
})
export class EntityListingComponent {
  @ViewChild(EditEntityFormComponent) editEntityForm!: EditEntityFormComponent;
  showEditEntityDialog: boolean = false;
  entities$: Observable<Entity[]>; // Observable for entities
  selectedEntity?: Entity;
  constructor(private entityService: EntityService) {
    this.entities$ = this.entityService.getEntities();

  }


  onDeleteItem(id: number): void {
    this.entityService.removeEntity(id);
  }

  onEditItem(updatedEntity: Entity): void {
    this.selectedEntity=updatedEntity;
    this.showEditEntityDialog = !this.showEditEntityDialog;
  }
  searchItems(searchTerm: string) {
    this.entityService.searchEntities(searchTerm);
  }

  showEditDialog(): void {
    this.editEntityForm.resetForm();
    this.showEditEntityDialog = !this.showEditEntityDialog;

   
  }
  editEntity() {
    this.editEntityForm.onSubmit();
  }
}