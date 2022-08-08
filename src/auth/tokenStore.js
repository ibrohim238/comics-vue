import Cookies from 'js-cookie';
import getDomainName from '@/services/functions/getDomainName';

export default function tokenStoreFactory() {
  function saveToken(token) {
    Cookies.set('AUTH_TOKEN', JSON.stringify(token), {
      path: '/',
      secure: false,
      expires: 7,
      sameSite: 'Lax',
      ...(
        process.env.NODE_ENV === 'production'
          ? {
            Domain: `.${getDomainName(window.location.hostname)}`,
          }
          : {}
      ),
    });
  }

  function getSavedToken() {
    let token = Cookies.get('AUTH_TOKEN')

    if (token) {
       token = JSON.parse(token)
    }
    return token;
  }

  function clearToken() {
    return Cookies.remove('AUTH_TOKEN', {
      path: '/',
      secure: false,
      expires: 7,
      sameSite: 'Lax',
      ...(
        process.env.NODE_ENV === 'production'
          ? {
            Domain: `.${getDomainName(window.location.hostname)}`,
          }
          : {}
      ),
    });
  }

  return {
    saveToken,
    getSavedToken,
    clearToken,
  };
}
