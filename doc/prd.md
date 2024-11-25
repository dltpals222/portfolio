# 포트폴리오 웹사이트 요구사항 명세서 (PRD)

## 1. 문서 정보
- 문서 버전: 1.1
- 작성일: 2024-11-17
- 프로젝트명: 개인 포트폴리오 웹사이트

## 2. 프로젝트 개요
### 2.1 프로젝트 설명
Next.js, TypeScript, TailwindCSS를 활용한 모던한 풀스택 개발자 포트폴리오 웹사이트 제작 프로젝트

### 2.2 목적 및 목표
- 목적:
  - 풀스택 개발자로서의 전문성과 기술력을 효과적으로 표현
  - 프론트엔드와 백엔드 모두에 대한 깊은 이해도 표현
  - 최신 웹 기술을 활용한 최적화된 사용자 경험 제공
- 목표:
  - TypeScript를 활용한 타입 안정성 확보
  - TailwindCSS를 활용한 일관된 디자인 시스템 구축
  - Next.js의 SSR/SSG 기능을 활용한 최적화
  - 백엔드 기술 스택 및 프로젝트 경험 강조

## 3. 기술 스택 상세
### 3.1 핵심 기술
- Frontend Framework: Next.js 14
  - App Router 사용
  - Server Components 활용
  - 이미지 최적화를 위한 Next/Image 사용
  
- 개발 언어: TypeScript
  - 엄격한 타입 체크 설정
  - 인터페이스 기반 컴포넌트 props 정의
  
- 스타일링: TailwindCSS
  - 커스텀 테마 설정
  - 반응형 디자인 클래스 활용
  - 다크모드 지원

### 3.2 개발 도구 및 환경
- Package Manager: npm/yarn
- 코드 품질 관리:
  - ESLint
  - Prettier
  - Husky (git hooks)
- 버전 관리: Git

## 4. 페이지 구조 및 컴포넌트 설계
### 4.1 메인 페이지 (/)
- 레이아웃: 심플하고 미니멀한 디자인
- 컴포넌트:
  - NavigationBar
  - IntroSection
    - 간단한 인사말
    - 이름
    - (선택) 직무 소개

### 4.2 About Me (/about)
- 데이터 구조:
```typescript
interface Profile {
  name: string;
  age: number;
  gender: string;
  location: string;
  education: string;
  interests: string[];
  introduction: string;
}
```
- 컴포넌트:
  - ProfileCard
    - 기본 정보 (나이, 성별 등)
    - 자기소개
  - DetailSection
    - 학력
    - 관심사
    - 기타 정보

### 4.3 Skill List (/skills)
- 데이터 구조:
```typescript
interface Skill {
  name: string;
  icon: {
    type: 'svg' | 'emoji' | 'image';
    source: string;
  };
  category: 'frontend' | 'backend' | 'tools' | 'etc';
  description?: string;
}
```
- 컴포넌트:
  - SkillGrid
    - 격자형 레이아웃
    - 반응형 그리드 시스템
  - SkillCard
    - 아이콘/이미지 표시
    - 기술명
    - 호버 시 상세 설명

### 4.4 Portfolio (/portfolio)
- 데이터 구조:
```typescript
interface Project {
  id: string;
  title: string;
  summary: string;  // 카드에 표시될 간단한 설명
  description: string;  // 모달에 표시될 상세 설명
  thumbnail: string;
  technologies: string[];
  images: string[];  // 프로젝트 상세 이미지들
  links: {
    github?: string;  // 선택적
    live?: string;    // 선택적
  };
  duration: {
    start: string;
    end: string;
  };
}
```
- 컴포넌트:
  - ProjectGrid
    - 반응형 카드 그리드
  - ProjectCard
    - 썸네일 이미지
    - 프로젝트 제목
    - 간단한 설명
    - 사용 기술 태그
  - ProjectModal
    - 상세 설명
    - 이미지 갤러리
    - 기술 스택 상세
    - GitHub/Live 링크

### 4.5 Contact Me (/contact)
- 데이터 구조:
```typescript
interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
```
- 컴포넌트:
  - ContactForm
    - 이름 입력
    - 이메일 입력
    - 제목 입력
    - 메시지 입력
    - 제출 버튼
  - ContactInfo
    - 이메일 주소
    - 기타 연락처 정보

## 5. 스타일링 가이드라인
### 5.1 TailwindCSS 설정
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // 커스텀 컬러
      },
      spacing: {
        // 커스텀 간격
      },
      fontSize: {
        // 커스텀 폰트 크기
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
```

### 5.2 반응형 브레이크포인트
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## 6. 성능 최적화 전략
### 6.1 Next.js 최적화
- 이미지 최적화
  - Next/Image 컴포넌트 사용
  - 자동 WebP 변환
  - 적절한 placeholder 설정

- 페이지 로딩 최적화
  - Static Site Generation (SSG) 활용
  - 동적 import를 통한 코드 스플리팅
  - 중요 스타일의 인라인 적용

### 6.2 성능 목표
- Lighthouse 점수
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 95+

## 7. 개발 단계 및 일정
### 7.1 초기 개발 (1-2주)
1. 프로젝트 설정
   - Next.js 설치 및 설정
   - TypeScript 설정
   - TailwindCSS 설정
2. 기본 레이아웃 구현
3. 페이지 라우팅 설정

### 7.2 주요 기능 개발 (2-3주)
1. 각 섹션 컴포넌트 개발
2. 반응형 디자인 구현
3. 다크모드 구현

### 7.3 최종 개발 (1-2주)
1. 성능 최적화
2. 애니메이션 추가
3. 콘텐츠 입력
4. 테스트 및 디버깅