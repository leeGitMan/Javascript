const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");



function clac(btn) {
    // op에는 +,-,*,/,% 중 하나가 전달됨

    console.log(btn);

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);


    const op = btn.innerText; 
    // 클릭된 버튼에 작성된 내용을 얻어옴
    // + * - / %

    // eval("코드 형식의 문자열")
    // -> 매개변수의 문자열을 JS 코드로 해석/수행하는 함수
    // -> 속도가 느림 -> 보안 이슈가 심각 -> 사용X(해쥐마)

    // result.innerText = eval(n1 + op + n2); 

    //  new Function() 사용

    result.innerText = new Function("return " + n1 + op + n2)(); // -> return 무조건 붙이기 대신 끝에는 띄어주기


    // switch(op){ 위에 new Fucntion 으로 스위치가 필요없어짐

    //     case '+' : result.innerText = n1 + n2; break;
    //     case '-' : result.innerText = n1 - n2; break;
    //     case '*' : result.innerText = n1 * n2; break;
    //     case '/' : result.innerText = n1 / n2; break;
    //     case '%' : result.innerText = n1 % n2; break;
    // }
    
}