import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntityService } from '../../../../../core/services/entity.service';
import { Entity } from '../../../../../core/models/entity.model';

@Component({
  selector: 'app-edit-entity-form',
  templateUrl: './edit-entity-form.component.html',
  styleUrl: './edit-entity-form.component.scss'
})
export class EditEntityFormComponent {
  @Input() entity?: Entity;

  entityForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private entityService: EntityService, private ref: ChangeDetectorRef) { }
  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.entityForm = this.formBuilder.group({
      title: [this.entity?.name ?? '', Validators.required],
      description: [this.entity?.description ?? '']
    });
  }

  onSubmit(): void {

    if (this.entityForm.valid) {
      if (this.entity?.id) {
        this.entityService.editEntity({
          id: this.entity.id,
          name: this.entityForm.value.title,
          description: this.entityForm.value.description
        });
      } else {
        this.entityService.addEntity({
          name: this.entityForm.value.title,
          description: this.entityForm.value.description
        });
      }

    }
  }

  resetForm() {
    this.ref.detectChanges();
    this.entityForm.reset();
  }

}
