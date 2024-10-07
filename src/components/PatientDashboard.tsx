import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Calendar, PlusCircle, LogOut } from 'lucide-react'

export default function PatientDashboard() {
  const { user, logout } = useAuth()

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Patient Dashboard</CardTitle>
          <CardDescription>Welcome, {user?.name}!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full" variant="default">
            <Calendar className="mr-2 h-4 w-4" /> View Upcoming Appointments
          </Button>
          <Link to={"/select-doctor"}>
          <Button className="w-full" variant="secondary">
            <PlusCircle className="mr-2 h-4 w-4" /> Book New Appointment
          </Button>
          </Link>
          <Button className="w-full" variant="destructive" onClick={logout}>
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            For any medical emergencies, please call 911 or your local emergency number.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}