import { ThemeProvider } from '@mui/material';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import { AuthProvider } from './context/useAuthContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import { ConvoProvider } from './context/useConvoContext';
import { SocketProvider } from './context/useSocketContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import TempDashboardMain from './pages/TempDashboardMain/TempDashboardMain';
import Listings from './pages/Listings/Listings';
import Profile from './pages/Profile/Profile';
import ProfileDetail from './pages/Profile/ProfileDetail/ProfileDetail';
import Landing from './pages/Landing/Landing';
import Notifications from './pages/Notifications/Notifications';
import Messages from './pages/Messages/Messages';
import Bookings from './pages/Bookings/Bookings';
import './App.css';

function App(){
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SocketProvider>
          <SnackBarProvider>
            <AuthProvider>
              <Routes>
                <Route  path="/login" element={<Login/>}  />
                <Route  path="/signup" element={<Signup/>} />
                <Route path="/dashboard" element={<ProtectedRoute><TempDashboardMain/></ProtectedRoute>}/>             
                <Route  path="/listings" element={<Listings/>} />
                <Route path="/listings/:sitterId" element={<ProfileDetail/>} />
                <Route  path="/profile" element={<Profile/>} />
                <Route path="/profile/:setting" element={<Profile/>} />
                <Route  path="/notifications" element={<Notifications/>} />
                <Route  path="/bookings" element={<Bookings/>} />
                <Route  path="/" element={<Landing/>} />               
                <Route  path="/messages" element={<ConvoProvider><Messages/></ConvoProvider>} /> 
                <Route path="*"  element={<Login/>} />
              </Routes>
            </AuthProvider>
          </SnackBarProvider>
        </SocketProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
