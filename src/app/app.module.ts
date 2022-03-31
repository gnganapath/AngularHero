import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponentModule } from './layout-component/layout-component.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { InternationalizationModule } from './internationalization/internationalization.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LocalizationService } from './internationalization/localization.service';
import { HelloComponent } from './hello.component';

/**
 * The http loader factory
 * @param {HttpClient} http
 * @returns {TranslateHttpLoader}
 * @constructor
 */
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/locales/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutComponentModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InternationalizationModule.forRoot({ locale_id: 'en-US' }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [LocalizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
