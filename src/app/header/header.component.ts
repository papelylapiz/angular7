import {Component} from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'    
})
export class HeaderComponent{
    isCollapse = true;
    toggleState() {
      let foo = this.isCollapse
      this.isCollapse = foo === false ? true : false;
    }
}