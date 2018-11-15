# Github 연동하기

Github 회원가입
---------------
https://github.com

```
…or create a new repository on the command line

echo "# web" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/snvkdnsem/web.git
git push -u origin master
```

로컬 컴퓨터 환경변수 설정대로 등록하세요.

새 원격 저장소 만들기
--------------------
New repository >> Repository Name 작성 >> Create Repository
버튼클릭

원경 저장소와 연결작업 수행하기
-----------------------------

* git remote add 별칭 원경저장소 URL
* git push -u 원격저장소URL 브렌치
로컬 저장소의 작업브랜치의 커밋 내역을 원격저장소의 브랜치에 업로드합니다. 
