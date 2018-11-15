E:\git\work>mkdir test-merge && cd test-merge

E:\git\work\test-merge>git init
Initialized empty Git repository in E:/git/work/test-merge/.git/

E:\git\work\test-merge>echo "">>test.js

console.log("111");

E:\git\work\test-merge>git add .

E:\git\work\test-merge>git commit -m "A"
[master (root-commit) 895bfce] A
 1 file changed, 1 insertion(+)
 create mode 100644 test.js

console.log("222");

 E:\git\work\test-merge>git add .

 E:\git\work\test-merge>git commit -m "B"
 [master 19195a1] B
  1 file changed, 1 insertion(+)

  E:\git\work\test-merge>git branch bugfix

  E:\git\work\test-merge>git checkout bugfix
  Switched to branch 'bugfix'

  E:\git\work\test-merge>git branch
  * bugfix
    master

console.log("333");

  E:\git\work\test-merge>git add .

  E:\git\work\test-merge>git commit -m "X"
  [bugfix 81f3318] X
   1 file changed, 1 insertion(+)

console.log("444");

E:\git\work\test-merge>git add .

E:\git\work\test-merge>git commit -m "Y"
[bugfix 66fdc38] Y
 1 file changed, 1 insertion(+)

 *****************************************

 E:\git\work\test-merge>git branch
* bugfix
  master

E:\git\work\test-merge>git checkout master
Switched to branch 'master'

E:\git\work\test-merge>git branch
  bugfix
* master

******************************************

bugfix 개발이 완료되어 더 이상 해당 브랜치가 필요없다.
bugfix 브랜치의 코드를 master 브랜치와 통합하고자 합니다.

E:\git\work\test-merge>git merge bugfix
Updating 19195a1..66fdc38
Fast-forward
 test.js | 2 ++
 1 file changed, 2 insertions(+)


 E:\git\work\test-merge>git log
 commit 66fdc38609cf2bd2d4a99faa4c4b47b2ad41628e (HEAD -> master, bugfix)
 Author: JH <abcdefg@naver.com>
 Date:   Tue Sep 4 11:11:47 2018 +0900

     Y

 commit 81f3318a9e40a9d9fee4e0f33009261e4daa8094
 Author: JH <abcdefg@naver.com>
 Date:   Tue Sep 4 11:07:43 2018 +0900

     X

 commit 19195a17786d562a383e81004c91aad7c5823235
 Author: JH <abcdefg@naver.com>
 Date:   Tue Sep 4 11:03:37 2018 +0900

     B

 commit 895bfce35c76ad2283932e2cef779412dd632b1c
 Author: JH <abcdefg@naver.com>
 Date:   Tue Sep 4 11:02:07 2018 +0900

     A

E:\git\work\test-merge>gitk
