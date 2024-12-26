'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Skill {
  name: string;
  icon: {
    type: 'svg' | 'emoji' | 'image';
    source: string;
  };
  categories: ('frontend' | 'backend' | 'tools' | 'etc')[];
  description?: string;
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | Skill['categories'][number]>('all');

  const skills: Skill[] = [
    // 기본 웹 스킬
    {
      name: 'HTML',
      icon: { type: 'svg', source: '/portfolio/svg/html.svg' },
      categories: ['frontend'],
      description: '시맨틱 마크업을 활용한 웹 구조화'
    },
    {
      name: 'CSS',
      icon: { type: 'svg', source: '/portfolio/svg/css.svg' },
      categories: ['frontend'],
      description: '반응형 디자인 및 모던 CSS 활용'
    },
    {
      name: 'JavaScript',
      icon: { type: 'svg', source: '/portfolio/svg/javascript.svg' },
      categories: ['frontend', 'backend'],
      description: '모던 자바스크립트를 활용한 동적 기능 구현'
    },
    
    // Frontend 스킬
    {
      name: 'React.js',
      icon: { type: 'svg', source: '/portfolio/svg/react.svg' },
      categories: ['frontend'],
      description: 'React를 활용한 웹 애플리케이션 개발 경험'
    },
    {
      name: 'Next.js',
      icon: { type: 'svg', source: '/portfolio/svg/nextjs.svg' },
      categories: ['frontend'],
      description: 'Next.js를 이용한 SSR/CSR 웹 개발'
    },
    {
      name: 'TypeScript',
      icon: { type: 'svg', source: '/portfolio/svg/typescript.svg' },
      categories: ['frontend', 'backend'],
      description: 'TypeScript를 활용한 타입 안전성 확보'
    },

    // Backend 스킬
    {
      name: 'Node.js',
      icon: { type: 'svg', source: '/portfolio/svg/nodejs.svg' },
      categories: ['backend'],
      description: 'Node.js 기반 서버 개발 경험'
    },
    {
      name: 'Express',
      icon: { type: 'svg', source: '/portfolio/svg/express.svg' },
      categories: ['backend'],
      description: 'Express 프레임워크를 활용한 API 개발'
    },
    {
      name: 'MySQL',
      icon: { type: 'svg', source: '/portfolio/svg/mysql.svg' },
      categories: ['backend'],
      description: 'MySQL을 활용한 데이터베이스 설계 및 관리'
    },

    // 개발 도구
    {
      name: 'Git',
      icon: { type: 'svg', source: '/portfolio/svg/git.svg' },
      categories: ['tools'],
      description: 'Git을 활용한 버전 관리'
    },
    {
      name: 'Docker',
      icon: { type: 'svg', source: '/portfolio/svg/docker.svg' },
      categories: ['tools'],
      description: 'Docker를 이용한 컨테이너화'
    },

    // 기타
    {
      name: 'Notion',
      icon: { type: 'svg', source: '/portfolio/svg/notion.svg' },
      categories: ['etc'], 
      description: 'Notion을 활용한 문서화 및 협업'
    }
  ];

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'frontend', name: '프론트엔드' },
    { id: 'backend', name: '백엔드' },
    { id: 'tools', name: '개발도구' },
    { id: 'etc', name: '기타' }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.categories.includes(selectedCategory));

  return (
    <div id="skills" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-20 snap-start">
      <div className="max-w-6xl w-full mx-auto p-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Skills</h2>
        
        {/* 카테고리 필터 */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as 'all' | Skill['categories'][number])}
              className={`px-6 py-2 rounded-full transition-colors duration-300
                ${selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                }
              `}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* 스킬 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className="h-[200px] relative"
            >
              <div className="absolute inset-0">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group h-[140px] hover:h-[200px] overflow-hidden">
                  <div className="flex flex-col items-center">
                    {/* 아이콘 컨테이너 - 아이콘별 크기 조정 */}
                    <div className={`relative mb-3 ${
                      skill.name === 'Express' ? 'w-32 h-12' :
                      skill.name === 'MySQL' ? 'w-20 h-16' :
                      skill.name === 'Docker' || skill.name === 'Notion' ? 'w-14 h-14' :
                      'w-16 h-16'
                    }`}>
                      <Image
                        src={skill.icon.source}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                    {/* 스킬 이름 */}
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                      {skill.name}
                    </h3>
                    
                    {/* 설명 (호버 시 표시) */}
                    {skill.description && (
                      <div className="h-0 group-hover:h-16 overflow-hidden transition-all duration-300">
                        <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                          {skill.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 