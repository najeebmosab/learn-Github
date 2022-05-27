import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.getElementById("Names").innerText = "ssss";
  }

  BuyNow(x, y, z) {
    if (x != '' && y != '' && z != '' ) {
      alert('Thank You To Buy');
    }
    else{
      alert("you Must Fill it");
    }
  }
}
