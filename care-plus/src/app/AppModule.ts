import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
    ],
    providers: [],
    bootstrap: [],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ]
})
export class AppModule {
}
