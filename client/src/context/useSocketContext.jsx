import { useState, useContext, createContext, useCallback } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext({
  socket: undefined,
  initSocket: () => null,
});

export const SocketProvider = ({ children })=> {
  // const { loggedInUser } = useAuth();
  const [socket, setSocket] = useState(undefined);

  const initSocket = useCallback(() => {
    let socketConnection;
    setSocket((val) => {
      socketConnection = val;
      return val;
    });
    if (socketConnection) return;
    const socketInit = io('/', {
      withCredentials: true,
    });

    socketInit.on('connect', () => {
      //
    });

    setSocket(socketInit);
  }, []);

  return <SocketContext.Provider value={{ socket, initSocket }}>{children}</SocketContext.Provider>;
};

export function useSocket() {
  return useContext(SocketContext);
}
