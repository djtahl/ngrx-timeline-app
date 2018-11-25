import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, appRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './shared/angular-material.module';
import { TimelineModule } from './timeline/timeline.module';

@NgModule({
  declarations: [
    AppComponent,
    appRoutingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularMaterialModule,

    TimelineModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
