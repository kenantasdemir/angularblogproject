import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {


  id:string = ""

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get("id")
    this.route.params.subscribe(params=>{
      this.id = params["id"]
    })
  }

}
