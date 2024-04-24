import { Component } from "@angular/core";

@Component({
  selector: "header-web",
  standalone: true,
  templateUrl: "./header-web.component.html",
  styles: [
    `
      .header {
        &__title {
          color: pink;
        }
      }
    `,
  ],
})
export class HeaderWebComponent {}
