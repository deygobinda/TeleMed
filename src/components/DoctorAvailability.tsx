import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

export default function DoctorAvailability() {
  const [availabilities, setAvailabilities] = useState([
    { day: 'Monday', startTime: '09:00', endTime: '17:00' },
    { day: 'Tuesday', startTime: '09:00', endTime: '17:00' },
    { day: 'Wednesday', startTime: '09:00', endTime: '17:00' },
    { day: 'Thursday', startTime: '09:00', endTime: '17:00' },
    { day: 'Friday', startTime: '09:00', endTime: '17:00' },
  ])

  const handleAvailabilityChange = (index: number, field: string, value: string) => {
    const newAvailabilities = [...availabilities]
    newAvailabilities[index] = { ...newAvailabilities[index], [field]: value }
    setAvailabilities(newAvailabilities)
  }

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log('Saving availabilities:', availabilities)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Manage Availability</CardTitle>
        </CardHeader>
        <CardContent>
          {availabilities.map((availability, index) => (
            <div key={availability.day} className="mb-4 grid grid-cols-3 gap-4">
              <Select
                value={availability.day}
                onValueChange={(value) => handleAvailabilityChange(index, 'day', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select day" />
                </SelectTrigger>
                <SelectContent>
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                    <SelectItem key={day} value={day}>
                      {day}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div>
                <Label htmlFor={`start-time-${index}`}>Start Time</Label>
                <Input
                  id={`start-time-${index}`}
                  type="time"
                  value={availability.startTime}
                  onChange={(e) => handleAvailabilityChange(index, 'startTime', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor={`end-time-${index}`}>End Time</Label>
                <Input
                  id={`end-time-${index}`}
                  type="time"
                  value={availability.endTime}
                  onChange={(e) => handleAvailabilityChange(index, 'endTime', e.target.value)}
                />
              </div>
            </div>
          ))}
          <Button onClick={handleSave} className="mt-4">Save Availability</Button>
        </CardContent>
      </Card>
    </div>
  )
}