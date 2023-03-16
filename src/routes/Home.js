import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { addToDo } from "../store";



function Home({toDos, addToDo}){

    const [text, setText] = useState("")

    function onChange(e) {
        setText(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();
        addToDo(text)
        setText("")
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo=><ToDo {...toDo} key={toDo.id}/>)}
            </ul>
        </>
    )
}

function mapStateToProps(state) {
    return {toDos: state}
}

function mapDispatchProps(dispatch) {
    return {        
        // addToDo가 실행되면 dispatch 호출
        // 이 addToDo가 props가 되서 Home에 전달된다.
        addToDo: text => dispatch(addToDo(text))
    }
}

// mapStateToProps와 mapDispatchProps를 Home에 props로 주입한다.
export default connect(mapStateToProps, mapDispatchProps) (Home)
    
