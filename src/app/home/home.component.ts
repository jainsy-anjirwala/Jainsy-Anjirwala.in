import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public showlabel:any;

  constructor() { }

  ngOnInit(): void {
    this.showlabel=[
      {src:'../../assets/img/images/flipim.jpg',note:'If you want to show my Portfolio then click below link.',label:'Portfolio',link:'',linklabel:'Click Me' },
      {src:'../../assets/img/images/certificate.png',note:'If you want to show my Certificates then click below link.',label:'Certificates',link:'/Certificate',linklabel:'Click Me' },
      {src:'../../assets/img/images/memory.jpg',note:'If you want to show my happy moment then click below link.',label:'Memory',link:'',linklabel:'Click Me' },
      {src:'../../assets/img/images/Resume.jpg',note:'If you want to show my Resume then click below link.',label:'Resume',link:'/Resume',linklabel:'Click Me' },
      {src:'../../assets/img/images/projects.png',note:'If you want to show my Projects then click below link.',label:'Projects',link:'',linklabel:'Click Me' },
      {src:'../../assets/img/images/aboutme.jpg',note:'If you want to contact me then click below link.',label:'About Me',link:'',linklabel:'Click Me' },
    ]
  }

}
