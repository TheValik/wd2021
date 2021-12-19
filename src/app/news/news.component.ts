import { Component, OnInit } from '@angular/core';
import { NewsInterface } from '../news-interface';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {

  constructor(private service:NewsService) { 
  }
  NewsList: NewsInterface[]=[];
  ngOnInit(): void {
    this.ToSubscribe();
  }

  public ToSubscribe(): NewsInterface[]{
    this.service.getNews().subscribe(
    (NEWS)=>{
      console.log(NEWS);
      this.NewsList = NEWS;
    }
    );
    console.log(this.NewsList[0].text)
    console.log("------------------------------")
    return (this.NewsList);
    
  }
  
}
