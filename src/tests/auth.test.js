import authReducer from '../store/reducers/authReducer';

describe('Authentication Logic', () => {
  it('should handle SIGN_IN_SUCCESS action', () => {
    const initialState = {
      isAuthenticated: false,
      user: null,
    };

    const action = {
      type: 'SIGN_IN_SUCCESS',
      payload: { token: 'mockToken' },
    };

    const newState = authReducer(initialState, action);

    expect(newState.isAuthenticated).toBe(true);
    expect(newState.user).toEqual({ token: 'mockToken' });
  });

  it('should handle SIGN_OUT action', () => {
    const initialState = {
      isAuthenticated: true,
      user: { token: 'mockToken' },
    };

    const action = {
      type: 'SIGN_OUT',
    };

    const newState = authReducer(initialState, action);

    expect(newState.isAuthenticated).toBe(false);
    expect(newState.user).toBe(null);
  });
});
