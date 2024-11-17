import SkillGrid from './components/SkillGrid'

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 dark:from-primary/5 dark:to-secondary/5">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-12 font-geist-sans text-gray-800 dark:text-gray-100">Skills</h1>
        <div className="text-gray-700 dark:text-gray-200">
          <SkillGrid />
        </div>
      </div>
    </div>
  )
} 