export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'ml' | 'enterprise';
}

export interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frameworks' | 'databases' | 'tools' | 'soft';
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  url: string;
  icon: string;
}

export interface Education {
  degree: string;
  field: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
