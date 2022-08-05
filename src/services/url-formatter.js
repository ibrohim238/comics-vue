export default urls => (methodName, args = {}) => {
  let url = urls[methodName];

  Object.entries(args).forEach(([key, val]) => {
    url = url.replace(new RegExp(`\\{${key}\\}`, 'g'), val);
  });

  return url;
};
