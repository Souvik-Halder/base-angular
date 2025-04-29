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

  // Angular ClI is a tool used to helps developers to create ,build , test and deploy Angular applications

  //Commands that help you to develop the angular application
  // Check the documentation
  // To check the version -> ng --version
  // To create the angular app -> ng new <app-name>
  // To create the component ng generate component <component_name>
}
