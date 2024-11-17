export default function EducationSection() {
  const education = [
    {
      period: '2017 - 2021',
      degree: '컴퓨터공학 학사',
      school: '서울대학교',
      description: '웹 개발 및 소프트웨어 엔지니어링 전공'
    }
  ]

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold font-geist-sans">학력</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
            <h3 className="text-xl font-semibold mt-2 font-geist-sans">{edu.degree}</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">{edu.school}</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
} 