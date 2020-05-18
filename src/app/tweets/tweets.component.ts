import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit, OnDestroy {

  // @Input() docs
  docs: any = []

  private _change

  constructor(private _appService: AppService) { }

  ngOnInit(): void {

    this._appService.getTweets().subscribe(
      res => {
        this.docs = res
      }
    )
    
    this._change = this._appService.getNotification().subscribe(
      res =>{
        this.docs.push(res)
      }
    )
  }

  ngOnDestroy(){
    this._change.unsubscribe()
  }

}
