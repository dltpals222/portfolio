'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  images: string[];
  links: {
    github?: string;
    live?: string;
  };
  duration: {
    start: string;
    end: string;
  };
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'project-1',
      title: '포트폴리오 웹사이트',
      summary: 'Next.js와 TypeScript를 활용한 개인 포트폴리오 웹사이트',
      description: '개인 포트폴리오를 위한 웹사이트입니다. Next.js 14와 TypeScript를 사용하여 개발했으며, 다크모드와 반응형 디자인을 지원합니다.',
      thumbnail: '/images/portfolio/portfolio-thumb.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      images: [
        '/images/portfolio/portfolio-1.jpg',
        '/images/portfolio/portfolio-2.jpg'
      ],
      links: {
        github: 'https://github.com/username/portfolio',
        live: 'https://portfolio.example.com'
      },
      duration: {
        start: '2024.02',
        end: '2024.03'
      }
    }
    // 더 많은 프로젝트를 추가할 수 있습니다
  ];

  return (
    <div id="portfolio" className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Portfolio</h2>
        
        {/* 프로젝트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* 썸네일 */}
              <div className="relative h-48 w-full">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* 프로젝트 정보 */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.summary}
                </p>
                
                {/* 기술 스택 태그 */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 프로젝트 상세 모달 */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* 모달 내용은 나중에 구현 */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                닫기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 