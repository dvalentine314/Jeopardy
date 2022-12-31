import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PromptComponent } from './prompt/prompt.component';

const routes: Routes = [{
  path:'menu',
  component: MenuComponent
},
{
  path:'prompt/:category/:amount',
  component: PromptComponent
},
{
  path:'**',
  redirectTo: '/menu'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
