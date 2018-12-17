import {NavbarComponent} from './navbar/navbar.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {Router, RouterModule} from '@angular/router';
import {ShellComponent} from './shell.component';
import { EmptyCardComponent } from './empty-card/empty-card.component';
import {LoadService} from './load.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ShellComponent,
    EmptyCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'emptyCard', component: EmptyCardComponent},
      {path: '**', component: ShellComponent}

      ], {enableTracing: false}
    )
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private  router: Router, private load: LoadService) {
    /*
    const portlets = this.load.getConfig()
    const appRoutes = [...this.router.config]
    for(const p in portlets){
      console.log(p)
      appRoutes.push({path: p, component: ShellComponent});
      appRoutes.push({path: `${p}/**`, component: ShellComponent});
    }
    this.router.resetConfig(appRoutes);
    //*/
    // console.table(this.router);
  }
}

//,{path: '**', component: ShellComponent}
