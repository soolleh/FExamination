import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'axelerantFExamination';
  modal_open=false;
  ngOnInit(){
    const details:any = document.querySelectorAll('.config-details');
    details[details.length - 1].style.borderBottom = '1px solid #D5D5D5';
  }
  show(){
    console.log('clicked');
    const navbar:any = document.querySelector('.nav-bar');
    navbar?.classList.toggle('show');
    const icon:any = document.querySelector('.nav-bar .menu-icon img');
    if (icon.getAttribute("src") == '../assets/menu_close.svg'){
      icon.src = '../assets/menu.svg';
    }
    else{
      icon.src = '../assets/menu_close.svg';
    }
    const menuList = document.querySelector(".nav-bar ul");
    menuList?.classList.toggle('show');
  }
  open_modal(){
    this.modal_open = true;
    const body = document.querySelector('body');
    body?.classList.add('modal-open');
  }
  public close_modal(){
    this.modal_open = false;
    const body = document.querySelector('body');
    body?.classList.remove('modal-open');
  }
}
