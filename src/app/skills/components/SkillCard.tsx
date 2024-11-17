import Image from 'next/image'
import { Skill } from '@/types'

interface SkillCardProps {
  skill: Skill
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <div className="flex items-center space-x-4 mb-4">
        {skill.icon && (
          <div className="relative w-12 h-12">
            <Image
              src={skill.icon}
              alt={skill.name}
              fill
              className="object-contain"
            />
          </div>
        )}
        <h3 className="text-xl font-bold font-geist-sans">{skill.name}</h3>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-300">숙련도</span>
          <span className="text-sm font-medium">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
    </div>
  )
} 