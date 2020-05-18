import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  command: string = ""

  list_commands: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  check_command(){
    this.list_commands.push(this.command)
    this.command = ""
  }

}
