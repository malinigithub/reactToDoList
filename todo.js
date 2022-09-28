function Todo({todo, index,removeTodo}) {
    function handle(){
        removeTodo(index);
    }
   return <div className="todo" key={index} onClick={handle}> {todo.text} [𐄂 click to remove]</div>
}