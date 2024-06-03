/* 
  계산기 알고리즘
  1. 숫자와 연산자를 클릭 또는 입력하면 해당 값이 디스플레이에 나타난다.
  2. html에 onclick을 걸어, 숫자와 연산자를 누를 때 마다 부여된 해당 함수를 호출한다.
  3. 결과값은 입력값 디스플레이 아래에 나타난다.

  .eval :  문자를 숫자로 바꿔주는 내장함수 parseInt, number와의 차이는 무엇인지 질문 
  .value : id 요소의 값을 불러온다.
  .length :  개수
  산술연산자의 계산 순서는 * / + -, 괄호가 있을 때에는 다르기 때문에 유의 필요.
*/

//var
var ele_display = document.getElementById('display'); //입력 창
var ele_displayResult = document.getElementById('result'); //입력받은 값이 나오는 결과 창

//function method
function addOutput(num){
  ele_display.value += num;
  console.log(ele_display.value);
} //숫자를 디스플레이에 보여주는 함수

function calculate(){
  var ele_result = eval(ele_display.value); //결과 값
  ele_displayResult.value = ele_result;
}//입력받은 값이 나오는 결과창 <= 결과 값 대입하는 함수

function reset(){
  ele_display.value = '';
  ele_displayResult.value = '';
}//입력값을 초기화 하는 함수

function del(){
  ele_display.value = ele_display.value.substring(0, ele_display.value.length - 1);
}//입력값을 지우는 함수

