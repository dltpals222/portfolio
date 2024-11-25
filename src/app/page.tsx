import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center p-4">
      {/* 벚꽃 배경 */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/images/Home-bg.jpg')" }}
      />
      
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 -z-10 bg-white/50 dark:bg-black/50" />
      
      {/* 컨텐츠 */}
      <section className="max-w-2xl rounded-xl bg-white/50 dark:bg-[#0D1117]/50 p-8 backdrop-blur-sm">
        <h1 className="mb-6 text-6xl font-bold text-center text-gray-800 dark:text-[#58A6FF]">안녕하세요</h1>
        <h2 className="mb-10 text-4xl text-center text-gray-700 dark:text-gray-200">풀스택 개발자 이세민 입니다</h2>
        <p className="text-2xl text-gray-600 dark:text-gray-300 text-center">
          웹 개발에 대한 열정과 경험을 공유합니다
        </p>
        
        {/* 다음 페이지 버튼 */}
        <div className="mt-12 text-center">
          <Link 
            href="/about"
            className="inline-block rounded-lg bg-[#2563EB] px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-[#1D4ED8] dark:bg-[#58A6FF] dark:hover:bg-[#3B82F6]"
          >
            더 알아보기 👆
          </Link>
        </div>
      </section>
    </div>
  );
}
