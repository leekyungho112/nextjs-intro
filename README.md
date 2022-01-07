# NEXT.js Basic

### stack

<div align="center">
<img src="https://img.shields.io/badge/Next-000000?style=for-the-badge&logo=Next.js&logoColor=#000000">
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
</div>

---

### Library vs Framework

- Library는 미리 작성된 코드, 변수 ,함수, 클래스등이 포함되어 개발자가 개발하는데 필요한 도구의 집합을 호출하여 사용하는 방식을 취한다.

- Framework는 정해진 규칙이나 틀 안에서의 규약을 지키며 개발자가 그 안에 코드를 작성하는 방식이다.

- 차이점으로는 흐름에 대한 제어 권한이 누가 지니고 있는가의 차이이다. 프레임워크는 전체적인 흐름을 자체적으로 가지고 있는 반면 라이브러리는 사용자가 흐음에 대해 제어를 하며 필요한 상황에 가져다 쓴다.

### pages

- pages 안에 파일명(ex:about.js) 파일명이 url에 경로가 된다. 예외사항으로 index.js는 홈의 역할을 하게된다 https://localhost:3000/
- pages의 component의 함수명은 상관이 없지만 export default 규칙을 지켜야 한다.

### static pre rendering

- next.js 의 좋은점은 static pre rendering을 통해 자바스크립트의 다운 전에 html 파일을 보여줄수 있다. 반면에 react의 CSR의 방식은 브라우저가 빈 html태그를 가져오기에 그 후에 브라우저가 모든 자바스크립트를 요청하고 브라우저가 이를 실행후에 UI를 그릴수 있게 된다. 떄문에 환경이 느린 인터넷 환경일때 비어있는 흰 화면을 보게 된다.

### routing

- a 태그의 href를 이용하면 페이지 새로고침이 일어나게 된다. link를 사용하여 navigation을 구성할수 있다.

### css module

- css module을 통해서 다른 파일에서 중복된 클래스명을 갖는것이 가능해진다.

```js
 <a className={router.pathname === '/about' ? styles.active : ''}>
```

- 한태그안에 두개의 혹은 그 이상의 className을 가질경우

```js
 <a className={[router.pathname === '/about' ? styles.active : ''].join('')}>

  <a className={`${styles.link} ${router.pathname === '/about' ? styles.active : ''}`}>
```
