# 개요
모든 웹 경험에서 중요한 공통 집합인 ‘Core Web Vitals’가 있습니다.이러한 핵심 사용자 경험 요구사항에는 로딩 경험, 상호 작용, 페이지 콘텐츠의 시각적 안정성이 포함되며, 이들이 결합되어 2020 Core Web Vitals의 기초를 이룹니다.

## 주요개념 세가지

LCP, FID, CLS

* Largest Contentful Paint는 인식되는 로드 속도를 측정하는 항목으로, 페이지의 주요 콘텐츠가 로드되었을 가능성이 높은 시점에 페이지 로드 타임라인에 점을 표시합니다.
* First Input Delay는 응답성을 측정하는 항목으로, 사용자가 페이지와 처음 상호 작용하려고 할 때 느끼는 경험을 정량화합니다.
* Cumulative Layout Shift는 시각적 안정성을 측정하는 항목으로, 눈에 보이는 페이지 콘텐츠의 예기치 않은 레이아웃 변화량을 정량화합니다.

### 사용법

1. import web-vitls
  ```javascript
  const reportWebVitals = onPerfEntry => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      });
    }
  };

  export default reportWebVitals;
  ```

2. 측정하는 곳에 사용

  크롬 개발자 도구에 객체 형태로 측정 값이 추출되는 것을 확인 할 수 있다.

  app.tsx
  ```javascript
  import webVitals from './condition-check/webVitals';
  webVitals(console.log);
  ```

### 효용성
아직 레퍼런스나 한글 등의 자료가 나온 것이 없고 코어를 측정해주긴 하지만 ui 적으로도 불편하다.
lightHouse를 내부적으로 사용하는 것 같은데, 
전반적인 webPerformace를 측정하려면 lightHouse를 사용하는 것이 지금은 더 효율적이지 않을까 생각한다.