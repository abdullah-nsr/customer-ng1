import { Component } from '@angular/core'



@Component({
    selector: 'my-app',
    template: `
                <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="container">
                  <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand">{{titel}}</a>
                  </div>
                  <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                      <li><a routerLink="/customers">List</a></li>
                      <li> <a routerLink="/customersdetail">Detail</a></li>
                      <li><a>Contact</a></li>
                    </ul>
                  </div><!--/.nav-collapse -->
                </div>
              </nav>
          
              <div class="container">
          
                <div class="starter-template">
                <router-outlet></router-outlet>
                </div>
          
              </div><!-- /.container -->

                `,
                styles: [`
                .container .starter-template { 
                    position: absolute!important;
                    top: 50px!important;
                  }
                  `]
})
export class AppComponent {

    titel = 'Customers';

};