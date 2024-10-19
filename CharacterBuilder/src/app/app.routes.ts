import { Routes } from '@angular/router';
import { CharacterBuilderComponent } from './character-builder/character-builder.component';
import { RandomizerComponent } from './randomizer/randomizer.component';

export const routes: Routes = [
  { path: 'build', component: CharacterBuilderComponent },
  { path: '', redirectTo: '/build', pathMatch: 'full' },
  { path: 'randomizer', component: RandomizerComponent }
];
