import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { LoaderComponent } from './components/loader/loader.component';

export const routes: Routes = [
    // {path: '', component: LoginComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'loader', component: LoaderComponent}
];
