import auth0 from 'auth0-js';
import { setContext } from 'apollo-link-context'


const redirectUri = process.env.REACT_APP_HOSTED_URI
const clientID = process.env.REACT_APP_AUTH_CLIENT_ID

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'chrisgrice.eu.auth0.com',
      audience: 'https://chrisgrice.eu.auth0.com/userinfo',
      clientID: clientID,
      redirectUri: `${redirectUri}/callback`,
      responseType: 'id_token',
      scope: 'openid profile'
    });

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.authFlag = 'isLoggedIn';
  }

  login() {
    this.auth0.authorize();
  }

  getIdToken() {
    return this.idToken;
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.setSession(authResult);
        resolve();
      });
    })
  }

  setSession(authResult) {
    this.idToken = authResult.idToken;
    localStorage.setItem(this.authFlag, JSON.stringify(true));
  }

  logout() {
    localStorage.setItem(this.authFlag, JSON.stringify(false));
    this.auth0.logout({
      returnTo: redirectUri,
      clientID: clientID,
    });
  }

  silentAuth() {
    if(this.isAuthenticated()) {
      return new Promise((resolve, reject) => {
        this.auth0.checkSession({}, (err, authResult) => {
          if (err) {
            localStorage.removeItem(this.authFlag);
            return reject(err);
          }
          this.setSession(authResult);
          resolve();
        });
      });
    }
  }

  isAuthenticated() {
    return JSON.parse(localStorage.getItem(this.authFlag));
  }
}

const createAuthLink = (token) => setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

const auth = new Auth()

export default auth

export {
  createAuthLink,
}