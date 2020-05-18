import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  navbar = [
    {
      code: 'home',
      label: "Home"
    }
    ,
    {
      code: 'settings',
      label: "Settings"
    }
  ]

  ngOnInit(): void {
  }

}
