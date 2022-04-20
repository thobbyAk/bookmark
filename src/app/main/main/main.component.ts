import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/services/data/home/home.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  articles: any = []
  bookmark: any = []
  constructor(
    private homeData: HomeService
  ) { }

  ngOnInit(): void {
    this.getlistofArticles();
  }

  getlistofArticles(){
    this.homeData.getList().subscribe(
      res => {
        const {articles} = res
        this.articles = articles;
        console.log("respon", res)
      }
    )
  }

  addToBookmark(data: any) {
    if(this.bookmark.length > 0){
      this.bookmark.forEach((element: any) => {
        if(element.source.name == data.source.name){

        }else{
          this.bookmark.push(data);
           localStorage.setItem('bookmarks', JSON.stringify(this.bookmark));

        }
      })
    }else{
      this.bookmark.push(data);
      localStorage.setItem('bookmarks', JSON.stringify(this.bookmark));
    }
    

  }
}
