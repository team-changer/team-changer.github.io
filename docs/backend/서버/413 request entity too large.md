---
title: 413 request entity too large
slug: /backend/server/413
last_update:
  date: 2023/08/05
  author: 허브
---

nginx의 기본 파일 업로드 용량은 1MB이다.  
따라서 더 큰 용량의 파일을 업로드 하고 싶다면 nginx에 다음과 같은 설정을 추가해야 한다.  

```
client_max_body_size 20M;
```

설정 후 `nginx -s relaod`로 적용하자.