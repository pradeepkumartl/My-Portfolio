import { transition, trigger, style, query, group, animate, animateChild } from '@angular/animations';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import {ContactMeComponent} from './contact-me/contact-me.component';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('routeAnimation',[
      transition('aboutMeComponent => projectsComponent',[
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
      transition('* => aboutMeComponent',[
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '200%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
      transition('aboutMeComponent <=> skillsComponent',[
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Pradeep"s portfolio';

  constructor(private matDialog: MatDialog, public svc: ServiceService){

  }

  contactMe(){
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = "40vw";
    dialogConfig.height = "60vh";
    dialogConfig.id = "contact-me";
    const contactMeDialog = this.matDialog.open(ContactMeComponent, dialogConfig);
  }

  linkClicked(){
    this.svc.showLoading(true);
  }

  getRoute(outlet: RouterOutlet){
    return outlet.isActivated && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
