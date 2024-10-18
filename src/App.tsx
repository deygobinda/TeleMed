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
import VideoCall from './components/VideoCall'
import DoctorAppointments from './components/DoctorAppointments'
import DoctorAvailability from './components/DoctorAvailability'
import DoctorPrescriptions from './components/DoctorPrescriptions'

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
            
            {/* Patient Routes */}
            <Route
              path="/select-doctor"
              element={<PrivateRoute element={<DoctorSelection />} allowedRoles={['patient']} />}
            />
            <Route
              path="/patient-dashboard"
              element={<PrivateRoute element={<PatientDashboard />} allowedRoles={['patient']} />}
            />
            <Route
              path="/appointments"
              element={<PrivateRoute element={<Appointments />} allowedRoles={['patient']} />}
            />
            <Route
              path="/appointment/:id"
              element={<PrivateRoute element={<AppointmentDetail />} allowedRoles={['patient']} />}
            />

            {/* Doctor Routes */}
            <Route
              path="/doctor-dashboard"
              element={<PrivateRoute element={<DoctorDashboard />} allowedRoles={['doctor']} />}
            />
            <Route
              path="/doctor/appointments"
              element={<PrivateRoute element={<DoctorAppointments />} allowedRoles={['doctor']} />}
            />
            <Route
              path="/doctor/availability"
              element={<PrivateRoute element={<DoctorAvailability />} allowedRoles={['doctor']} />}
            />
            <Route
              path="/doctor/prescriptions"
              element={<PrivateRoute element={<DoctorPrescriptions />} allowedRoles={['doctor']} />}
            />

            {/* Shared Routes */}
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