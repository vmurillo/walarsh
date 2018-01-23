import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  email = 'vimurillo@gmail.com';
  phones = ['+51925116867', '+447587522497'];
  constructor() { }
  ngOnInit() {
  }

}
