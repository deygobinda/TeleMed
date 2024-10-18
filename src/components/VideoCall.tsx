import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Mic, MicOff, Video, VideoOff, PhoneOff, MessageSquare } from 'lucide-react'

export default function VideoCall() {
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOn, setIsVideoOn] = useState(true)

  return (
    <div className="container mx-auto px-4 py-8 h-screen flex flex-col">
      <Card className="flex-grow mb-4 relative overflow-hidden">
        <CardContent className="p-0 h-full">
          <div className="absolute inset-0 bg-gray-900">
            {/* This would be replaced with an actual video stream */}
            <img 
              src="/placeholder.svg?height=720&width=1280" 
              alt="Remote video stream" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 right-4 w-48 h-36 bg-gray-800 rounded-lg overflow-hidden">
            {/* This would be replaced with the local video stream */}
            <img 
              src="/placeholder.svg?height=270&width=480" 
              alt="Local video stream" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-4 left-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Dr. Jane Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center space-x-4">
        <Button
          variant={isMuted ? "destructive" : "secondary"}
          size="icon"
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
        </Button>
        <Button
          variant={isVideoOn ? "secondary" : "destructive"}
          size="icon"
          onClick={() => setIsVideoOn(!isVideoOn)}
        >
          {isVideoOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
        </Button>
        <Button variant="default" size="icon">
          <MessageSquare className="h-4 w-4" />
        </Button>
        <Button variant="destructive" size="icon">
          <PhoneOff className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}