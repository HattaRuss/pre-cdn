import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatDatepickerModule
} from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { CommonService } from './services/common.service';
import { HttpModule } from '@angular/http';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
    declarations: [AppComponent],
    imports: [
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatDatepickerModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        OverlayModule,
        HttpClientModule,
        NgxPaginationModule,
        AngularFontAwesomeModule, FormsModule, ReactiveFormsModule, HttpModule
    ],
    providers: [AuthenticationService, CommonService],
    bootstrap: [AppComponent],
    entryComponents: []
})
export class AppModule {
        constructor() {
        // Add an icon to the library for convenient access in other components
        library.add(fas, far);
      }
}
