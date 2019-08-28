import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: UserService,
              private router: Router,
              ) {}
  canActivate(): boolean {
  if (!this.authService.isLoggedIn) {
      this.router.navigate(['login']);
      return false;
      }
  return true;
  }
}
