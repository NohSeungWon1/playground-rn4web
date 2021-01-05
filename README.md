- 초기 셋팅
1. npx create
2. cd folder
3. npm install react-native-web

- 테스트 셋팅 
1. npm install redux
2. npm install react-redux
3. npm install --save-dev @testing-library/react-native
4. npm install --save-dev react-test-renderer

- 테스트 조건

1. component 렌더링 테스트 
  - 원하는 텍스트가 출력되는가
  - 텍스트가 변경되는가

2. Redux 테스트 
  - reducer 사용 (action을 사용해 reducer를 사용하기 때문에 action 테스트는 두지 않음)
  - reducer를 사용해 state를 불러올 수 있는가
  - 원하는 값으로 state를 변경 가능한가
