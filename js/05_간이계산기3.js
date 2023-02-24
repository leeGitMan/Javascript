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


    switch(op){

        case '+' : result.innerText = n1 + n2; break;
        case '-' : result.innerText = n1 - n2; break;
        case '*' : result.innerText = n1 * n2; break;
        case '/' : result.innerText = n1 / n2; break;
        case '%' : result.innerText = n1 % n2; break;
    }
    


}