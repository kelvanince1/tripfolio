import * as firebase from 'firebase';

function requireAuth(nextState, replace) {

    if(null === firebase.auth().currentUser) {
        replace({
          pathname: '/',
          state: { nextPathname: nextState.location.pathname }
        })
    }
}

module.exports = requireAuth;
