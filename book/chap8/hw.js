let todos = [
  {id:1, title:'아내에게 선물 사주기1', done:false}//객체
];

// 배열에 추가하는 함수
function addTodo(title) {
  let id = todos.length + 1;
  let todo = {
    id,
    title,
    done:false
  };
  todos.push(todo);
}

// 테스트 코드(아래3줄)
// console.log(todos);
// addTodo('저녁에 운동하기');
// console.log(todos);

// 배열의 데이터를 조회하는 함수
function getTodos() {
  return todos;
}

// 배열의 객체의 done 값을 변경하는 함수 #A
function doneLine(id) {
  todos[id-1].done = !(todos[id-1].done);
}

// 배열안에 해당 객체를 삭제하는 함수 #B
function tableErase(id) {
  let num = id - 1;
  todos.splice(num, 1);
}
