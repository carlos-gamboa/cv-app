import * as firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import {Subject} from 'rxjs';

export class AuthService {
  private token: string;
  private currentUserId: string;
  private user: any;
  loggedIn = new Subject<boolean>();
  loginError = new Subject<boolean>();

  constructor() {
    this.token = null;
    this.currentUserId = null;
  }

  signupUser(email: string, password: string): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((x: UserCredential) => {
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => {
              this.currentUserId = firebase.auth().currentUser.uid;
              this.token = token;
              this.loggedIn.next(true);
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
                this.currentUserId = firebase.auth().currentUser.uid;
                this.token = token;
                this.loggedIn.next(true);
                this.loginError.next(false);
                return this.token;
              }
            );
        }
      )
      .catch(
        error => this.loginError.next(true)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.currentUserId = '';
    this.loggedIn.next(false);
  }

  getToken() {
    if (firebase.auth().currentUser) {
      firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => {
            this.token = token;
            this.currentUserId = firebase.auth().currentUser.uid;
          }
        );
    }
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  getCurrentUserId() {
    return this.currentUserId;
  }

}
