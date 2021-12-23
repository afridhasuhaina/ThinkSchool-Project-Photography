import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostdetailsService } from '../postdetails.service';
@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:PostdetailsService) { }
  getblogId:any;
  Posttypes:any;
  ngOnInit(): void {
    this.getblogId = this.param.snapshot.paramMap.get('id');
    console.log(this.getblogId,'getblog');
    if(this.getblogId)
    {
      this.Posttypes = this.service.PostInfo.filter((value)=>{
        return value.id == this.getblogId;
      });
      console.log(this.Posttypes,'blogdata>>');
    }

  }

}
