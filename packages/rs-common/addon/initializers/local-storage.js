export function initialize(application) {
  application.inject('route', 'ls', 'service:local-storage');
}

export default {
  initialize,
};
