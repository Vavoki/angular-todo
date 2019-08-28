import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor(public  afAuth: AngularFireAuth, public  router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async  login(email: string, password: string) {
    try {
      await  this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/todos']);
    } catch (e) {
      alert('Error!'  +  e.message);
    }
  }

  async logout() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['login']);
    localStorage.removeItem('user');
  }

  async register(email: string, password: string) {
   await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }
  get userData() {
    if (this.isLoggedIn) {
      const  user  =  JSON.parse(localStorage.getItem('user'));
      return  user;
    }
    return null;
  }
}
