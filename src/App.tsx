import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './components/auth/PrivateRoute'
import Home from './pages/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Unauthorized from './components/auth/Unauthorized'
import DoctorSelection from './components/DoctorSelection'
import PatientDashboard from './components/PatientDashboard'
import DoctorDashboard from './components/DoctorDashboard'
import Appointments from './components/Appointments'
import AppointmentDetail from './components/AppointmentDetail'
import VideoCall from './components/VideoCall.tsx'

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route
              path="/select-doctor"
              element={<PrivateRoute element={<DoctorSelection />} allowedRoles={['patient']} />}
            />
            <Route
              path="/patient-dashboard"
              element={<PrivateRoute element={<PatientDashboard />} allowedRoles={['patient']} />}
            />
            <Route
              path="/doctor-dashboard"
              element={<PrivateRoute element={<DoctorDashboard />} allowedRoles={['doctor']} />}
            />
            <Route
              path="/appointments"
              element={<PrivateRoute element={<Appointments />} allowedRoles={['patient']} />}
            />
            <Route
              path="/appointment/:id"
              element={<PrivateRoute element={<AppointmentDetail />} allowedRoles={['patient']} />}
            />
            <Route
              path="/video-call/:id"
              element={<PrivateRoute element={<VideoCall />} allowedRoles={['patient', 'doctor']} />}
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}