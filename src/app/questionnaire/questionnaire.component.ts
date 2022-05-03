import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  bpItems: any = [];

  constructor(private ApiService: ApiService) { }

  getBlueprintItems() {
    this.ApiService.getBlueprintItems()
      .subscribe((data) => {
        this.bpItems = data;
        console.log(this.bpItems)
      })
  }

  ngOnInit() {
    this.getBlueprintItems()
  }

}
