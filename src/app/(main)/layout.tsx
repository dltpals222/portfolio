import Home from './page';
import About from './about/page';
import Skills from './skills/page';

export default function MainLayout() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory">
      <Home />
      <About />
      <Skills />
    </main>
  );
} 