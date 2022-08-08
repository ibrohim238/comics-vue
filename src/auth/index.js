import tokenStoreFactory from './tokenStore';
import getImpersonationToken from './getImpersonationToken';

export default function authFactory({
  store,
  router,
  httpClient,
  errorLogger,
}) {
  const tokenStore = tokenStoreFactory();

  const impersonationToken = getImpersonationToken();
  if (impersonationToken) {
    tokenStore.saveToken(impersonationToken);
  }

  store.dispatch('auth/init', {
    router,
    tokenStore,
    httpClient,
    errorLogger,
  });

  setInterval(() => {
    store.dispatch('auth/login')
      .catch((error) => {
        if (error.message !== 'no_saved_token') {
          store.dispatch('logout');
        }
      });
  }, 20 * 60 * 1000);

  // eslint-disable-next-line no-unused-vars
  router.beforeEach((to, from) => {
    // instead of having to check every route record with
    // to.matched.some(record => record.meta.requiresAuth)
    if (to.meta.requiresAuth && !store.getters["auth/loggedIn"]) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      return {
        name: 'login',
      }
    } else if (to.meta.requiresGuest && store.getters["auth/loggedIn"]) {
      return {
        name: 'home',
      }
    }
  })
}
