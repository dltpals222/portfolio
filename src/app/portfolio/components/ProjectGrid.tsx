import { Project } from '@/types'
import ProjectCard from './ProjectCard'

const projects: Project[] = [
  {
    id: '1',
    title: '풀스택 이커머스 플랫폼',
    description: 'Next.js와 Node.js를 활용한 현대적인 이커머스 플랫폼',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'TailwindCSS'],
    images: ['/projects/ecommerce.jpg'],
    links: {
      github: 'https://github.com/username/project',
      // live: 'https://project.com'
    }
  },
  // 더 많은 프로젝트 추가 예정
]

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
} 