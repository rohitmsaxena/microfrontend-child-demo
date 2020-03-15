import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {SampleModule} from './sample/sample.module';
import {createCustomElement} from '@angular/elements';
import {SampleComponent} from './sample/sample.component';

const local = false;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SampleModule
  ],
  providers: [],
  entryComponents: [SampleComponent],
  bootstrap: [local ? AppComponent : []]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(SampleComponent, {injector: this.injector});
    customElements.define('micro-app', micro);
  }
  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
