

git commit --amend

[vi editor]
commend mode ==> editor mod ==> commend mode ==> last line mode

i >> 커밋 메시지 편집 >> esc >> : >> wq! + enter

E:\git\work\git-page>git add .

E:\git\work\git-page>git commit -m "B"
[master 0a10df5] B
 1 file changed, 2 insertions(+), 1 deletion(-)

 E:\git\work\git-page>git log
 commit 0a10df5b20f4f0f3778624682398ecefdaa98588 (HEAD -> master)
 Author: JH <abcdefg@naver.com>
 Date:   Tue Sep 4 12:02:14 2018 +0900

     B

 commit 4d0fe189367c76892025ff20b62665bd5fa5049f
 Author: JH <abcdefg@naver.com>
 Date:   Tue Sep 4 11:47:12 2018 +0900

     A

 E:\git\work\git-page>git branch bugfix

 E:\git\work\git-page>git checkout bugfix
 Switched to branch 'bugfix'

 E:\git\work\git-page>git branch
 * bugfix
   master

 E:\git\work\git-page>git add .

 E:\git\work\git-page>git commit -m "X"
 [bugfix ea31a15] X
  1 file changed, 1 insertion(+)

 E:\git\work\git-page>git add .

 E:\git\work\git-page>git commit -m "Y"
 [bugfix e60c3c7] Y
  1 file changed, 7 insertions(+)

 E:\git\work\git-page>git log --pretty=oneline
 e60c3c7c1ed9f7bd876419369ec49c5a3722b347 (HEAD -> bugfix) Y
 ea31a15af35bccfe510a3e5c93641f4d3877bec4 X
 0a10df5b20f4f0f3778624682398ecefdaa98588 (master) B
 4d0fe189367c76892025ff20b62665bd5fa5049f A

 E:\git\work\git-page>git branch
 * bugfix
   master

 E:\git\work\git-page>git checkout master
 Switched to branch 'master'

 E:\git\work\git-page>git branch
   bugfix
 * master

 E:\git\work\git-page>git add .

 E:\git\work\git-page>git commit -m "C"
 [master 05bd494] C
  1 file changed, 6 insertions(+)

 E:\git\work\git-page>gitk

 E:\git\work\git-page>git log --pretty=oneline
 05bd49481019225c9220a1ef6683b6595d55e567 (HEAD -> master) C
 0a10df5b20f4f0f3778624682398ecefdaa98588 B
 4d0fe189367c76892025ff20b62665bd5fa5049f A

 E:\git\work\git-page>git add .

 E:\git\work\git-page>git commit -m "D"
 [master a184679] D
  1 file changed, 1 insertion(+)

 E:\git\work\git-page>git log --pretty=oneline
 a1846799c4afa40e7af9d3a26ceb27b944d7e0d6 (HEAD -> master) D
 05bd49481019225c9220a1ef6683b6595d55e567 C
 0a10df5b20f4f0f3778624682398ecefdaa98588 B
 4d0fe189367c76892025ff20b62665bd5fa5049f A

 E:\git\work\git-page>git branch
   bugfix
 * master

 E:\git\work\git-page>git merge bugfix
 Auto-merging index.html
 Merge made by the 'recursive' strategy.
  index.html | 8 ++++++++
  1 file changed, 8 insertions(+)

 E:\git\work\git-page>git log --pretty=oneline
 f09822ed99e62fb2f991cb4b50105f9412a54d74 (HEAD -> master) Merge branch 'bugfix'
 a1846799c4afa40e7af9d3a26ceb27b944d7e0d6 D
 05bd49481019225c9220a1ef6683b6595d55e567 C
 e60c3c7c1ed9f7bd876419369ec49c5a3722b347 (bugfix) Y
 ea31a15af35bccfe510a3e5c93641f4d3877bec4 X
 0a10df5b20f4f0f3778624682398ecefdaa98588 B
 4d0fe189367c76892025ff20b62665bd5fa5049f A
