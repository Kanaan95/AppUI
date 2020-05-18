import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import * as io from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }

  private _url: string = 'http://localhost:8000/'

  private url = 'http://localhost:3000';
  private socket;



  getUser() {
    return this._http.get(this._url + 'get_emp')
  }

  getTweets() {
    return this._http.get(this._url + 'get_tweets')
  }

  getNotification(): Observable<Notification> {
    let observable = new Observable<Notification>(observer => {
      this.socket = io(this.url);
      this.socket.on('new-notification', (data) => {
        let notification: Notification = data.fullDocument;
        observer.next(notification);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }


}
