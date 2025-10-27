export interface Skill {
  name: string;
  icon: {
    type: 'svg' | 'emoji' | 'image';
    source: string;
  };
  categories: ('frontend' | 'backend' | 'tools' | 'etc')[];
  description?: string;
}

export const skillsData: Skill[] = [
    // 기본 웹 스킬
    {
      name: 'HTML',
      icon: { type: 'svg', source: '/portfolio/svg/html.svg' },
      categories: ['frontend'],
      description: '시맨틱 마크업을 활용한 웹 구조화'
    },
    {
      name: 'CSS',
      icon: { type: 'svg', source: '/portfolio/svg/css.svg' },
      categories: ['frontend'],
      description: '반응형 디자인 및 모던 CSS 활용'
    },
    {
      name: 'JavaScript',
      icon: { type: 'svg', source: '/portfolio/svg/javascript.svg' },
      categories: ['frontend', 'backend'],
      description: '모던 자바스크립트를 활용한 동적 기능 구현'
    },
    
    // Frontend 스킬
    {
      name: 'React.js',
      icon: { type: 'svg', source: '/portfolio/svg/react.svg' },
      categories: ['frontend'],
      description: 'React를 활용한 웹 애플리케이션 개발 경험'
    },
    {
      name: 'Next.js',
      icon: { type: 'svg', source: '/portfolio/svg/nextjs.svg' },
      categories: ['frontend'],
      description: 'Next.js를 이용한 SSR/CSR 웹 개발'
    },
    {
      name: 'TypeScript',
      icon: { type: 'svg', source: '/portfolio/svg/typescript.svg' },
      categories: ['frontend', 'backend'],
      description: 'TypeScript를 활용한 타입 안전성 확보'
    },

    // Backend 스킬
    {
      name: 'Node.js',
      icon: { type: 'svg', source: '/portfolio/svg/nodejs.svg' },
      categories: ['backend'],
      description: 'Node.js 기반 서버 개발 경험'
    },
    {
      name: 'Express',
      icon: { type: 'svg', source: '/portfolio/svg/express.svg' },
      categories: ['backend'],
      description: 'Express 프레임워크를 활용한 API 개발'
    },
    {
      name: 'MySQL',
      icon: { type: 'svg', source: '/portfolio/svg/mysql.svg' },
      categories: ['backend'],
      description: 'MySQL을 활용한 데이터베이스 설계 및 관리'
    },

    // 개발 도구
    {
      name: 'Git',
      icon: { type: 'svg', source: '/portfolio/svg/git.svg' },
      categories: ['tools'],
      description: 'Git을 활용한 버전 관리'
    },
    {
      name: 'Docker',
      icon: { type: 'svg', source: '/portfolio/svg/docker.svg' },
      categories: ['tools'],
      description: 'Docker를 이용한 컨테이너화'
    },

    // 기타
    {
      name: 'Notion',
      icon: { type: 'svg', source: '/portfolio/svg/notion.svg' },
      categories: ['etc'], 
      description: 'Notion을 활용한 문서화 및 협업'
    }
  ];

export interface Categories {
  id: string,
  name: string
}

export const categoriesData : Categories[] = [
    { id: 'all', name: '전체' },
    { id: 'frontend', name: '프론트엔드' },
    { id: 'backend', name: '백엔드' },
    { id: 'tools', name: '개발도구' },
    { id: 'etc', name: '기타' }
  ];