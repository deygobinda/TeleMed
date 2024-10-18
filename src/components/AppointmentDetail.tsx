import { useParams, Link } from "react-router-dom"
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Calendar, Video, ArrowLeft } from 'lucide-react'

// Mock data for a specific appointment
const appointmentData = {
  id: 1,
  doctor: "Dr. Jane Smith",
  date: "2023-06-15",
  time: "10:00 AM",
  status: "Upcoming",
  notes: "Regular check-up"
}

export default function AppointmentDetail() {
  const { id } = useParams<{ id: string }>()
  // In a real app, you would fetch the appointment data based on the id
  const appointment = appointmentData

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-3xl font-bold">Appointment Details</CardTitle>
            <Link to="/appointments">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Appointments
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Doctor:</p>
              <p>{appointment.doctor}</p>
            </div>
            <div>
              <p className="font-semibold">Status:</p>
              <p>{appointment.status}</p>
            </div>
            <div>
              <p className="font-semibold">Date:</p>
              <p>{appointment.date}</p>
            </div>
            <div>
              <p className="font-semibold">Time:</p>
              <p>{appointment.time}</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">Notes:</p>
            <p>{appointment.notes}</p>
          </div>
          <div className="flex justify-between items-center pt-4">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" /> Reschedule
            </Button>
            <Link to={`/video-call/${id}`}>
              <Button variant="default">
                <Video className="mr-2 h-4 w-4" /> Join Video Call
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}