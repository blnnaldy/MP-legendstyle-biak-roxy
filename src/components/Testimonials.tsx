import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Event Organizer',
      avatar: 'SJ',
      rating: 5,
      text: 'Amazing experience! The VIP room was absolutely perfect for our corporate event. The sound quality was exceptional and the service was top-notch. Will definitely book again!',
      event: 'Corporate Event',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Birthday Celebrant',
      avatar: 'MC',
      rating: 5,
      text: 'Celebrated my birthday here and it was unforgettable! The staff surprised us with a beautiful cake and the atmosphere was incredible. The deluxe room had everything we needed.',
      event: 'Birthday Party',
    },
    {
      id: 3,
      name: 'Amanda Rodriguez',
      role: 'Regular Customer',
      avatar: 'AR',
      rating: 5,
      text: 'This place has become our go-to spot for karaoke nights. The family room is perfect for our group and the pricing is very reasonable. Love the neon ambiance!',
      event: 'Weekly Hangout',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Music Enthusiast',
      avatar: 'DK',
      rating: 5,
      text: 'As a musician, I appreciate good sound quality and this place delivers! The equipment is professional-grade and the room acoustics are perfect. Highly recommended!',
      event: 'Music Session',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-gold fill-current' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            What Our <span className="text-primary">Guests</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative h-80 mb-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentTestimonial
                    ? 'opacity-100 transform scale-100'
                    : 'opacity-0 transform scale-95'
                } bg-card/50 backdrop-blur-sm border-border shadow-elegant`}
              >
                <CardContent className="p-8 md:p-12 text-center h-full flex flex-col justify-center">
                  <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
                  
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-body">
                    "{testimonial.text}"
                  </p>

                  <div className="flex flex-col items-center">
                    <Avatar className="w-16 h-16 mb-4 border-2 border-primary/30">
                      <AvatarImage src="" alt={testimonial.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    
                    <h4 className="text-xl font-heading font-semibold text-foreground mb-1">
                      {testimonial.name}
                    </h4>
                    
                    <p className="text-muted-foreground mb-3">
                      {testimonial.role} • {testimonial.event}
                    </p>
                    
                    <div className="flex items-center">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary shadow-neon-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Customer Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-2">
                4.9/5
              </div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-gold mb-2">
                24/7
              </div>
              <div className="text-muted-foreground">Always Open</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                15+
              </div>
              <div className="text-muted-foreground">Premium Rooms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;