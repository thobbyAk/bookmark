import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/services/data/home/home.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  articles: any = []
  bookmark: any = []
  constructor(
    private homeData: HomeService
  ) { }

  ngOnInit(): void {
    this.getlistBoomarkofArticles();
  }

  getlistBoomarkofArticles(){
   this.articles = JSON.parse(localStorage.getItem('bookmarks') || "[]")

   
  }

  removeBookmark(data: any) {
    const newArticle = this.articles.filter((item:any) => item.source.name !== data.source.name);
    this.articles = newArticle
    localStorage.setItem('bookmarks', JSON.stringify(this.articles));
    this.getlistBoomarkofArticles();
  }

}
