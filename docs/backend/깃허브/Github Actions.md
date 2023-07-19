---
title: Github Actions
slug: /backend/github/actions
last_update:
  date: 2023/07/20
  author: 허브
---

### GitHub Actions

GitHub에서 제공하는 서비스로, 빌드, 테스트, 배포 파이프라인을 자동화할 수 있는 CI/CD 플랫폼이다.  
YAML 포맷을 사용하며, 이미 구현된 Actions를 재활용하여 간단하게 CI/CD 플로우를 작성할 수 있다.  

### workflow

작업의 흐름으로 빌드, 테스트와 같은 실행 과정에 대한 설정을 포함한다.  
`.github/workflows` 아래 파일을 만들어야 하고 확장자는 `yml` 이어야 한다.

### 현재 CI workflows 예시로 간단 설명

```yml
name: BACKEND-DEV-CI                  # workflow 제목

on:                                   # workflow를 수행하는 이벤트 지정
  pull_request:                       # PR시 동작
    branches:
      - develop-backend               # 브랜치를 이벤트 트리거로 지정
    paths:
      - 'backend/**'                  # 변경된 파일 경로를 이벤트 트리거로 지정

permissions:                          # 권한 설정 & EnricoMi/publish-unit-test-result-action@v2의 요구사항
  pull-requests: write
  checks: write

jobs:
  build:
    runs-on: ubuntu-latest            # 실행될 머신의 타입, self-hosted의 경우 self-hosted로 설정해야 한다.
    env:                              # 환경변수 설정
      working-directory: ./backend

    steps:
      - name: 체크아웃
        uses: actions/checkout@v3

      - name: JDK 17 설정
        uses: actions/setup-java@v3
        with:
          java-version: '17'
          distribution: 'corretto'

      - name: 권한 부여
        run: chmod +x gradlew
        working-directory: ${{ env.working-directory }} # 해당 명령어가 실행될 working-directory 설정

      - name: 빌드 수행
        run: ./gradlew build
        working-directory: ${{ env.working-directory }}

      - name: 테스트 결과 코멘트 등록
        uses: EnricoMi/publish-unit-test-result-action@v2
        if: always()
        with:
          files: '**/build/test-results/test/TEST-*.xml'

      - name: 테스트 실패 시, 실패한 코드 라인 코멘트 등록
        uses: mikepenz/action-junit-report@v3
        if: always()
        with:
          report_paths: '**/build/test-results/test/TEST-*.xml'
          token: ${{ github.token }}

      - name: 슬랙 알림 발송
        uses: 8398a7/action-slack@v3
        if: always()
        with:
          status: ${{ job.status }}
          fields: repo,message,commit,author,action,eventName,ref,workflow
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
```

### 참고 자료

[헤나의 깃허브 액션(GitHub Actions)을 이용해서 지속적 통합(CI)할 때의 흐름 알아보기](https://programming-hyena.tistory.com/86)  
[워크서버개발팀의 GitHub Actions 적용기](https://tech.kakaoenterprise.com/180)  
[Github Action 워크플로 구문](https://docs.github.com/ko/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idif)  