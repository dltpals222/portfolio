import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-primary/5 dark:to-secondary/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-geist-sans text-gray-800 dark:text-gray-100">
              안녕하세요,<br />
              <span className="text-primary">풀스택 개발자</span>를 지향하는<br />
              개발자입니다
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 font-geist-sans">
              프론트엔드부터 백엔드까지, 전체 개발 사이클을 아우르는<br />
              창의적인 웹 서비스를 만들어냅니다
            </p>
            <div className="space-x-4">
              <Link 
                href="/portfolio" 
                className="bg-primary text-gray-100 px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:transform hover:scale-105"
              >
                포트폴리오 보기
              </Link>
              <Link 
                href="/contact" 
                className="bg-white text-primary px-8 py-3 rounded-lg border border-primary hover:bg-gray-50 transition-all duration-300 hover:transform hover:scale-105"
              >
                연락하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-primary/5 dark:to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 border-2 border-gray-200 dark:border-gray-600 transform hover:-translate-y-2 hover:border-primary/50">
              <div className="flex flex-col h-full">
                <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-4 mb-6 inline-block">
                  <h3 className="text-2xl font-bold font-geist-sans text-gray-800 dark:text-gray-100">풀스택 기술</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-200 mb-6 flex-grow text-lg">
                  프론트엔드: Next.js, React, TypeScript<br />
                  백엔드: Node.js, Python, Database
                </p>
                <Link 
                  href="/skills" 
                  className="text-primary hover:text-primary/80 inline-flex items-center font-semibold group"
                >
                  더 알아보기
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 border-2 border-gray-200 dark:border-gray-600 transform hover:-translate-y-2 hover:border-primary/50">
              <div className="flex flex-col h-full">
                <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-4 mb-6 inline-block">
                  <h3 className="text-2xl font-bold font-geist-sans text-gray-800 dark:text-gray-100">통합 프로젝트</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-200 mb-6 flex-grow text-lg">
                  프론트엔드와 백엔드를 아우르는<br />
                  완성도 높은 풀스택 프로젝트들
                </p>
                <Link 
                  href="/portfolio" 
                  className="text-primary hover:text-primary/80 inline-flex items-center font-semibold group"
                >
                  프로젝트 보기
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 border-2 border-gray-200 dark:border-gray-600 transform hover:-translate-y-2 hover:border-primary/50">
              <div className="flex flex-col h-full">
                <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-4 mb-6 inline-block">
                  <h3 className="text-2xl font-bold font-geist-sans text-gray-800 dark:text-gray-100">개발 여정</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-200 mb-6 flex-grow text-lg">
                  프론트엔드에서 시작해 풀스택으로<br />
                  성장해온 저의 개발 이야기
                </p>
                <Link 
                  href="/about" 
                  className="text-primary hover:text-primary/80 inline-flex items-center font-semibold group"
                >
                  자세히 보기
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
