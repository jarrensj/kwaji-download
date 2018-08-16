import { Component, OnInit } from '@angular/core';
import { CreateService } from '../../services/create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  text: string;
  voice: string;
  postId: string;


  constructor(private createService: CreateService) { }

  ngOnInit() {
  }

  onSubmit({value, valid}:{value:any, valid:boolean}){
    this.createService.create(this.text, this.voice).subscribe((res) => {
      if(res){
        this.postId = res;
      }
    });

  }

}
