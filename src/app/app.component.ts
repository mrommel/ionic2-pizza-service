import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { PizzaPage } from '../pages/pizza/pizza';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make UsersPage the root (or first) page
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menu: MenuController) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
    });

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Users', component: UsersPage },
      { title: 'Pizza', component: PizzaPage },
    ];
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

