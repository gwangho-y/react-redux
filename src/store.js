
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit"

// addToDo() 메서드는 ADD 라는 이름의 type과 payload를 반환한다.
// const addToDo = createAction("ADD")
// const deleteToDo = createAction("DELETE")

// console.log(addToDo(), deleteToDo());


// reducer는 state의 초기 값을 가지고 있고, action 타입에 따라 반환해줄 결과 값을 처리한다.
// const reducer = (state = [], action) => {

//     switch(action.type){
//         case addToDo.type : 
//         console.log(action);
//         return [{text: action.payload, id: Date.now()}, ...state]
        
//         case deleteToDo.type:
//             return state.filter(toDo=>toDo.id !== action.payload)
        
//         default:
//             return state;
//     }
// }
// const reducer = createReducer([],{
//     [addToDo]: (state, action) =>{
//         // return을 하면 새로운 배열을 만들어야한다.
//         // 그렇지 않으면 state를 mutate한다.
//         state.push({text: action.payload, id: Date.now()})
//     },
//     [deleteToDo]: (state, action) => {
//         state.filter(toDo=>toDo.id !== action.payload)
//     }
// })


const toDos = createSlice({
    name:'toDosReducer',
    initialState: [],
    reducers: {
        addToDo: (state, action) => {
            state.push({text: action.payload, id: Date.now()})
        },
        deleteToDo: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
})


console.log(toDos);

const store = configureStore({reducer: toDos.reducer})


// export const actionCreators = {
//     addToDo,
//     deleteToDo
// }

export const {addToDo, deleteToDo} = toDos.actions


export default store;