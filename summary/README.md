# Mark-down
여러 문서작성 프로그램의 저장방식의 차이로 공유가 안되는 점을 극복하기 위해서 만들어진 문서저장 포맷 표준방식

* 현재 설명서로 많이 사용되고 있습니다.
* HTML 태그를 사용할 수 있습니다.

# 1. 로컬저장소를 생성
--------------------
```
E:\git\work\web>git init
Initialized empty Git repository in E:/git/work/web/.git/
```

# 2. 처리상태를 조회
--------------------
```
E:\git\work\web>git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        index.html

nothing added to commit but untracked files present (use "git add" to track)
```

깃의 영역 3가지
--------------------
워킹 디렉토리 ==> 인덱스(stage) ==> 로컬저장소
<br>
소스코드 ==> 등록된 백업대상 ==> 백업정보를 갖고 있는 폴더

# 3. 인덱스의 백업대상을 등록
------------------------------
```
E:\git\work\web>git add index.html

E:\git\work\web>git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   index.html
```

# 4. 인덱스에 등록된 대상파일들을 로컬저장소에 커밋(백업)
------------------------------------------------
```
E:\git\work\web>git commit -m "first commit"
[master (root-commit) 424fbf0] first commit
 1 file changed, 15 insertions(+)
 create mode 100644 index.html
```

* nothing to commit : 인덱스 == 로컬저장소
* working tree clean : 워킹 디렉토리 == 로컬저장소
* 커밋을 수행하여 백업한 상태와 현재 프로젝트 파일들의 상태가 일치합니다.

환경변수에 커밋 작업자정보 등록하기(cmd에 작성)
---------------------------------
```
git config --global user.name "JH"
git config --global user.email "abcdefg@naver.com"
```

환경변수 정보 조회하기
---------------------
```
git config --list
```

커밋 정보 조회하기
-----------------
```
E:\git\work\web>git log
commit 424fbf0ba1034a0ce5c59715499c502df7a83dcc (HEAD -> master)
Author: Jong Hwan <snvkdnsem@naver.com>
Date:   Mon Sep 3 14:16:53 2018 +0900

    first commit
```
index.html 파일을 삭제해 보자

삭제된 파일 정보 조회하기
------------------------
```
E:\git\work\web>git ls-files -d
index.html
```

삭제된 파일 복구하기
-------------------
```
E:\git\work\web>git checkout index.html
```
