import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  FotoCover: string =
    'https://th.bing.com/th/id/OIP.hxhoVVkYmosTcqXPcUd-HgHaFX?w=209&h=180&c=7&r=0&o=5&pid=1.7';
  contentTitle: string = "noticia exemplo";
  contentDescription: string = 'baifuchmawiucfnsajifvnseihj';
}
