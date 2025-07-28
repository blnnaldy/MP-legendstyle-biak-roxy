import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, Users, Phone, MessageSquare } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomType: '',
    date: '',
    time: '',
    guests: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.roomType || !formData.date || !formData.time) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, phone, room type, date, and time are required.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you shortly to confirm your reservation.",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      roomType: '',
      date: '',
      time: '',
      guests: '',
      notes: '',
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Book Your <span className="text-gold">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reserve your perfect karaoke room and let us prepare an unforgettable experience
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-heading text-foreground">
                Quick Reservation
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and we'll confirm your booking within 30 minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="bg-background border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Phone Number *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+62 821-xxxx-xxxx"
                        className="pl-10 bg-background border-border focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                {/* Booking Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="roomType" className="text-foreground font-medium">
                      Room Type *
                    </Label>
                    <Select value={formData.roomType} onValueChange={(value) => handleInputChange('roomType', value)}>
                      <SelectTrigger className="bg-background border-border focus:border-primary">
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vip">VIP Room (8-12 people)</SelectItem>
                        <SelectItem value="deluxe">Deluxe Room (6-8 people)</SelectItem>
                        <SelectItem value="family">Family Room (4-6 people)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-foreground font-medium">
                      Number of Guests
                    </Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="guests"
                        type="number"
                        value={formData.guests}
                        onChange={(e) => handleInputChange('guests', e.target.value)}
                        placeholder="How many guests?"
                        className="pl-10 bg-background border-border focus:border-primary"
                        min="1"
                        max="12"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-foreground font-medium">
                      Preferred Date *
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="pl-10 bg-background border-border focus:border-primary"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-foreground font-medium">
                      Preferred Time *
                    </Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                        <SelectTrigger className="pl-10 bg-background border-border focus:border-primary">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                          <SelectItem value="18:00">6:00 PM</SelectItem>
                          <SelectItem value="20:00">8:00 PM</SelectItem>
                          <SelectItem value="22:00">10:00 PM</SelectItem>
                          <SelectItem value="00:00">12:00 AM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-foreground font-medium">
                    Special Requests
                  </Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      placeholder="Any special requests or notes..."
                      className="pl-10 bg-background border-border focus:border-primary resize-none"
                      rows={3}
                    />
                  </div>
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full">
                  Submit Booking Request
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. We'll contact you within 30 minutes to confirm your reservation.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;