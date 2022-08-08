import getQueryParams from '@/services/functions/get-query-params';

const NO_IMPERSONATE_ROUTES = [
  '/password/reset',
];

export default function impersonation() {
  const { token } = getQueryParams(window.location.href);

  if (NO_IMPERSONATE_ROUTES.includes(window.location.pathname)) {
    return false;
  }

  if (!token) {
    return false;
  }

  return token;
}
