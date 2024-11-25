export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center p-4">
      {/* 벚꽃 배경 */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/images/cherry-blossom-bg.jpg')" }}
      />
      
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 -z-10 bg-white/50 dark:bg-black/50" />
      
      {/* 컨텐츠 */}
      <section className="max-w-2xl rounded-xl bg-white/80 dark:bg-black/80 p-8 backdrop-blur-sm">
        <h1 className="mb-6 text-6xl font-bold">안녕하세요</h1>
        <h2 className="mb-10 text-4xl">풀스택 개발자 [이름]입니다</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          웹 개발에 대한 열정과 경험을 공유합니다
        </p>
      </section>
    </div>
  );
}
