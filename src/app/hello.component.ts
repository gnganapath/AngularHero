import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>{{ 'banner.hello' | translate }} {{ name1 }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  //@Input() name: string;
    name1: string='';

}
