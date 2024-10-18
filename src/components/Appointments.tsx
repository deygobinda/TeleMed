import { Link } from "react-router-dom"
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Calendar} from 'lucide-react'

// Mock data for appointments
const appointments = [
  { id: 1, doctor: "Dr. Jane Smith", date: "2023-06-15", time: "10:00 AM", status: "Upcoming" },
  { id: 2, doctor: "Dr. John Doe", date: "2023-06-18", time: "2:30 PM", status: "Upcoming" },
  { id: 3, doctor: "Dr. Emily Brown", date: "2023-06-20", time: "11:15 AM", status: "Upcoming" },
]

export default function Appointments() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Your Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Doctor</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.doctor}</TableCell>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.status}</TableCell>
                  <TableCell>
                    <Link to={`/appointment/${appointment.id}`}>
                      <Button variant="outline" size="sm">
                        <Calendar className="mr-2 h-4 w-4" /> View
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}