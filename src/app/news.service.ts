import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsInterface } from './news-interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url:string = "http://localhost:3000/News"

  
  constructor(private http:HttpClient) { }
  
  public inputName: string=""
  public inputEmail: string=""
  public inputText: string=""

  getNews():Observable<NewsInterface[]>{
    return this.http.get<NewsInterface[]>(this.url);
  }
}
