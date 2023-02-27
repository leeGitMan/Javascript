// id로 접근하기

function fnTest1(){
    // id가 "div1" 인 요소를 얻어와서 상수형 변수  div1에 저장
    const fnTest = document.getElementById("div1");


    // 접근한 요소의 / 배경색을 얻어와 변수에 저장

    const bgColor = fnTest.style.backgroundColor;

    // 빨간 <-> 노란색

    if(bgColor =='red'){
        div1.style.backgroundColor='yellow';
    }else{
        div1.style.backgroundColor='red';
    }

}



// class로 접근하기

function fnTest2(){

    // 요소 여러개를 한 번에 접근하는 경우 배열로 반환

    const arr = document.getElementsByClassName("div2");


    arr[0].style.backgroundColor="green";
    arr[1].style.backgroundColor="yellow";
    arr[2].style.backgroundColor="red";


    // Java와 for문 형식 같음
    for(let i = 0; i <arr.length; i++){
        arr[i].innerText = i + "번째 요소입니다.";
    }
}



// 태그명으로 접근하기


function fnTest3(){
    // 문서 내에 존재하는 모든 li요소를 얻어와 배열 형식으로 변환

    const arr = document.getElementsByTagName("li");

    for(let i =0; i < arr.length; i++){
        arr[i].style.backgroundColor = "rgb(100," + arr[i].innerText + ",130)";
    }
}


// input 태그값(value) 얻어오기 / 변경하기

function fnTest4(){
    // input 요소 접근하기

    const input = document.getElementById("inputTest");

    // input 관련 태그에 작성된 값을 나타내는 속성 == value

    // input 요소에 작성된 값을 얻어와 alert 창으로 출력하기

    alert(input.value);


    // input 요소에 ""(빈 문자열) 대입 == 값을 삭제
    input.value = "";
}


// name 속성으로 접근하기

function fnTest5(){


    // name 속성값이 "hobby" 인 요소를 모두 얻어와 배열 형식으로 반환
    const hobby = document.getElementsByName("hobby");

    // console.log(hobby);

    let str = "";// 체크 된 체크박스의 값을 누적할 변수 선언

    let count = 0;// 누적할 체크 갯수 카운트

    for(let i = 0; i < hobby.length; i++){
        
        // .checked 속성
        // 해당 요소가 체크되어있다면 true / 아니면 false
        // checkobx, radio 전용 속성

        if(hobby[i].checked){
            str += hobby[i].value + " ";
            count ++;
        }
    }

    const result5 = document.getElementById("result5");

    if(str != ""){ // 체크가 된 경우
        result5.innerText = str;
        result5.innerHTML += " <br></br> 선택된 개수 : " + count;

    }else{
        result5.innerText = "선택된 취미가 없습니다.";
    }

}



// CSS 선택자로 접근하기

function fnTest6(){
    
    document.querySelector("#cssTest").style.border = "3px solid green";

    document.querySelector("#cssTest > div").style.backgroundColor = "gold";


    // 배열 형식 반한
    const arr = document.querySelectorAll("#cssTest > div");

    for(let i = 0; i < arr.length; i++){
        arr[i].style.fontSize ="30px";
    }
}


// 카톡만들기

// 입려된 값을 읽어 들인 다음 채팅창에 출력
function readValue() {
    
    // 채팅 관련된 요소 모두 얻어와서 저장하기
    const bg = document.getElementById("chat-bg");
    const input = document.querySelector("#chatInput");


    // 채팅이 정상적으로 입력된 경우에만 출력
    if(input.value.trim().length > 0){
        // 문자열.trim() -> 문자열 좌우 공백을 제거해준다. (중간 공백은 제거 안 한다)
        
        // 채팅창에 입력된 값으로 채팅 추가

        bg.innerHTML += "<p><span>" + input.value + "</span></p>";

        // 스크롤을 제일 밑으로 내리기
        // 요소.scrollTop : 요소 내부 현재 스크롤의 위치를 말해준다. 
        // 요소.scrollTop = 위치 : 스크롤을 특정 위치로 옮기겠단 뜻
        // 요소.scrollHeight = 스크롤의 전체 높이

        bg.scrollTop = bg.scrollHeight;

    }else{
        alert("몰?루");
    }

    // 입력한 내ㅔ용 삭제
    input.value = "";

}

// 엔터키가 입력되었을 때
function inputEnter() {

    // 키보드 입력 과정
    //  - 키 누름 -> keydown 이벤트 -> input 태그에 입력
    // -> keypress -> (손을 떼면) -> keyup


    // keydown : 모든 키가 눌렸을 때
    // keypress : 영어/숫자/특수문자/띄어쓰기가 눌러지고 있을 때
    // -> 꾹 누르고 있을 경우 연속적으로 함수가 호출된다.
    // --> keyup : 1회만 인식

    if(window.event.key == "Enter"){
        readValue();
    }

}


