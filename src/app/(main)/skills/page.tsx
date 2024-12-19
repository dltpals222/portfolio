'use client';

import Image from 'next/image';

interface Skill {
  name: string;
  icon: {
    type: 'svg' | 'emoji' | 'image';
    source: string;
  };
  category: 'frontend' | 'backend' | 'tools' | 'etc';
  description?: string;
}

export default function Skills() {
  const skills: Skill[] = [
    {
      name: 'React',
      icon: {
        type: 'svg',
        source: '/svg/react.svg'
      },
      category: 'frontend',
      description: 'React를 활용한 웹 애플리케이션 개발 경험'
    },
    {
      name: 'Node.js',
      icon: {
        type: 'svg',
        source: '/svg/nodejs.svg'
      },
      category: 'backend',
      description: 'Node.js 기반 서버 개발 경험'
    },
    // 더 많은 스킬을 추가할 수 있습니다
  ];

  return (
    <div id="skills" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-20 snap-start">
      <div className="max-w-6xl w-full mx-auto p-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Skills</h2>
        
        {/* 스킬 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex flex-col items-center space-y-4">
                {/* 아이콘 */}
                <div className="w-16 h-16 relative">
                  <Image
                    src={skill.icon.source}
                    alt={skill.name}
                    width={64}
                    height={64}
                    className="dark:invert"
                  />
                </div>
                
                {/* 스킬 이름 */}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
                
                {/* 설명 (호버 시 표시) */}
                {skill.description && (
                  <p className="text-gray-600 dark:text-gray-300 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 