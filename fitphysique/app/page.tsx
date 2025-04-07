import About from '@/components/About';
import Hero from '@/components/Hero';
import Classes from '@/components/Classes';
import Team from '@/components/Team';
import Membership from '@/components/Membership';
import Testimonial from '@/components/Testimonial';
import Blog from '@/components/Blog';
import Brands from '@/components/Brands';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Classes />
      <Team />
      <Membership />
      <Testimonial />
      <Blog />
      <Brands />
      {/* temporary div */}
      {/* <div className='h-[3000px]'></div> */}
    </main>
  );
}
