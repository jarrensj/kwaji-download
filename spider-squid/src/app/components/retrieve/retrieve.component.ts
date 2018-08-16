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

  constructor(private retrieveService: RetrieveService) { }

  ngOnInit() {
  }

  onSubmit({value, valid}:{value:any, valid:boolean}){
    this.retrieveService.retrieve(this.postId).subscribe((res) => {
      if(res){
        this.link = res[0].url
        this.text = res[0].text
      }
    });

  }

}
