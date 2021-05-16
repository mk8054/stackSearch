import { AppService } from './../../app.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-question-listing',
  templateUrl: './question-listing.component.html',
  styleUrls: ['./question-listing.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class QuestionListingComponent implements OnInit {
  questions: any[] = [];
  hasMore: boolean = false;
  loading: boolean = true;
  page: number = 1;
  sort: string = 'activity';
  keyword: string = "";
  constructor(
    private service: AppService
  ) {
    this.fetchList()
    this.service.searchChangeObservable.subscribe((res) => {
      this.searchKeyword(res)
    });
  }

  fetchList(reset = false) {
    if (reset) this.questions = [];
    this.loading = true;
    let params = {
      "order": "desc",
      "page": this.page,
      "pagesize": 20,
      "sort": this.sort,
      "tagged": this.keyword,
      "site": "stackoverflow",
      filter: "withbody",
    }
    this.service.httpRequest('questions', params).subscribe((res: any) => {
      this.questions = [...this.questions, ...res['items']]
      this.loading = false
      this.hasMore = res['has_more'];
    }, (err) => { this.loading = false })
  }

  changeSort(sort: string) {
    this.sort = sort;
    this.page = 1;
    this.hasMore = false
    this.fetchList(true);
  }

  loadMore() {
    this.page++;
    this.fetchList()
  }

  ngOnInit(): void {
  }

  searchKeyword(key:string) {
    this.keyword = key;
    this.sort = 'activity';
    this.page = 1;
    this.fetchList(true);
  }
}

