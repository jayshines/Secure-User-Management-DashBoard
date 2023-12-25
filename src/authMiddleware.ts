const authMiddleware = (store: any) => (next: any) => (action: any) => {
  if (action.type === 'SIGN_OUT') {
    // Clear user data or perform additional logout tasks
    localStorage.removeItem('user');
  }
  next(action);
};

export default authMiddleware;