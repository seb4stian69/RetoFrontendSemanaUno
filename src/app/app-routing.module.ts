import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    // This part not need to pass the control sessions guards

    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'login'
    },
    {
      path: 'login',
      component: AppComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
