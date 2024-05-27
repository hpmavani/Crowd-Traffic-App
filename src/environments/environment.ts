// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  resourceUrl: "http://127.0.0.1:8000", 
  auth0Domain: "dev-v8thclutglmzernx.us.auth0.com", 
  auth0ClientID: "4rF5ViTuMi4c0aGAR86lSK8sDDIbv904",
  redirect_uri: "http://localhost:8100/home",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
