import { AppService } from 'src/app/app.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionDetailsComponent implements OnInit {
  loading: boolean = true;
  questionLoading: boolean = true;
  page: number = 1;
  answers: any[] = [];

  questionId: string = "";
  hasMore: boolean = false;
  question: any;
  sort: string = 'activity';
  constructor(private route: ActivatedRoute, private service: AppService) {
    this.route.paramMap.subscribe(res => {
      this.questionId = res.get('id') || '';
      if (this.questionId) {
        this.fetchQuestion();
        this.fetchAnswers();
      }
    })
  }


  changeSort(sort: string) {
    this.sort = sort;
    this.page = 1;
    this.hasMore = false
    this.fetchAnswers(true);
  }

  fetchQuestion() {
    this.questionLoading = true;
    let params = {
      site: "stackoverflow",
      filter: "withbody"
    }
    this.service.httpRequest(`questions/${this.questionId}`, params).subscribe((res: any) => {
      this.question = res['items'][0];
      console.log(res.items)
      this.questionLoading = false;
    })
  }
  fetchAnswers(reset = false) {
    if (reset) this.answers = [];
    this.loading = true
    let params = {
      site: "stackoverflow",
      sort: this.sort,
      order: "desc",
      pagesize: 10,
      page: this.page,
      filter: "!22JYhW*fUcrLeWE5oXsD9"
    }
    this.service.httpRequest(`questions/${this.questionId}/answers`, params).subscribe((res: any) => {
      this.answers = [...this.answers, ...res['items']];
      this.loading = false
      this.hasMore = res['has_more'];
    })
  }

  loadMore() {
    this.page++;
    this.fetchAnswers();
  }

  ngOnInit(): void {
  }

}
