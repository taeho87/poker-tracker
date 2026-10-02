# Poker Ledger — 홀덤 토너먼트 기록 앱

날짜·바이인 금액·바이인 횟수·머니인 금액·순위·메모를 기록하는 앱입니다.
블랙 계열 UI, 별도 입력 페이지, 기록 수정·삭제, 기간별 누적 정산과 수익 그래프를 포함합니다.

## GitHub에 올리기
1. 이 ZIP을 압축 해제합니다.
2. GitHub에서 새 저장소를 만듭니다.
3. `Add file` → `Upload files`에서 압축을 푼 폴더 **안의 파일과 폴더**를 업로드합니다.
4. `Commit changes`를 누릅니다. ZIP 파일만 올리면 소스가 자동으로 풀리지 않습니다.
5. `.openai/hosting.json`도 필요합니다. Windows에서 숨김 항목 표시를 켜거나 Git으로 업로드하면 빠짐없이 올릴 수 있습니다.

Git 명령으로 업로드할 경우, 압축 해제한 폴더에서:
```sh
git init
git add .
git commit -m "Initial Poker Ledger app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```
주소의 사용자명과 저장소명을 본인 것으로 바꿉니다.

## 실행 환경
- Node.js 22.13.0 이상
- React / Vinext / Cloudflare Workers / D1 데이터베이스
- 의존성 설치: `npx pnpm@11.25.0 install --frozen-lockfile`
- 개발 실행: `npx pnpm@11.25.0 dev`
- 빌드: `npx pnpm@11.25.0 build`

D1에는 `drizzle/`의 SQL 마이그레이션을 적용해야 합니다. 로컬 D1 구성에 따라 마이그레이션을 먼저 적용한 뒤 기록 저장을 사용하세요.

## 배포와 저장
이 파일은 **소스 코드**입니다. GitHub에 올리는 것만으로 앱이 배포되지는 않습니다.
기록 저장 API는 Cloudflare Workers와 D1을 사용하므로 **GitHub Pages 단독으로는 저장 기능이 동작하지 않습니다**.
현재 앱은 ChatGPT Sites에 배포되어 있습니다. `.openai/hosting.json`은 그 앱의 연결 설정입니다.
다른 서비스에 독립 배포하려면 Worker 배포 설정과 본인 D1 데이터베이스 연결이 필요합니다.
기존 서비스의 실제 기록 데이터는 ZIP에 포함되지 않습니다.

## 수익 계산
총 바이인 비용 = 바이인 금액 × 횟수 (기존 기록의 추가 비용은 보존)
가게 몫 = max(머니인 − 총 바이인 비용, 0) × 60% (원 단위 내림)
내 수령액 = 머니인 − 가게 몫
내 순수익 = 내 수령액 − 총 바이인 비용
예: 바이인 10만원, 머니인 50만원 → 가게 24만원, 내 수령액 26만원, 내 순수익 16만원.

최신 화면에는 참가 인원·추가 비용·대회명·장소 입력란과 중간 배분 안내 문구가 없습니다.

## 포함 파일
앱 코드, UI 구성요소, DB 스키마·마이그레이션, 의존성 잠금 파일, 빌드 설정을 포함합니다.
node_modules, 빌드 결과, Git 이력, 로컬 데이터, 인증 토큰은 포함하지 않습니다.
원본 런타임 설명은 README-runtime.md를 참고하세요.
