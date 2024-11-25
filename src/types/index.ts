export interface Profile {
  name: string;
  age: number;
  gender: string;
  location: string;
  education: string;
  interests: string[];
  introduction: string;
}

export interface Skill {
  name: string;
  icon: {
    type: 'svg' | 'emoji' | 'image';
    source: string;
  };
  category: 'frontend' | 'backend' | 'tools' | 'etc';
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  images: string[];
  links: {
    github?: string;
    live?: string;
  };
  duration: {
    start: string;
    end: string;
  };
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
} 