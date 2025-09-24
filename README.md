## 파일 구조

shopping-mall/
├── public/
│ ├── index.html
│ └── favicon.ico
├── src/
│ ├── main.tsx
│ ├── App.tsx
│ ├── index.css
│ │
│ ├── assets/ (이미지, 아이콘)
│ │ ├── images
│ │ │ ├── logo.png 로고 이미지
│ │ │ └── product-placeholder.jpg 상품 기본 이미지
│ │ └── icons 아이콘 모음
│ │
│ ├── components 재사용 가능한 UI 컴포넌트 모음
│ │ ├── layout 레이아웃 관련
│ │ │ ├── Header.tsx 상단 헤더
│ │ │ ├── Footer.tsx 하단 푸터
│ │ │ └── layout.tsx 헤더,푸터 레이아웃 합
│ │ │
│ │ ├── ui/ // 기본 UI 컴포넌트
│ │ │ ├── Button.tsx 버튼 컴포넌트
│ │ │ ├── Modal.tsx 모달 컴포넌트
│ │ │ └── Spinner.tsx 로딩 스피너
│ │ │
│ │ ├── product 상품 관련 UI
│ │ │ ├── ProductCard.tsx 상품 카드 (단일)
│ │ │ ├── ProductGrid.tsx 상품 그리드 (목록)
│ │ │ └── ProductFilters.tsx 필터/정렬 UI
│ │ │
│ │ ├── cart 장바구니 관련 UI
│ │ │ ├── CartDrawer.tsx 장바구니 사이드바
│ │ │ ├── CartItem.tsx 장바구니에 담긴 상품 아이템
│ │ │ └── CartSummary.tsx 합계/총액 요약
│ │ │
│ │ └── checkout 결제 관련 UI
│ │ ├── AddressForm.tsx 배송지 입력 폼
│ │ └── PaymentForm.tsx 결제 정보 입력 폼
│ │
│ ├── pages 실제 페이지 단위
│ │ ├── Home.tsx 메인 홈 화면
│ │ ├── Products.tsx 상품 목록 페이지
│ │ ├── ProductDetail.tsx 상품 상세 페이지
│ │ ├── CartPage.tsx 장바구니 페이지
│ │ ├── Checkout.tsx 결제 진행 페이지
│ │ ├── OrderConfirmation.tsx 주문 완료 확인 페이지
│ │ └── account 계정 관련 페이지
│ │ ├── Login.tsx 로그인
│ │ ├── Register.tsx 회원가입
│ │ └── Profile.tsx 마이페이지 (회원정보/주문내역 등)
│ │
│ ├── routes 라우팅 관련
│ │ ├── AppRoutes.tsx 전체 라우트 페이지
│ │ └── ProtectedRoute.tsx 인증 필요 페이지 보호
│ │
│ ├── context 전역 상태 관리 (Context API)
│ │ ├── CartContext.tsx 장바구니 상태 전역 관리
│ │ └── AuthContext.tsx 인증/로그인 상태 전역 관리
│ │
│ ├── hooks 커스텀 훅 모음
│ │ ├── useCart.ts 장바구니 관련 로직
│ │ ├── useFetch.ts 데이터 Fetching 커스텀 훅
│ │ └── useDebounce.ts 디바운스(검색 최적화 등) 훅
│ │
│ ├── services API 서비스 모듈
│ │ ├── api.ts axios 등 공통 API 설정
│ │ ├── products.ts 상품 API 호출
│ │ └── orders.ts 주문 API 호출
│ │
│ ├── store전역 상태 관리
│ │ ├── index.ts Redux store 설정
│ │ └── slices Redux slice들
│ │ ├── cartSlice.ts 장바구니 관련 slice
│ │ └── userSlice.ts 유저 관련 slice
│ │
│ ├── utils 유틸 함수
│ │ ├── formatCurrency.ts 가격 표시 포맷 함수
│ │ └── validators.ts 유효성 검사 함수
│ │
│ ├── constants 상수 관리
│ └── routes.ts 라우트 경로 상수
├── .env 환경변수 (API 키 등)
├── .gitignore Git 무시 파일
├── package.json 프로젝트 의존성/스크립트
├── tsconfig.json TypeScript 설정
├── tailwind.config.js Tailwind 설정
├── postcss.config.js PostCSS 설정
└── README.md 프로젝트 설명
