import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'

export default function Home() {
  const { isAuthenticated, user } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">TeleMed</h1>
          <nav>
            {isAuthenticated ? (
              <Link
                to={user?.role === 'patient' ? '/patient-dashboard' : '/doctor-dashboard'}
                className="text-blue-600 hover:text-blue-800"
              >
                Go to Dashboard
              </Link>
            ) : (
              <div className="space-x-4">
                <Link to="/login" className="text-blue-600 hover:text-blue-800">
                  Login
                </Link>
                <Link to="/register" className="text-blue-600 hover:text-blue-800">
                  Register
                </Link>
              </div>
            )}
          </nav>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Healthcare at Your Fingertips
              </h2>
              <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                Connect with top doctors from the comfort of your home. Get expert medical advice, prescriptions, and
                follow-ups online.
              </p>
              {!isAuthenticated && (
                <div className="mt-8 flex justify-center">
                  <Button asChild className="mr-4">
                    <Link to="/register">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/login">Sign In</Link>
                  </Button>
                </div>
              )}
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Video Consultations</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Face-to-face online consultations with experienced doctors. Get diagnosed and treated from anywhere.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Secure Prescriptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Receive and access your prescriptions securely online. No more lost paper prescriptions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>24/7 Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Access healthcare services round the clock. Book appointments at your convenience.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-500">&copy; 2023 TeleMed . All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}