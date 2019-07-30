import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
declare var OpenPay: any;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.logeado();
    });
  }

  logeado(){
    console.log(JSON.parse(localStorage.getItem('user')));
    let idUser = JSON.parse(localStorage.getItem('user'));
    if( idUser ){
      this.router.navigateByUrl(`/dashboard`);
    }
    else {
      this.router.navigateByUrl(`/login`);
    }
  }
}
