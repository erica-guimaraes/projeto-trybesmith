const password = 'he060923';

const noUsernameBody = { password: password };
const noPasswordBody = { username: 'Érica Guimarães' };

const invalidUsername = { username: 'Guima Érica', password: password};

export default {
  noUsernameBody,
  noPasswordBody,
  invalidUsername,
}