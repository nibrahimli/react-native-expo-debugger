const initialState = {
  email: '',
  password: '',
  logged: false  
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload,
      };
    case 'SET_LOG':
      return {
        ...state,
        logged: action.payload,
      };
    default:
      return state;
  }
};
