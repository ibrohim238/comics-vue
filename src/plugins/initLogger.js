export default function initLogger() {

  if (process.env.NODE_ENV !== 'production') {
    return {
      setUser: () => {},
    };
  }
}
