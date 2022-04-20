import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/services/core/base/base.service';

const apiKey = "fec98a926f424daa929795f7ea9aa1f1";
const routes = {
  list :"everything"
}
@Injectable({
  providedIn: 'root'
})
export class HomeService extends BaseService<any> {

  constructor( http: HttpClient) {
    super(http)
   }

   getList(): Observable<any>{
     return this.sendGet(this.baseUrl(`${routes.list}?q=tesla&from=2022-03-20&sortBy=publishedAt&apiKey=${apiKey}`))
   }
}
