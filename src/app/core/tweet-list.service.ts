import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IProduct } from '../tweet-list/product';
import { ITweet } from '../interfaces/tweet.interface'
import * as mongodb from 'mongodb';

@Injectable()

export class TweetListService{

    express_url = '/api/find_one'

    constructor(private _http: HttpClient){}

    get_products(url:string): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(url);
    }

    find_one(): Observable<ITweet[]> {
        console.log(`creating observable to ${this.express_url}`)
        return this._http.get<ITweet[]>(this.express_url);
    }
}