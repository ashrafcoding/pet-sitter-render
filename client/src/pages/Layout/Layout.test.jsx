import { render } from '@testing-library/react';
import Layout from './Layout';
import MockAuthProvider from '../../mocks/mockUseAuthProvider';

describe('Layout tests', () => {
  test('smoke test', () => {
    render(
      <MockAuthProvider>
        <Layout />
      </MockAuthProvider>,
    );
  });

  test('loading snapshot test', () => {
    const { asFragment } = render(
      <MockAuthProvider>
        <Layout />
      </MockAuthProvider>,
    );
    expect(asFragment).toMatchSnapshot();
  });

  test('rendered messages snapshot test', () => {
    const { asFragment } = render(
      <MockAuthProvider>
        <Layout />
      </MockAuthProvider>,
    );
    expect(asFragment).toMatchSnapshot();
  });

  test('should have loading when waiting for auth provide to check if loggedIn', () => {
    const {getByRole}  = render(<Layout />);
    expect(getByRole('progressbar')).toBeInTheDocument();
  });

  test('should have loading when waiting for auth provide to check if loggedIn', async () => {
    const { getAllByText, getByPlaceholderText } = render(
      <MockAuthProvider>
        <Layout />
      </MockAuthProvider>,
    );
    expect(getAllByText('Chats')).toHaveLength(1);
    expect(getByPlaceholderText('Type something...')).toBeInTheDocument();
  });
});
