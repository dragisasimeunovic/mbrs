import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CenovnikComponent } from './cenovnik/cenovnik.component';
import { StavkaCenovnikaComponent } from './stavka-cenovnika/stavka-cenovnika.component';



const routes : Routes = [
    //{ path: '', redirectTo:'/cenovnik', pathMatch:'full'},
    { path: 'cenovnik', component: CenovnikComponent},
    { path: 'stavka-cenovnika', component: StavkaCenovnikaComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export const routingComponents = [CenovnikComponent, StavkaCenovnikaComponent
                                ]