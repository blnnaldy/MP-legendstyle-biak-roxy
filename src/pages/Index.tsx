import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import RoomTypes from '@/components/RoomTypes';
import PromoSection from '@/components/PromoSection';
import BookingForm from '@/components/BookingForm';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <RoomTypes />
      <PromoSection />
      <BookingForm />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
