export default function About() {
  const profile = {
    name: "이세민",
    age: 29,
    gender: "남성",
    location: "서울",
    education: "한국방송통신대학교 컴퓨터과학과",
    interests: ["웹 개발", "새로운 기술 학습", "문제 해결"],
    introduction: "안녕하세요. 풀스택 개발자를 꿈꾸는 이세민입니다. 새로운 기술을 배우는 것을 좋아하며, 문제 해결에 대한 열정이 있습니다."
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-20 snap-start">
      <div className="max-w-4xl w-full mx-auto p-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">About Me</h2>
        
        {/* 프로필 카드 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 기본 정보 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">기본 정보</h3>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">이름:</span> {profile.name}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">나이:</span> {profile.age}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">성별:</span> {profile.gender}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">지역:</span> {profile.location}
              </p>
            </div>

            {/* 학력 및 관심사 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">학력 및 관심사</h3>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">학력:</span> {profile.education}
              </p>
              <div>
                <span className="font-semibold text-gray-600 dark:text-gray-300">관심사:</span>
                <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                  {profile.interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 자기소개 */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">자기소개</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {profile.introduction}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 