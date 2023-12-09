import { Injectable } from '@angular/core';
import { Entity } from '../models/entity.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  private allEntities: Entity[] = [];
  private entitiesSubject: BehaviorSubject<Entity[]> = new BehaviorSubject<Entity[]>([]);

  constructor() { }

  getEntities(): Observable<Entity[]> {
    return this.entitiesSubject.asObservable();
  }

  addEntity(entity: Entity): void {
    entity.id = this.entitiesSubject.value.length + 1;
    this.allEntities = [...this.allEntities, entity];
    this.entitiesSubject.next(this.allEntities);
  }


  removeEntity(id: number): void {
    this.allEntities = this.allEntities.filter(entity => entity.id !== id);
    this.entitiesSubject.next(this.allEntities);
  }

  editEntity(updatedEntity: Entity): void {
    this.allEntities = this.entitiesSubject.value.map(entity => (entity.id === updatedEntity.id ? updatedEntity : entity));
    this.entitiesSubject.next(this.allEntities);
  }


  searchEntities(searchTerm: string): void {
    if (searchTerm) {
      searchTerm = searchTerm.toLowerCase();
      const filteredEntities = this.allEntities.filter(
        (entity) =>
          entity.name.toLowerCase().includes(searchTerm) 
      );
      this.entitiesSubject.next(filteredEntities);
    } else {
      this.entitiesSubject.next(this.allEntities);

    }
  }
}
