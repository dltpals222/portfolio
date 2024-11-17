export interface MainLayoutProps {
  children: React.ReactNode;
  nav: React.ReactNode;
  footer: React.ReactNode;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  links: {
    github?: string;
    live?: string;
  };
} 