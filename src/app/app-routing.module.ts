import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes | any = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, data: { routeName: 'Home' }, isMenu: true },
  { path: '**', component: HomeComponent } // TODO: Criar PAGE NOT FOUND
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
