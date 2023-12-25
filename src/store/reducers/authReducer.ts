const storedUser = JSON.parse(localStorage.getItem('user')!) || null;


const initialState = {
  isAuthenticated: !!storedUser,
  user: storedUser || null,
};
  
  const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'SIGN_IN_SUCCESS':
        return { ...state, isAuthenticated: true, user: action.payload };
      case 'SIGN_OUT':
        return { ...state, isAuthenticated: false, user: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
  