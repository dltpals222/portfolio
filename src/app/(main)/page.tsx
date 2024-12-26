'use client';

export default function Home() {
  return (
    <div id="home" className="relative flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 snap-start">
      {/* 벚꽃 배경 */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/images/cherry-blossom-bg.jpg')" }}
      />
      
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 -z-10 bg-gray-50/50 dark:bg-black/50" />
      
      {/* 컨텐츠 */}
      <section className="max-w-2xl rounded-xl p-8 backdrop-blur-sm">
        <h1 className="mb-6 text-7xl font-bold text-center text-gray-800 dark:text-white">안녕하세요</h1>
        <h2 className="mb-10 text-4xl text-center text-gray-700 dark:text-gray-200">개발자 이세민 입니다</h2>
        <p className="text-2xl text-gray-600 dark:text-gray-300 text-center">
          개발에 대한 저의 경험을 공유합니다.
        </p>
        
        {/* 스크롤 안내 */}
        <div className="mt-12 text-center animate-bounce flex flex-col items-center gap-2">
          <p className="text-gray-600 dark:text-gray-300">
            아래로 스크롤 하세요
          </p>
        </div>
      </section>
    </div>
  );
} 