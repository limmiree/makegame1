// Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹)에서 복사한 값으로 바꿔 넣으세요.
// databaseURL은 Realtime Database 화면 위쪽에 보이는 주소예요.
export const firebaseConfig = {
  apiKey: "여기에-apiKey",
  authDomain: "프로젝트ID.firebaseapp.com",
  databaseURL: "https://프로젝트ID-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "프로젝트ID",
  storageBucket: "프로젝트ID.appspot.com",
  messagingSenderId: "",
  appId: ""
};

// AI 문제 검사용 App Check 키 (reCAPTCHA Enterprise 사이트 키). 설정 안내 7단계 참고.
export const appCheckSiteKey = "";

// 문제 검사에 쓸 Gemini 모델 이름. Firebase AI Logic이 지원하는 모델로 바꿀 수 있어요.
export const aiModel = "gemini-3.5-flash";
