export default function ProfileSection() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold font-geist-sans">풀스택 개발자를 향해</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          프론트엔드 개발을 시작으로 백엔드까지 아우르는 개발자로 성장하고 있습니다.
          사용자 경험과 서버 성능 모두를 고려한 최적화된 웹 서비스를 만들기 위해 노력합니다.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold font-geist-sans">주요 관심사</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>웹 애플리케이션 아키텍처 설계</li>
            <li>서버리스 및 클라우드 인프라</li>
            <li>성능 최적화 및 사용자 경험</li>
            <li>마이크로서비스 아키텍처</li>
          </ul>
        </div>
      </div>
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        {/* 프로필 이미지 추가 예정 */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
      </div>
    </section>
  )
} 