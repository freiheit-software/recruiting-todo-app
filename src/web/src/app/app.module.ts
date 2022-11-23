import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		CommonModule,
		HttpClientModule,
		NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
		NgxsModule.forRoot(),
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
