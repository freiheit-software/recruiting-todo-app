import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { environment } from 'src/environments/environment';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgxsModule.forRoot(),
		NgxsLoggerPluginModule.forRoot({ disabled: environment.production })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
