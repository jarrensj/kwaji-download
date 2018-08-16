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
    console.log("text: " + this.text);
    console.log("voice: " + this.voice);
    this.createService.create(this.text, this.voice).subscribe((res) => {
      if(res){
        console.log(res);
        this.postId = res;
      }
    });

  }

}
