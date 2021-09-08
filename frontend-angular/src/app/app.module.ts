import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';




=======
>>>>>>> 578b5d569be5d56f9a5c64b6d139271e41a9fd10

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
<<<<<<< HEAD
        HttpClientModule,
        BrowserModule,
        ReactiveFormsModule
=======
        HttpClientModule
>>>>>>> 578b5d569be5d56f9a5c64b6d139271e41a9fd10

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
