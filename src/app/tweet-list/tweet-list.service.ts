import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IProduct } from './product';
import * as mongodb from 'mongodb';

@Injectable()

export class TweetListService{

    constructor(private _http: HttpClient){}

    get_products(url:string): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(url)
    }
    
}