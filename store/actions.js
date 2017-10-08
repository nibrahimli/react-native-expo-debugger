export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_LOG = 'SET_LOG';

export const setEmail = payload => ({
  type: SET_EMAIL,
  payload,
});

export const setPassword = payload => ({
  type: SET_PASSWORD,
  payload,
});

export const setLog = payload => ({
  type: SET_LOG,
  payload,
});