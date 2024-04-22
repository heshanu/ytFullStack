import { NgModule } from "@angular/core";
import { AppComponent } from "../../app.component";
import { provideClientHydration } from "@angular/platform-browser";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    imports: [
        ButtonModule,
        InputTextModule
    ],
    exports:[
        ButtonModule,
        InputTextModule,
    ],
    providers: [
      provideClientHydration()
    ],
    bootstrap: [AppComponent]
  })
  export class NgPrimeModule { }