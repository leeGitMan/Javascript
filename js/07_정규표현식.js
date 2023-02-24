// 정규 표현식 객체 생성 및 확인하기

document.getElementById("check1").addEventListener("click", function(){

    // 정규 표현식 객체 생성

    const regEx1 = new RegExp("script");
    // "script"와 일치하는 문자열이 있는지 검사하는 정규식 객체

    const regEx2 = /java/;
    // "java"와 일치하는 문자열이 있는지 검사하는 정규식 객체

    const str1 = "저희는 지금 javascript 공부를 하고 있습니다.";

    const str2 = "java, db, html, css, js를 사용 중 입니다.";

    const str3 = "aaaaaaaaaaaaaaaaaaaaaajava, java, java, jaaaaaaaavaaaaaaa";


    // 확인하기

    console.log("regEx1.test(str1) : " + regEx1.test(str1));
    console.log("regEx1.test(str1) : " + regEx1.exec(str1));

    console.log("regEx1.test(str1) : " + regEx1.exec(str2));
    console.log("regEx1.test(str1) : " + regEx1.exec(str2));

    console.log("regEx1.test(str1) : " + regEx1.exec(str3));
    console.log("regEx1.test(str1) : " + regEx1.exec(str3));

    console.log("regEx1.test(str1) : " + regEx2.test(str1));
    console.log("regEx1.test(str1) : " + regEx2.exec(str1));

    console.log("regEx1.test(str1) : " + regEx2.exec(str2));
    console.log("regEx1.test(str1) : " + regEx2.exec(str2));

    console.log("regEx1.test(str1) : " + regEx2.exec(str3));
    console.log("regEx1.test(str1) : " + regEx2.exec(str3));

    console.log(regEx2.exec(str3));
})



document.getElementById("check2").addEventListener("click", function(){

    // 결과 출력용 div

    const div1 = document.getElementById("div1");

   div1.innerHTML ="";

   const regEx1 = /[abcd]/;


   div1.innerHTML += "/[abcd]/ , apple : " + regEx1.test("apple") + "<hr>";
   div1.innerHTML += "/[abcd]/ , kitty : " + regEx1.test("kitty") + "<hr>";
   

    //  ^(캐럿) : 문자열의 시작을 의미

    const regEx2 = /^group/;
    div1.innerHTML += "/^group/ , group100 : " + regEx2.test("group100") + "<hr>";
    div1.innerHTML += "/^group/ , 100group : " + regEx2.test("100group") + "<hr>";
   
    // ^[abcd] : 문자열이 a,b,c,d 중 하나로 시작하는지 검색
    const regEx3 = /^[abcd]/;
    div1.innerHTML += "/^[abcd]/ , group : " + regEx3.test("group") + "<hr>";
    div1.innerHTML += "/^[abcd]/ , group : " + regEx3.test("car") + "<hr>";
    div1.innerHTML += "/^[abcd]/ , group : " + regEx3.test("dark") + "<hr>";


    // $(달러) : 문자열의 끝을 의미

    const regEx4 = /team$/
    div1.innerHTML += "/team$/ , A-team : " + regEx4.test("A-team") + "<hr>";
    div1.innerHTML += "/team$/ , team-A: " + regEx4.test("team-A") + "<hr>";


    // ^[a-zA-Z0-9]$
})










// - 한글 2글자 이상 6글자 이하의 문자열
// - 단 자음/모음 경우는 제외
// - 유효한 경우 초록색 글씨로 "유효한 이름 형식입니다." 출력
// - 유효하지 않은 경우 빨간색 글씨로 "잘못된 형식입니다." 출력




document.getElementById("inputName").addEventListener("keyup", function(){

    
    const span = document.getElementById("result1");

    // 요소.classlist  : 요소가 가지고 있는 클래스를 배열로 반환해줌
    // 요소.classlist.remove("클래스명") : 요소의 특정 클래스 제거
    // 요소.classlist.add("클래스명") : 요소의 특정 클래스 추가
    // 요소.classlist.toggle("클래스명") : 요소의 특정 클래스 있으면 제거 없으면 추가



    const regEx1 = /^[가-힣]{2,6}$/;
    
    if(regEx1.test(this.vlaue)){
        span.innerText = "유효한 형식입니다.";
        span.classList.add("confirm");
        span.classList.remove("error");
        
    }else{
        span.innerText = "잘못된 형식입니다."
        span.classList.add("error");
        span.classList.remove("confirm");
    }
})


   







    //2~6 2,3,4,5,6
    // const regEx2 = /[ㄱ-힣{1}]/;
    // span.innerText = regEx2.exec("잘못된 형식");

    // const regEx3 = /[ㄱ-힣{7,}]/;
    // span.innerText = regEx3.exec("잘못된 형식");

