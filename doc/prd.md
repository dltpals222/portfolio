# 포트폴리오 웹사이트 요구사항 명세서 (PRD)

// ... (이전 섹션 1, 2, 3 유지) ...

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

// ... (이후 섹션 5, 6, 7 유지) ... 