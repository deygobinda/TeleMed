import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function Unauthorized() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Unauthorized Access</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          You don't have permission to access this page.
        </p>
        <div className="mt-5">
          <Link
            to={user?.role === 'patient' ? '/patient-dashboard' : '/doctor-dashboard'}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Go back to dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}