import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Calendar, Clock, FileText, LogOut } from "lucide-react"

export default function DoctorDashboard() {
  const { user, logout } = useAuth()

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Doctor Dashboard</CardTitle>
          <CardDescription>Welcome, Dr. {user?.name}!</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <Link to="/doctor/appointments" className="w-full">
            <Button className="w-full" variant="default">
              <Calendar className="mr-2 h-4 w-4" /> View Upcoming Appointments
            </Button>
          </Link>
          <Link to="/doctor/availability" className="w-full">
            <Button className="w-full" variant="secondary">
              <Clock className="mr-2 h-4 w-4" /> Manage Availability
            </Button>
          </Link>
          <Link to="/doctor/prescriptions" className="w-full">
            <Button className="w-full" variant="outline">
              <FileText className="mr-2 h-4 w-4" /> Upload Prescriptions
            </Button>
          </Link>
          <Button className="w-full" variant="destructive" onClick={logout}>
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            For any issues, please contact support at support@healthapp.com
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}