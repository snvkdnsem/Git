E:\git\work\test-branch>git branch --all
* master

E:\git\work\test-branch>git branch another

E:\git\work\test-branch>git branch --all
  another
* master

E:\git\work\test-branch>git checkout another
Switched to branch 'another'

E:\git\work\test-branch>git branch --all
* another
  master

README.md 수정한다.

  E:\git\work\test-branch>git status
  On branch another
  Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)

          modified:   README.md

  no changes added to commit (use "git add" and/or "git commit -a")

  E:\git\work\test-branch>git add README.md

  E:\git\work\test-branch>git commit -m "second commit on another"
  [another 7461a4f] second commit on another
   1 file changed, 1 insertion(+)

   E:\git\work\test-branch>git log
   commit 7461a4f0308b5f657b8c077e1ee70fcff48c6f48 (HEAD -> another)
   Author: JH <abcdefg@naver.com>
   Date:   Tue Sep 4 10:28:49 2018 +0900

       second commit on another

   commit 5493c0d6fe384f5caa65aaaf8374b033e9dd5e9d (master)
   Author: JH <abcdefg@naver.com>
   Date:   Tue Sep 4 10:18:31 2018 +0900

       first commit
