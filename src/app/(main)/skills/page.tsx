'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Categories, categoriesData, Skill, skillsData } from '../../../../data/skill';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | Skill['categories'][number]>('all');

  const skills: Skill[] = skillsData;

  const categories: Categories[] = categoriesData;

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