import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {
  title = 'app';
  bpItems: any = [];
  customerName: String;
  dealNumber: String;
  engineer: String;
  date: String;
  editBlueprint:boolean = true;
  routeSwitch:boolean = false;
  firewalls:boolean = false;
  baseConfig:boolean = false;
  generateBlueprint:boolean = false;



  constructor(private ApiService: ApiService) { }

  getBlueprintItems() {
    this.ApiService.getBlueprintItems()
      .subscribe((data) => {
        this.bpItems = data;
        console.log(this.bpItems)
      })
  }

  addToDeployment(item) {

    if (item.inDeployment === true) {
      item.inDeployment = false;
      console.log('Item removed from deployment')
    } else {
      item.inDeployment = true;
      console.log('Item added to deployement')
    }
  }

  ngOnInit() {
    this.getBlueprintItems()
  }

}

// Array.prototype.inArray = function (comparer) {
//   for (var i = 0; i < this.length; i++) {
//     if (comparer(this[i])) return true;
//   }
//   return false;
// };

// // adds an element to the array if it does not already exist using a comparer 
// // function
// Array.prototype.pushIfNotExist = function (element, comparer) {
//   if (!this.inArray(comparer)) {
//     this.push(element);
//   }
// };

// var array = [{ name: "tom", text: "tasty" }];
// var element = { name: "tom", text: "tasty" };
// array.pushIfNotExist(element, function (e) {
//   return e.name === element.name && e.text === element.text;
// });