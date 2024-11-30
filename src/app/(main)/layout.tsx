import Home from './page';
import About from './about/page';

export default function MainLayout() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory">
      <Home />
      <About />
    </main>
  );
} 