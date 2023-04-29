import Layout from '../Layout/Layout';
import ChatSideBanner from './ChatSideBanner/ChatSideBanner';
import ActiveChat from './ActiveChat/ActiveChat';
import { useAuth } from '../../context/useAuthContext';
import { useConvo } from '../../context/useConvoContext';

const Messages = () => {
  const { loggedInUser } = useAuth();
  const { conversations } = useConvo();

  return (
    <Layout>
      {loggedInUser?.id && (
        <>
          <ChatSideBanner conversations={conversations} />
          <ActiveChat userId={loggedInUser?.id} />
        </>
      )}
    </Layout>
  );
};

export default Messages;
