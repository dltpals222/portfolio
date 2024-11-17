import { Skill } from '@/types'
import SkillCard from './SkillCard'

const skills: Skill[] = [
  {
    name: 'React',
    level: 90,
    category: 'frontend',
    icon: '/icons/react.svg'
  },
  {
    name: 'Node.js',
    level: 85,
    category: 'backend',
    icon: '/icons/nodejs.svg'
  },
  // 더 많은 스킬 추가 예정
]

export default function SkillGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  )
} 