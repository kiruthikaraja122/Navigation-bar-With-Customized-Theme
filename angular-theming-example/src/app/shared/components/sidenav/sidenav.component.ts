import { Component, OnInit, Input } from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
 themeColor: 'primary' | 'accent' | 'warm' = 'primary';
 isDark = false;
 constructor(private overlayContainer: OverlayContainer) {}

 ngOnInit(): void {}

 // ? notice below
 toggleTheme(): void {
   this.isDark = !this.isDark;
   if (this.isDark) {
     this.overlayContainer.getContainerElement().classList.add('dark-theme');
   } else {
     this.overlayContainer
       .getContainerElement()
       .classList.remove('dark-theme');
   }
 }
}


