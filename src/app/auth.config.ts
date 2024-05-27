import { isPlatform } from '@ionic/angular';
import config from '../../capacitor.config';
import { environment } from 'src/environments/environment';

export const domain = environment.auth0Domain;
export const clientID = environment.auth0ClientID;
console.log(domain);
console.log(clientID);
const { appId } = config; 

const auth0Domain = domain; 
const iosOrAndroid = isPlatform('hybrid'); 

export const callbackUri = iosOrAndroid
    ? "com.rubusy://dev-v8thclutglmzernx.us.auth0.com/android/io.ionic.rubusy/callback"
    : 'http://localhost:8100/home'; 

console.log(callbackUri);  

//${appId}://${auth0Domain}/capacitor/${appId}/callback