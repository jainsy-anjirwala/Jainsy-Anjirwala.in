import { Component,OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private elementRef: ElementRef) {}
  // this.setTheme('dark');
  public title:any;
  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'black';
    this.title=[
      {label:'Portfolio',index:'1'},
      {label:'Certificates',index:'2'},
      {label:'Memory',index:'3'},
      {label:'Resume',index:'4'},
      {label:'Projects',index:'5'},
      {label:'About Me',index:'6'},
      {label:'Personal',index:'7'},
    ]

  }


}
