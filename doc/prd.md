# 포트폴리오 웹사이트 요구사항 명세서 (PRD)

## 1. 개요
포트폴리오 웹사이트는 개발자의 기술 스택과 프로젝트 경험을 효과적으로 보여주기 위한 웹 애플리케이션입니다.

## 2. 핵심 기능
- 스냅 스크롤링을 통한 섹션 단위 탐색
- 다크모드 지원
- 반응형 디자인
- 프로젝트 포트폴리오 갤러리
- 기술 스택 필터링 및 표시

## 3. 기술 스택
### Frontend
- Next.js 15.0.3
- React 19.0.0-rc (Canary)
- TypeScript 5.x
- Tailwind CSS 3.4.1
- @emailjs/browser 4.4.1

### 개발 도구
- ESLint 8.x
- PostCSS 8.x
- gh-pages 6.2.0
- tailwind-scrollbar 3.1.0
- TurboPack (Next.js dev 서버)

## 4. 페이지 구조 및 컴포넌트 설계

### 4.1 공통 컴포넌트
#### Navigation
```typescript
interface NavItem {
  id: string;
  name: string;
}
```
- 섹션 간 이동
- 다크모드 토글
- 현재 섹션 하이라이트
- 스크롤 위치 기반 활성 섹션 감지

### 4.2 메인 페이지 (/)
- 심플한 인트로 섹션
- 스크롤 안내 애니메이션
- 다크모드 대응 배경

### 4.3 Skills (/skills)
```typescript
interface Skill {
  name: string;
  icon: {
    type: 'svg' | 'emoji' | 'image';
    source: string;
  };
  categories: string[];
  description: string;
}
```
- 기능:
  - 카테고리 필터링 (전체/프론트엔드/백엔드/개발도구/기타)
  - SVG 아이콘 지원
  - 호버 시 스킬 설명 표시
  - 다크모드 대응 (아이콘 반전 등)

### 4.4 Portfolio (/portfolio)
```typescript
interface Project {
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
```
- 프로젝트 카드:
  - 썸네일 이미지
  - 프로젝트 제목
  - 운영 상태 배지
  - 기술 스택 태그
  - 호버 효과

- 상세 모달:
  - 이미지 갤러리 (스크롤 가능)
  - 프로젝트 설명
  - 개발 기간
  - GitHub/Live 링크
  - 기술 스택 상세
  - 운영 상태 표시

### 4.5 Contact (/contact)
```typescript
interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
```
- EmailJS 통합
- 폼 유효성 검사
- 전송 상태 피드백

## 5. 스타일링 및 UI/UX
### 다크모드
- 시스템 설정 감지
- 수동 토글 지원
- LocalStorage 상태 저장
- Tailwind 다크모드 클래스 활용

### 반응형 디자인
- 모바일: 1열 그리드
- 태블릿: 2열 그리드
- 데스크톱: 3-4열 그리드

### 애니메이션
- 스크롤 스냅
- 호버 효과
- 모달 전환
- 상태 배지 스타일링

## 6. 성능 최적화
- Next/Image 컴포넌트 활용
- 코드 스플리팅
- SVG 아이콘 최적화
- 스크롤 이벤트 쓰로틀링

## 7. 배포 및 유지보수
### GitHub Pages 배포
- gh-pages 패키지 활용
- 자동화된 배포 스크립트
- 정적 사이트 생성 (next export)

### 유지보수 계획
- 프로젝트 추가 용이성
- 기술 스택 업데이트 프로세스
- 다국어 지원 확장 가능성 