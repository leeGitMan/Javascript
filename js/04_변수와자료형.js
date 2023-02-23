
var str = "JS 코드는 함수가 아닌 Js 아닌 파일 또는"
            + "script 태그 내부에 바로 작성하면 HTML랜더링 시 바로 수행";


console.log(str);

// 변수 선언 위치에 따른 구분
var num1 = 100; //전역변수
num2 = 200; // 전역변수

console.log("num1 : " + num1);
console.log("num2 : " + num2);

function test() { // test 함수 정의
    
    var num3 = 300; // 지역변수
    num4 = 400; // 전역변수
    
    console.log("함수 내부 num3 " + num3);
    console.log("함수 내부 num4 " + num4);


    if(true){
        var num5 = 500; // 지역변수
        num6 = 600; // 전역변수
    }

    console.log("if문 종료 후 num5 " + num5);
    console.log("if문 종료 후 num6 " + num6);
}

test(); // 함수 호출

// console.log("함수 외부 num3 " + num3); num3 is not defined 
// --> 이게 에러인데 밑에 코드(num4)
// 가 안 읽히는 이유는 스크립트 언어는 중간에 에러가 발생하면 멈추기 때문.
// -> 즉 인터프리터가 한 줄씩 읽어 내려 가기에 에러 발생하면 멈춤
// 함수 종료 후에는 사용 불가

console.log("함수 외부 num4 : " + num4);

// console.log("함수 외부 num5 : " + num5); 에러

console.log("함수 외부 num6 : " + num6); 

// var 변수명 중복 확인

var num1 = 999;

console.log("var num1 중복확인 : " + num1);

// 자료형 확인(+ 변수 선언 방법)

function typeTest() {

    let temp1 = 100;
    // let temp1 = 200; 변수명 중복 x

    if(true){
        // 블록 범위 확인
        let temp2 = 200;
        const temp3 = 300;

        //temp3 = 400; // 상수형 변수에 값을 할당할 수 없음을 나타내는 error
        // 04_변수와자료형.js:64 Uncaught TypeError: Assignment to constant variable.
        // at typeTest

    }

    console.log(temp1);
    // console.log(temp2); -> error
    // console.log(temp3); -> error



    // ------------------------------------------------------------------------

    // 자료형 확인

    const typeBox = document.getElementById("typeBox");
    typeBox.onpointerover = ""; // typeBox 요소 내부의 내용을 빈 문자열로 바꿔라
                                // == 내부 내용 삭제
    
    // const name2; --> 상수는 선언과 동시에 무조건 초기화를 해야한다.

    let name; // 일반 변수이기에 선언만 가능 --> undefined

    typeBox.innerHTML += "name : " + name + " / " + typeof name;
                         // name:  undefined / undefined

    // typeof 해당 자료형의 타입을 반환하는 연산자


    name = "홍길동"; // undefined - > string

    typeBox.innerHTML += "<br><br>name : " + name + " / " + typeof name;
                                // name :   홍길동     /    string
    
    //  number
    const age = 20;
    const height = 178.9;

    typeBox.innerHTML += "<br><br>name : " + age + " / " + typeof age;
    typeBox.innerHTML += "<br><br>name : " + height + " / " + typeof height;



    // boolean
    const istTrue = true;
    typeBox.innerHTML += "<br><br>name : " + istTrue + " / " + typeof istTrue;


    // object(배열, JS객체)
    // 배열 선언과 동시에 초기화
    // Java
    // int[] arr= {10,20,30,40,50};

    // JS( [] 사용 ) 

    const arr = [10,20,30,40,50];

    typeBox.innerHTML += "<br><br>name : " + arr + " / " + typeof arr;

    for(let i = 0 ; i < arr.length; i++){
        typeBox.innerHTML += "<br><br>arr[" + i + "]: " + arr + " / " + arr[i] + " " + typeof arr[i];
    }


    // ** JS 객체 **
    // - K:V 쌍으로 이루어짐(Map 형식)
    // - Key는 무조건 String 형태
    // - 리터럴 표기법은 중괄호 {}
    
    // const user = { "K" : V , "K" : V}


    const user = {"id" : "user01", "pw" : "pass01", "num" : 123, "a" : arr}
    // 키는 다 스트링 형태이고 밸류는 아무거나 가능

    typeBox.innerHTML += "<br><br>name : " + user + " / " + typeof user;
    
    // 객체 저장된 값 출력
    typeBox.innerHTML += "<br>user.id : " + user.id;
    typeBox.innerHTML += "<br>user.pw : " + user.pw;
    typeBox.innerHTML += "<br>user.num : " + user.num;
    typeBox.innerHTML += "<br>user.a : " + user.a;
    typeBox.innerHTML += "<br>user.a[2] : " + user.a[2];
    
    // function
    // 1) 변수명 == 함수명

    const fnSum = function(n1, n2){ // 익명함수
        return n1 + n2;
    }

    // 함수명만 작성하는 경우 => 함수에 작성된 코드 자체가 반환
    typeBox.innerHTML += "<br><br>fnSum " + fnSum + " / " + typeof fnSum;

    // 함수명(매개변수) == 함수호출 (함수코드가 수행됨)
    typeBox.innerHTML += "<br><br>fnSum " + fnSum(1,2) + " / " + typeof fnSum(1,2);



    // 2) 함수를 매개변수로 전달하는 형태

    function plusFn(num, fn) {
        // num : number
        // fn : function



        return num + fn();
    }

    const result = plusFn(100, function () {return 30- 10;});

    typeBox.innerHTML += "<br><br>result " + result;


}   
