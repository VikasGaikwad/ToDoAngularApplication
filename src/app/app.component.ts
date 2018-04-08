import { Component } from '@angular/core';
 // selector, templateUrl, styleUrl are the decorators(components+metadata)
@Component({
  // selector - we can use this component in another,
  // selector will forward this component to browser (eg. register.component.ts)
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title is binding or interpolation, its part of browser
  title = 'TODO';
}
