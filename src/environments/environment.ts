// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //Firebase configurations
  firebaseConfig : {
    apiKey: "AIzaSyB2rqJRJVLJsjQT8SQYQ6pJXTub41A81p4",
    authDomain: "cv-app-40b38.firebaseapp.com",
    databaseURL: "https://cv-app-40b38.firebaseio.com",
    projectId: "cv-app-40b38",
    storageBucket: "cv-app-40b38.appspot.com",
    messagingSenderId: "557048975608"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
