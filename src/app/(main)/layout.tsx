import Home from './page';
import About from './about/page';
import Skills from './skills/page';
import Portfolio from './portfolio/page';
import Contact from './contact/page';

export default function MainLayout() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory">
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
} 