export interface Project {
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
  status: 'active' | 'inactive' | 'development';
}


export const projectsData: Project[] = [
    {
      id: 'project-1',
      title: '포트폴리오 웹사이트',
      summary: 'Next.js와 TypeScript를 활용한 개인 포트폴리오 웹사이트',
      description: '개인 포트폴리오를 위한 웹사이트입니다. Next.js 14와 TypeScript를 사용하여 개발했으며, 다크모드와 반응형 디자인을 지원합니다.',
      thumbnail: '/portfolio/images/portfolio/portfolio-1.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      images: [
        '/portfolio/images/portfolio/portfolio-1.png',
        '/portfolio/images/portfolio/portfolio-2.png',
        '/portfolio/images/portfolio/portfolio-3.png',
        '/portfolio/images/portfolio/portfolio-4.png',
      ],
      links: {
        github: 'https://github.com/dltpals222/portfolio',
        live: 'https://dltpals222.github.io/portfolio/'
      },
      duration: {
        start: '2024.11',
        end: '2024.12'
      },
      status: 'active'
    },
    {
      "id": "hex-colors-app",
      "title": "HEX Color Palette Manager",
      "summary": "SQLite 기반의 컬러 팔레트 관리 및 미리보기 웹 애플리케이션",
      "description": "HEX 컬러 코드를 실시간으로 미리보고, 팔레트를 저장/관리할 수 있는 웹 애플리케이션입니다. \nGoogle OAuth 인증, 자동 백업 시스템, 보안 시스템, 실시간 모니터링 등의 기능을 제공합니다. \nlocalStorage와 SQLite 데이터베이스 간 자동 마이그레이션을 지원하며, 비회원/회원 모두 사용 가능합니다.",
      "thumbnail": "/portfolio/images/hex-color/hex-01.jpg",
      "technologies": ["Node.js", "Express", "SQLite", "HTML", "CSS", "JavaScript", "Google OAuth", "JWT", "Docker", "Fly.io", "Helmet.js"],
      "images": [
        "/portfolio/images/hex-color/hex-01.jpg",
        "/portfolio/images/hex-color/hex-02.jpg",
        "/portfolio/images/hex-color/hex-03.jpg",
        "/portfolio/images/hex-color/hex-04.jpg",
        "/portfolio/images/hex-color/hex-05.jpg"
      ],
      "links": {
        "live": "https://hex-color.glady-olus.com/"
      },
      "duration": {
        "start": "2025-09-16",
        "end": "2025-10-24"
      },
      "status": "active"
    },
    // 더 많은 프로젝트를 추가할 수 있습니다
    // {
    //   id: '',
    //   title: '',
    //   summary: '',
    //   description: '',
    //   thumbnail: '',
    //   technologies: [''],
    //   images: [
    //     '',
    //     '',
    //     '',
    //     '',
    //   ],
    //   links: {
    //     github: '',
    //     live: ''
    //   },
    //   duration: {
    //     start: '',
    //     end: ''
    //   },
    //   status:''
    // }
  ];