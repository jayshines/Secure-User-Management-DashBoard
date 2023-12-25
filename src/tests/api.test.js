import axios from 'axios';
import { signIn } from '..//services/api';

jest.mock('axios');

describe('HTTP Service Interactions', () => {
  it('should handle successful sign-in', async () => {
    const mockResponse = { data: { token: 'mockToken' } };
    axios.post.mockResolvedValue(mockResponse);

    const credentials = { email: 'test@example.com', password: 'password' };
    const response = await signIn(credentials);

    expect(response).toEqual(mockResponse.data);
  });
});
