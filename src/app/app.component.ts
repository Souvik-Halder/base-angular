import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'base-angular';
  name = 'Souvik Halder';

  user1 = 'Souvik';
  user2 = 'Souvik';

  //The use of the interpolation is the you can use the variables of the typescripts from here to the html code

  //You can use the {{}} in the html which is called the interpolation

  //When we need to display the data in html file from the Ts file

  // Limitation of the interpolation is
  // - Can't declare the for loops
  // - Can't declare the varibles in the interpolation
}
