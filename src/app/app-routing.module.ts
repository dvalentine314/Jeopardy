import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';
import { PromptComponent } from './prompt/prompt.component';
import { SpeakerNotesComponent } from './speaker-notes/speaker-notes.component';

const routes: Routes = [{
  path:'menu',
  component: MenuComponent
},
{
  path:'prompt/:category/:amount',
  component: PromptComponent
},
{
  path: 'speaker-notes',
  component: SpeakerNotesComponent
},
{
  path: 'landing',
  component: LandingComponent
},
{
  path:'**',
  redirectTo: '/landing'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
