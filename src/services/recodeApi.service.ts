import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { NavController, NavParams } from 'ionic-angular';
//import { MenuPrincipalPage } from '../pages/menuPrincipal/menuPrincipal';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { ApiGlobal } from '../models/apiGlobal.model';

@Injectable()
export class RecodeApiService{

    private baseUrl: string = 'https://newsapi.org/v1/';
    //private sourceInfo: string = 'recode';
    private apiKey: string ='681c2647717e45328190d0966c72302c'

    constructor(private http: Http)
    {
        
    }

    public getArticlesNS(): Promise<ApiGlobal> {
        //const urlRecode = `${this.baseUrl}articles?source=${this.sourceRecode}&sortBy=latest&apiKey=${this.apiKey}`;
        const urlRecode = `${this.baseUrl}articles?source=new-scientist&sortBy=top&apiKey=${this.apiKey}`;

        return this.http.get(urlRecode)
            .toPromise()
            .then(response => response.json() as ApiGlobal)
            .catch(error => console.log('Une erreur est survenue' + error))
    }

    public getArticlesPolygon(): Promise<ApiGlobal> {
        //const urlRecode = `${this.baseUrl}articles?source=${this.sourceRecode}&sortBy=latest&apiKey=${this.apiKey}`;
        const urlRecode = `${this.baseUrl}articles?source=polygon&sortBy=top&apiKey=${this.apiKey}`;

        return this.http.get(urlRecode)
            .toPromise()
            .then(response => response.json() as ApiGlobal)
            .catch(error => console.log('Une erreur est survenue' + error))
    }    

    public getArticlesRecode(): Promise<ApiGlobal>
    {
        //const urlRecode = `${this.baseUrl}articles?source=${this.sourceRecode}&sortBy=latest&apiKey=${this.apiKey}`;
        const urlRecode = `${this.baseUrl}articles?source=recode&sortBy=top&apiKey=${this.apiKey}`;

        return this.http.get(urlRecode)
            .toPromise()
            .then(response => response.json() as ApiGlobal)
            .catch(error => console.log('Une erreur est survenue' + error))
    }

    public getArticlesTNW(): Promise<ApiGlobal> {
        //const urlRecode = `${this.baseUrl}articles?source=${this.sourceRecode}&sortBy=latest&apiKey=${this.apiKey}`;
        const urlRecode = `${this.baseUrl}articles?source=the-next-web&sortBy=latest&apiKey=${this.apiKey}`;

        return this.http.get(urlRecode)
            .toPromise()
            .then(response => response.json() as ApiGlobal)
            .catch(error => console.log('Une erreur est survenue' + error))
    }

    
}