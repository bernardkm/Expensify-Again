import authReducers from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
      type: 'LOGIN',
      uid: "ABC"
    };
    const state = authReducers({}, action);
    expect(state.uid).toEqual(action.uid);
  });

test('should clear uid', () => {
const action = {
    type: 'LOGOUT'
};
const state = authReducers({uid: "anything"}, action);
expect(state.uid).toEqual(null);
});