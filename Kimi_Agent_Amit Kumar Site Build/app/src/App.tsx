import { Navigation } from '@/components/Navigation';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Experience } from '@/sections/Experience';
import { Education } from '@/sections/Education';
import { Achievements } from '@/sections/Achievements';
import { Sports } from '@/sections/Sports';
import { Contact } from '@/sections/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Achievements />
        <Sports />
        <Contact />
      </main>
    </div>
  );
}

export default App;
