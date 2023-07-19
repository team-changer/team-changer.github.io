---
title: Self-Hosted Runners
slug: /backend/github/self-hosted
last_update:
  date: 2023/07/20
  author: 허브
---

### Self-Hosted Runners

로컬 환경에서 GitHub Actions workflow를 실행할 수 있게 해주는 서비스

- [Self-Hosted Runners에 대한 자세한 정보 알아보기](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)

### Runner 생성

Repository → Settings → Actions → Runners → New self-hosted runner

### 인스턴스에 Runner 설정

**EC2 인스턴스 t4g.small Ubuntu 22.04 기준**

Runner Image: Linux  
Architecture: ARM 64  
Github 안내 문구를 통해 설치하고, 설정 부분의 경우 엔터만 계속 입력해도 설정이 완료된다.  

:::warning 설정 시 주의사항
중간에 내부 ip로 이름 설정이 자동화 되는 부분이 있다.  
이 부분은 직접 다른 이름으로 변경해야 한다. 
:::

### 실행

`nohup ./run.sh &` 을 이용하여 백그라운드 실행한다.  
Repository → Settings → Actions → Runners에 들어가면 Active된 Runner를 확인할 수 있다.

### 참고 자료

[누누의 Self Hosted Runner 로 EC2 에 CD 구축](https://be-student.tistory.com/75)  
[Self-Hosted Runners](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)  