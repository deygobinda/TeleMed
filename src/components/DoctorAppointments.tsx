import { Link } from "react-router-dom"
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import {  Video } from 'lucide-react'

// Mock data for appointments
const appointments = [
  { id: 1, patient: "John Doe", date: "2023-06-15", time: "10:00 AM", status: "Upcoming" },
  { id: 2, patient: "Jane Smith", date: "2023-06-18", time: "2:30 PM", status: "Upcoming" },
  { id: 3, patient: "Alice Johnson", date: "2023-06-20", time: "11:15 AM", status: "Upcoming" },
]

export default function DoctorAppointments() {
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
                <TableHead>Patient</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.patient}</TableCell>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.status}</TableCell>
                  <TableCell>
                    <Link to={`/video-call/${appointment.id}`}>
                      <Button variant="outline" size="sm">
                        <Video className="mr-2 h-4 w-4" /> Join Call
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