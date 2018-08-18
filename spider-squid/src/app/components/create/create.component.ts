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

  voiceOptions: voiceOption[] = [
    {
      name: "Mads",
      language: "Danish (da-DK)"
    },
    {
      name: "Naja",
      language: "Danish (da-DK)"
    },
    {
      name: "Ruben",
      language: "Dutch (nl-NL)"
    },
    {
      name: "Lotte",
      language: "Dutch (nl-NL)"
    },
    {
      name: "Russell",
      language: "English (Australian) (en-AU)"
    },
    {
      name: "Nicole",
      language: "English (Australian) (en-AU)"
    },
    {
      name: "Brian",
      language: "English (British) (en-GB)"
    },
    {
      name: "Amy",
      language: "English (British) (en-GB)"
    },
    {
      name: "Emma",
      language: "English (British) (en-GB)"
    },
    {
      name: "Aditi",
      language: "English (Indian) (en-IN)"
    },
    {
      name: "Raveena",
      language: "English (Indian) (en-IN)"
    },
    {
      name: "Joey",
      language: "English (US) (en-US)"
    },
    {
      name: "Justin",
      language: "English (US) (en-US)"
    },
    {
      name: "Matthew",
      language: "English (US) (en-US)"
    },
    {
      name: "Ivy",
      language: "English (US) (en-US)"
    },
    {
      name: "Joanna",
      language: "English (US) (en-US)"
    },
    {
      name: "Kendra",
      language: "English (US) (en-US)"
    },
    {
      name: "Kimberly",
      language: "English (US) (en-US)"
    },
    {
      name: "Salli",
      language: "English (US) (en-US)"
    },
    {
      name: "Geraint",
      language: "English (Welsh) (en-GB-WLS)"
    },
    {
      name: "Mathieu",
      language: "French (fr-FR)"
    },
    {
      name: "Celine",
      language: "French (fr-FR)"
    },
    {
      name: "Lea",
      language: "French (fr-FR)"
    },
    {
      name: "Chantal",
      language: "French (Canadian) (fr-CA)"
    },
    {
      name: "Hans",
      language: "German (de-DE)"
    },
    {
      name: "Marlene",
      language: "German (de-DE)"
    },
    {
      name: "Vicki",
      language: "German (de-DE)"
    },
    {
      name: "Aditi",
      language: "Hindi (hi-IN)"
    },
    {
      name: "Karl",
      language: "Icelandic (is-IS)"
    },
    {
      name: "Dora",
      language: "Icelandic (is-IS)"
    },
    {
      name: "Giorgio",
      language: "Italian (it-IT)"
    },
    {
      name: "Carla",
      language: "Italian (it-IT)"
    },
    {
      name: "Takumi",
      language: "Japanese (ja-JP)"
    },
    {
      name: "Mizuki",
      language: "Japanese (ja-JP)"
    },
    {
      name: "Seoyeon",
      language: "Korean (ko-KR)"
    },
    {
      name: "Liv",
      language: "Norwegian (nb-NO)"
    },
    {
      name: "Jacek",
      language: "Polish (pl-PL)"
    },
    {
      name: "Jan",
      language: "Polish (pl-PL)"
    },
    {
      name: "Ewa",
      language: "Polish (pl-PL)"
    },
    {
      name: "Maja",
      language: "Polish (pl-PL)"
    },
    {
      name: "Ricardo",
      language: "Portuguese (Brazilian) (pt-BR)"
    },
    {
      name: "Vitoria",
      language: "Portuguese (Brazilian) (pt-BR)"
    },
    {
      name: "Cristiano",
      language: "Portuguese (European) (pt-PT)"
    },
    {
      name: "Ines",
      language: "Portuguese (European) (pt-PT)"
    },
    {
      name: "Carmen",
      language: "Romanian (ro-RO)"
    },
    {
      name: "Maxim",
      language: "Russian (ru-RU)"
    },
    {
      name: "Tatyana",
      language: "Russian (ru-RU)"
    },
    {
      name: "Enrique",
      language: "Spanish (European) (es-ES)"
    },
    {
      name: "Conchita",
      language: "Spanish (European) (es-ES)"
    },
    {
      name: "Miguel",
      language: "Spanish (Latin American) (es-US)"
    },
    {
      name: "Astrid",
      language: "Swedish (sv-SE)"
    },
    {
      name: "Filiz",
      language: "Turkish (tr-TR)"
    },
    {
      name: "Gwyneth",
      language: "Welsh (cy-GB)"
    }
  ]


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

interface voiceOption {
  name: string,
  language: string
}
