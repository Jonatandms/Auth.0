import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protegida',
  template: `
  <h1>Perfil de usuario</h1>
    <ul *ngIf="auth.user$ | async as user">
      <img src={{user.picture}}>
      <li>{{ user.name }}</li>
      <li>{{ user.email }}</li>
    </ul>`
})
export class ProtegidaComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

}
