export default function getUrlParameter(url) {
  const query = url.split('?')[1];

  if (!query) {
    return {};
  }

  return query.split('&').reduce((acc, param) => {
    const [key, value] = param.split('=');
    acc[key] = value;

    return acc;
  }, {});
}
