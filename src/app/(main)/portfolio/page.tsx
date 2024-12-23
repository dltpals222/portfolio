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
      thumbnail: '/images/portfolio/portfolio-1.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      images: [
        '/images/portfolio/portfolio-1.png',
        '/images/portfolio/portfolio-2.png',
        '/images/portfolio/portfolio-3.png',
      ],
      links: {
        github: 'https://github.com/dltpals222/portfolio',
        live: 'http://localhost:3000/'
      },
      duration: {
        start: '2024.11',
        end: '2025.01'
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
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
              {/* 닫기 버튼 */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* 프로젝트 제목 */}
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                {selectedProject.title}
              </h3>

              {/* 프로젝트 기간 */}
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {selectedProject.duration.start} - {selectedProject.duration.end}
              </p>

              {/* 이미지 갤러리 */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    프로젝트 이미지
                  </h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {selectedProject.images.length}개의 이미지
                  </span>
                </div>
                <div className="relative">
                  <div className="flex overflow-x-auto pb-4 gap-4">
                    {selectedProject.images.map((image, index) => (
                      <div 
                        key={index} 
                        className="flex-none relative w-80 h-48 rounded-lg overflow-hidden group"
                      >
                        <Image
                          src={image}
                          alt={`${selectedProject.title} 이미지 ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                        {/* 이미지 번호 오버레이 */}
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-sm px-2 py-1 rounded">
                          {index + 1} / {selectedProject.images.length}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* 스크롤 가능함을 나타내는 그라데이션 */}
                  <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-white dark:from-gray-800 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* 프로젝트 설명 */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  프로젝트 설명
                </h4>
                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                  {selectedProject.description}
                </p>
              </div>

              {/* 사용 기술 */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  사용 기술
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 링크 */}
              <div className="flex gap-4">
                {selectedProject.links.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {selectedProject.links.live && (
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 