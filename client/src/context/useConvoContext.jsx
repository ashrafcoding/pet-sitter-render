import {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from 'react';
import { getAllConversations, getConversation, sendMessage } from '../helpers/APICalls/conversation';
import produce from 'immer';


export const ConvoContext = createContext({
  conversations: undefined,
  activeConvo: undefined,
  mobileOpen: false,
  updateConvoContext: () => null,
  activateChat: () => null,
  toggleDrawer: () => async () => undefined,
  sendMessageContenxt: () => null,
});

export const ConvoProvider = ({ children }) => {
  const [conversations, setConversations] = useState();
  const [activeConvo, setActiveConvo] = useState();
  const [mobileOpen, setMobileOpen] = useState(false);

  const updateConvoContext = useCallback((convos) => {
    setConversations(convos);
  }, []);

  const fetchConversations = useCallback(async () => {
    const data = await getAllConversations();
    updateConvoContext(data);
  }, [updateConvoContext]);

  const activateChat = useCallback((convo) => {
    setActiveConvo(convo);
  }, []);

  const toggleDrawer = useCallback(
    (open, conversationId) => async (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
      setMobileOpen(open);

      if (open) {
        const messages = await getConversation(conversationId);
        activateChat(messages);
      } else {
        activateChat(null);
      }
    },
    [activateChat],
  );

  const sendMessageContenxt = useCallback(
    async (sendingMessageInfo) => {
      const sendingMessage = await sendMessage(sendingMessageInfo);
      setActiveConvo(
        produce((draft) => {
          draft.messages.push(sendingMessage);
        }),
      );
      fetchConversations();
    },
    [fetchConversations],
  );

  useEffect(() => {
    try {
      fetchConversations();
    } catch (error) {}
  }, [fetchConversations]);

  return (
    <ConvoContext.Provider
      value={{
        conversations,
        activeConvo,
        mobileOpen,
        updateConvoContext,
        activateChat,
        toggleDrawer,
        sendMessageContenxt,
      }}
    >
      {children}
    </ConvoContext.Provider>
  );
};

export function useConvo() {
  return useContext(ConvoContext);
}
