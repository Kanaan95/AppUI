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

  // Selected user to see more info
  selectedUser: any

  constructor(private _appService: AppService) { }

  ngOnInit(): void {

    this._appService.getTweets().subscribe(
      res => {
        this.docs = res
        this.docs.forEach(d => {
          d['date'] = this.convertDate(d['created_at'])
        });
        // this.docs['date'] = this.convertDate(this.docs['created_at'])
      }
    )

    this._change = this._appService.getNotification().subscribe(
      res => {
        var tweet = res
        tweet['date'] = this.convertDate(tweet['created_at'])
        this.docs.push(tweet)
      }
    )
  }
  ngOnDestroy() {
    this._change.unsubscribe()
  }

  convertDate(date) {
    return new Date(date).toLocaleDateString('fr-FR')
  }

  onMoreInfoClick(user){
    this.selectedUser = user
    console.log(user)
  }


}
