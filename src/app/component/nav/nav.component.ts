import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'nav-app',
  standalone: true,
  imports: [RouterLink],
  templateUrl:'./nav.component.html',
})
export class NavComponent  {

}
