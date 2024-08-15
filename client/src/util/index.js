const isDevelopment = window.location.href.includes('localhost');

const getServerUrl = () => {
  if (isDevelopment) {
    return 'http://localhost:5000'; // Development server URL
  } else {
    return 'https://your-production-url.com'; // Production server URL
  }
};

export default getServerUrl;
