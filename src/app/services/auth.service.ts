import * as firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;

export class AuthService {
  private token: string;
  private currentUserId: string;
  private user: any;

  constructor() {
  }

  signupUser(email: string, password: string): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((x: UserCredential) => {
        console.log(firebase.auth().currentUser.toJSON());
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => {
              this.currentUserId = firebase.auth().currentUser.uid;
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
                this.currentUserId = firebase.auth().currentUser.uid;
                console.log(this.currentUserId);
                this.token = token;
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

  getToken() {
    this.currentUserId = firebase.auth().currentUser.uid;
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  getCurrentUserId() {
    return this.currentUserId;
  }

}
