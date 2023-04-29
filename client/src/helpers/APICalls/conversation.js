import URL from "./url";
export const getAllConversations = async () => {
  const fetchOptions = {
    method: "GET",
    credentials: "include",
  };
  return await fetch(`${URL}/conversations`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again" },
    }));
};

export const getConversation = async (conversationId) => {
  const fetchOptions = {
    method: "GET",
    credentials: "include",
  };
  return await fetch(`${URL}/conversations/${conversationId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again" },
    }));
};

export const sendMessage = async (sendingMessageInfo) => {
  const fetchOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sendingMessageInfo),
    credentials: "include",
  };
  return await fetch(`${URL}/messages`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again" },
    }));
};
