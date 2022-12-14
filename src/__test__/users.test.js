import { loadCurrentUser } from '../Redux/users/users';

describe('Bookings tests', () => {
  it('should return an action with type LOAD_CUREENT USER', () => {
    const user = {name: 'seth'};
    const action = loadCurrentUser(user);
    expect(action.type).toBe('doctor-meet-up-frontend/doctors/CURRENT_USER');
  });
  it('should return an action with expected ID', () => {
    const user = {name: 'seth'};
    const action = loadCurrentUser(user);
    expect(action.user).toBe(user);
  });
});
