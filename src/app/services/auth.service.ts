import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {Cv} from '../models/cv.model';
import UserCredential = firebase.auth.UserCredential;

export class AuthService {
  token: string;
  user: any;

  constructor() {
  }

  signupUser(email: string, password: string): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((x: UserCredential) => {
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => {
              this.token = token;
            });
        this.user = x.user;
        return x.user;
      })
      .catch(
        error => console.log(error)
      );
  }


  signinUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.user = response.user;
          return firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
                console.log(this.token);
                console.log(firebase.auth().currentUser);
                return this.token;
              }
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken(): Promise<any> {
    return firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      ).catch(
        error => console.log(error)
      );
  }

  isAuthenticated() {
    return this.token != null;
  }

}
