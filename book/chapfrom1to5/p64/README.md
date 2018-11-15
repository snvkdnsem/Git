
.git                 깃의 로컬저장소
dist/                서버 JS의 배포파일 폴더
es6/                 서버 JS의 배포파일 폴더
public/dist/         브라우저 JS의 배포파일 폴더
public/es6           브라우저 JS의 소스코드 폴더
.gitignore           깃 관리 제외대상 설정파일
package.json         프로젝트 정보, 디펜던시 설정파일
README.md            프로젝트 설명파일

서버 JS: Node 사용하는 컴파일러가 컴파일해서 실행한다.
브라우저 JS : 브라우저 JS 컴파일러가 컴파일해서 실행한다.

es6 폴더에 있는 ES6 코드 == 트랜스파일링 ==> ES5로 바꾼다음 dist 폴더에 생성한다.

ES6 코드인 public/es6 == 트랜스파일링 ==> ES5 코드로 public/dist/

```
E:\git\work\p64>npm i --save-dev babel-preset-es2015
npm WARN deprecated babel-preset-es2015@6.24.1: 🙌  Thanks for using Babel: we recommend using babel-preset-env now: please read babeljs.io/env to update!
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN p64@1.0.0 No repository field.

+ babel-preset-es2015@6.24.1
added 66 packages in 6.483s
```

# package.json

npm install babel-preset-es2015 --save-devDependencies

npm install gulp [--save]

dependencies : 사용자에게 서비스할 때 필요한 기능
devDependencies : 개발자가 개발할 때 필요한 기능

책에는 언급이 없지만 다음 설치가 필요하다.
npm i --save-dev @babel/core

* JavaScipt 컴파일러가 하나가 아닙니다.
* 기술은 버전에 따라 설정이 바뀝니다.

package.json 디펜던시 버전을 수동으로 바꾼다음 다음 명령을 수행하면
다시 재 설치되거나 사용하지 않는 것이 삭제 됩니다.

npm install

Lesson Learned
책에서 사용한 디펜던시 버전과 달라서 재대로 작동하지 않았다.
버전관리는 매우 매우 중요하다.
