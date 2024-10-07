import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Search, MapPin, Calendar } from 'lucide-react'
import { Button } from './ui/button'

interface Doctor {
  id: string
  name: string
  specialization: string
  location: string
}

const mockDoctors: Doctor[] = [
  { id: '1', name: 'Dr. Jane Smith', specialization: 'Cardiology', location: 'Kolkata' },
  { id: '2', name: 'Dr. John Doe', specialization: 'Dermatology', location: 'Mumbai' },
  { id: '3', name: 'Dr. Emily Brown', specialization: 'Pediatrics', location: 'Haldia' },
]

export default function DoctorSelection() {
  const [specialization, setSpecialization] = useState('')
  const [location, setLocation] = useState('')
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(mockDoctors)

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault()
    const filtered = mockDoctors.filter(
      (doctor) =>
        doctor.specialization.toLowerCase().includes(specialization.toLowerCase()) &&
        doctor.location.toLowerCase().includes(location.toLowerCase())
    )
    setFilteredDoctors(filtered)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Find a Doctor</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Filter Doctors</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleFilter} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="specialization">Specialization</Label>
                <Input
                  id="specialization"
                  type="text"
                  placeholder="e.g., Cardiology"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="e.g., New York"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              <Search className="mr-2 h-4 w-4" /> Filter Doctors
            </Button>
          </form>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <Card key={doctor.id}>
            <CardHeader>
              <CardTitle>{doctor.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                <Search className="inline-block mr-2 h-4 w-4" />
                Specialization: {doctor.specialization}
              </p>
              <p className="text-sm text-muted-foreground">
                <MapPin className="inline-block mr-2 h-4 w-4" />
                Location: {doctor.location}
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Calendar className="mr-2 h-4 w-4" /> Book Appointment
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}