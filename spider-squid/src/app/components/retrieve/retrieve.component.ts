import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../../services/retrieve.service';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit {
  postId: string;
  link: string;
  text: string;
  status: string;

  constructor(private retrieveService: RetrieveService) { }

  ngOnInit() {
  }

  onSubmit({value, valid}:{value:any, valid:boolean}){
    this.link = "";
    this.text = "";
    this.retrieveService.retrieve(this.postId).subscribe((res) => {
      if(res){
        this.status = res[0].status 
        this.link = res[0].url
        this.text = res[0].text
      }
    });

  }

}
