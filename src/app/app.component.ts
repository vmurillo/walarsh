import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Victor Murillo';
  jobTitle = 'Software Engineer';
  email = 'vimurillo@gmail.com';
  phones = ['+51925116867', '+447587522497'];
}
