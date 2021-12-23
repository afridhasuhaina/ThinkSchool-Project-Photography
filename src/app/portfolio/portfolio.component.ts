import { Component, OnInit } from '@angular/core';
import { PostdetailsService } from '../postdetails.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private service:PostdetailsService) { }
  Posttypes:any;


  ngOnInit(): void {
    this.Posttypes= this.service.PostInfo;

  }

}
