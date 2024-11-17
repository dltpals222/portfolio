export default function ExperienceTimeline() {
  const experiences = [
    {
      period: '2023 - 현재',
      role: '풀스택 개발자',
      company: '테크 스타트업',
      description: 'Next.js와 Node.js를 활용한 웹 애플리케이션 개발'
    },
    {
      period: '2021 - 2023',
      role: '프론트엔드 개발자',
      company: 'IT 기업',
      description: 'React 기반의 웹 서비스 개발 및 유지보수'
    }
  ]

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold font-geist-sans">경력</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-primary">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full" />
            <div className="space-y-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
              <h3 className="text-xl font-semibold font-geist-sans">{exp.role}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">{exp.company}</p>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 