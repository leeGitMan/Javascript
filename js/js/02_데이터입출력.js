// innerHTML로 읽어오기
function getInnerHTML1(){
    console.log(document.getElementById("test1").innerHTML);
}


//innerHTML로 변경하기(태그, 속성 해석됨)
function setInnerHTML1(){
    // const -> 상수
    // t1 -> 변수명

    const t1 = document.getElementById("test1");

    t1.innerHTML = "<b class='red'>변경된 <br><br> 내용입니다. 이건 HTML 해석이됨</b>";
    //HTML 해석이되어서 출력

}

// innerHTML 응용

function add(){
    // 1) id 속성값이 "area1" 인 요소를 얻어와서 변수(변수명 : area1)에 저장
    const area1 = document.getElementById("area1");

    // 2) area1 요소의 이전 내용에 새로운 내용을 누적
    
    area1.innerHTML += "<div class='area1-box'></div>";


}













// innerText로 읽어오기
const t2 = document.getElementById("test2"); // 전역 변수

function getInnerText1(){
    console.log(t2.innerText);
}



// innerText로 변경하기

function setInnerText1(){
    t2.innerText = "변경되었네용 깔깔맨. 이건 HTML 해석이 안됨 ";
    // 그대로 문자열로 출력
}





// fnConfirm

function fnConfirm(){
    const qes = confirm("배경색을 분홍색으로 바꿀래?");

    if(qes){
        document.getElementById("confirmTest").style.backgroundColor= "pink";
    }    
}



// fnPrompt

function fnPrompt(){
    const input = prompt("변경할 버튼명을 입력하세요.");
    // 입력한 값 or null

    if(input != null){
        document.getElementById("promptTest").innerText = input;
    }else{
        alert("취소됐네용");
    }
}





