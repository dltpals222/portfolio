import Image from 'next/image';

export default function About() {
  const profile = {
    name: "이세민",
    birth: "1992.07",
    phone: "010-7465-8497",
    location: "대전광역시",
    education: "4년제 대학교 졸업",
    github: "https://github.com/dltpals222",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-20 snap-start">
      <div className="max-w-4xl w-full mx-auto p-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">About Me</h2>
        
        {/* 프로필 카드 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* 프로필 이미지 */}
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg flex-shrink-0 mx-auto md:mx-0">
              <Image 
                src="/images/about_me.jpg" 
                alt="Profile"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 프로필 정보 */}
            <div className="flex-grow w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <p className="text-gray-600 dark:text-gray-300 flex items-center gap-3">
                  <Image 
                    src="/svg/person_fill_icon_159457.svg" 
                    alt="User"
                    width={32}
                    height={32}
                    className="dark:invert"
                  />
                  <span className="flex flex-col">
                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400">이름</span>
                    <span className="text-lg">{profile.name}</span>
                  </span>
                </p>
                <p className="text-gray-600 dark:text-gray-300 flex items-center gap-3">
                  <Image 
                    src="/svg/geo_fill_icon_159513.svg" 
                    alt="Location"
                    width={32}
                    height={32}
                    className="dark:invert"
                  />
                  <span className="flex flex-col">
                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400">지역</span>
                    <span className="text-lg">{profile.location}</span>
                  </span>
                </p>
                <p className="text-gray-600 dark:text-gray-300 flex items-center gap-3">
                  <Image 
                    src="/svg/calendar-weekly_icon-icons.com_56832.svg" 
                    alt="Birth"
                    width={32}
                    height={32}
                    className="dark:invert"
                  />
                  <span className="flex flex-col">
                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400">생년월</span>
                    <span className="text-lg">{profile.birth}</span>
                  </span>
                </p>
                <p className="text-gray-600 dark:text-gray-300 flex items-center gap-3">
                  <Image 
                    src="/svg/social_college_education_graduation_cap_hat_university_icon_133176.svg" 
                    alt="Education"
                    width={32}
                    height={32}
                    className="dark:invert"
                  />
                  <span className="flex flex-col">
                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400">학력</span>
                    <span className="text-lg break-keep">{profile.education}</span>
                  </span>
                </p>
                <p className="text-gray-600 dark:text-gray-300 flex items-center gap-3">
                  <Image 
                    src="/svg/mobilephone_79875.svg" 
                    alt="Phone"
                    width={32}
                    height={32}
                    className="dark:invert"
                  />
                  <span className="flex flex-col">
                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400">연락처</span>
                    <span className="text-lg">{profile.phone}</span>
                  </span>
                </p>
                <p className="text-gray-600 dark:text-gray-300 flex items-center gap-3">
                  <Image 
                    src="/svg/github-logo_icon-icons.com_73546.svg" 
                    alt="GitHub"
                    width={32}
                    height={32}
                    className="dark:invert"
                  />
                  <span className="flex flex-col">
                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400">GitHub</span>
                    <a 
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {profile.github.replace('https://', '')}
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 