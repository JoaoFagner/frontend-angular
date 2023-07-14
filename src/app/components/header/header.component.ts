import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from '@angular/router';


@Component({
    selector: 'header',
    templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {
    constructor(private router: Router) { }
  
    ngOnInit() {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          const currentRoute = this.getCurrentRouteTitle(event.url);
          this.updateHeaderTitle(currentRoute);
        }
      });
    }
  
    getCurrentRouteTitle(url: string): string {
      // Mapeie a URL atual para o título correspondente
      switch (url) {
        case '/':
          return 'Lista';
          case '/lista':
            return 'Lista';
        case '/cadastro':
          return 'Cadastro';
        default:
          return 'Título Padrão';
      }
    }
  
    updateHeaderTitle(title: string): void {
      const headerTitleElement = document.getElementById('headerTitle');
      if (headerTitleElement) {
        headerTitleElement.innerText = title;
      }
    }
  }
  