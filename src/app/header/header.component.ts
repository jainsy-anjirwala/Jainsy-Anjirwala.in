import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input()title:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onclick(labelname:any){
    switch (labelname) {
      case '1':
        this.router.navigate(['/Protfolio']);
        break;
      case '2':
        this.router.navigate(['/Certificate']);
        break;
      case '3':
        this.router.navigate(['/Memories']);
        break;
      case '4':
        this.router.navigate(['/Resume']);
        break;
      case '5':
        this.router.navigate(['/Project']);
        break;
      case '6':
        this.router.navigate(['/About_Me']);
        break;
      case '7':
        this.router.navigate(['/Resume']);
        break;

      default:
        break;
    }

  }
}
