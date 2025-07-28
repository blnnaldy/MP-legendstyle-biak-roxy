import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Users, Mic, Volume2, Star, Coffee } from 'lucide-react';
import vipRoom from '@/assets/vip-room.jpg';
import deluxeRoom from '@/assets/deluxe-room.jpg';
import familyRoom from '@/assets/family-room.jpg';

const RoomTypes = () => {
  const rooms = [
    {
      id: 'vip',
      title: 'VIP Rooms',
      description: 'Ultimate luxury experience with premium amenities',
      image: vipRoom,
      price: 'Rp 500,000',
      duration: '3 hours',
      capacity: '8-12 people',
      features: ['Premium sound system', 'Private bar', 'Luxury seating', 'Dedicated waiter'],
      icon: Crown,
      badge: 'Most Popular',
      badgeVariant: 'gold' as const,
    },
    {
      id: 'deluxe',
      title: 'Deluxe Rooms',
      description: 'Perfect balance of comfort and entertainment',
      image: deluxeRoom,
      price: 'Rp 300,000',
      duration: '3 hours',
      capacity: '6-8 people',
      features: ['Professional audio', 'Neon lighting', 'Comfortable seating', 'Mini bar'],
      icon: Star,
      badge: 'Best Value',
      badgeVariant: 'primary' as const,
    },
    {
      id: 'family',
      title: 'Family Rooms',
      description: 'Fun and safe environment for all ages',
      image: familyRoom,
      price: 'Rp 200,000',
      duration: '3 hours',
      capacity: '4-6 people',
      features: ['Family-friendly', 'Colorful ambiance', 'Basic sound system', 'Snack menu'],
      icon: Users,
      badge: 'Family Choice',
      badgeVariant: 'accent' as const,
    },
  ];

  const getBadgeClasses = (variant: string) => {
    switch (variant) {
      case 'gold':
        return 'bg-gold text-gold-foreground border-gold/30';
      case 'primary':
        return 'bg-primary text-primary-foreground border-primary/30';
      case 'accent':
        return 'bg-accent text-accent-foreground border-accent/30';
      default:
        return '';
    }
  };

  return (
    <section id="rooms" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Premium <span className="text-primary">Room</span> Types
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully designed rooms, each offering a unique karaoke experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => {
            const IconComponent = room.icon;
            return (
              <Card 
                key={room.id} 
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-elegant animate-fade-in"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <Badge 
                    className={`absolute top-4 right-4 ${getBadgeClasses(room.badgeVariant)} border font-semibold`}
                  >
                    {room.badge}
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex items-center mb-2">
                    <IconComponent className="w-6 h-6 text-primary mr-3" />
                    <CardTitle className="text-xl font-heading text-foreground">
                      {room.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {room.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Pricing */}
                  <div className="flex items-baseline mb-4">
                    <span className="text-2xl font-bold text-primary">{room.price}</span>
                    <span className="text-muted-foreground ml-2">/ {room.duration}</span>
                  </div>

                  {/* Capacity */}
                  <div className="flex items-center mb-4 text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{room.capacity}</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {room.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button 
                    variant="premium" 
                    className="w-full group-hover:shadow-neon-primary"
                    size="lg"
                  >
                    <Mic className="w-4 h-4 mr-2" />
                    Book This Room
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoomTypes;