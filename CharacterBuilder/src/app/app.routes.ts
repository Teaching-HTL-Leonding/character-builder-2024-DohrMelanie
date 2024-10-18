import { Routes } from '@angular/router';
import { CharacterBuilderComponent } from './character-builder/character-builder.component';

export const routes: Routes = [
  { path: 'build', component: CharacterBuilderComponent },
  { path: '', redirectTo: '/build', pathMatch: 'full' }
];
