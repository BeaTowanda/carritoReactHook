import React,{useState,useReducer} from 'react';
import "../hojas-de-estilo/contador.css"

const initialState ={
    // se sugiere que el initial state SEA UN OBJETO
    contador:0,
}


const init= (initialState) => {
  return {
    contador: initialState + 100,
  };
};

const TYPES ={
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    INCREMENT_5:"INCREMENT_5",
    DECREMENT_5:"DECREMENT_5",
    RESET:"RESET"
}
// aquí defino la función reductora pero conviene hacerlo en carpeta separada
function contadorReducer(state,action,init){
// recibe el estado y una acción
// siempre SI O SI RETORNA EL ESTADO
// action tiene 2 valores: el tipo de acción  y el 
// payload que es opcional y es el valor que le pasamos
// para ejecutar esa acción
switch (action.type) {      
    case TYPES.INCREMENT:
        return {contador:state.contador + action.payload };
    case TYPES.DECREMENT:
        return {contador:state.contador - action.payload };
    case TYPES.INCREMENT_5:
        return {contador:state.contador + action.payload };
    case TYPES.DECREMENT_5:
         return {contador:state.contador - action.payload };
    case TYPES.RESET:
        return initialState
        // ojo que si ponego {initialState me da isNAN}

    default:
        return state
      
}
return state
};

const Contador = () => {
    //const [contador, setContador] = useState(1);
    const [state, dispatch] = useReducer(contadorReducer, initialState)

// el userReducer recibe: a) función reductora definida  fuera
// el tercer parámetro es el init   que es UNA FUNCIÓN QUE TRANSFORMA EL ESTADO INICIAL
// EL TERCER PARÁMETRO ES OPCIONAL .-
    const sumar =()=>{
        dispatch({type:TYPES.INCREMENT,payload:1})
    };
    const restar = () =>{
        dispatch({type:TYPES.DECREMENT,payload:1})
    }; 
    const sumar5 =()=>{
        dispatch({type:TYPES.INCREMENT_5,payload:5})
    };
    const restar5 = () =>{
        dispatch({type:TYPES.DECREMENT_5,payload:5})
    };
    const reset =()=>{
        dispatch({type:TYPES.RESET,payload:0})
    };
   
  return (
    <div>
        <h1>Contador</h1>
        <nav>
            <button className='click' onClick={sumar}>+</button>
            <button className='click' onClick={sumar5}>+5</button>
            <button className='click resetea' onClick={reset}>0</button>
            <button className='click menos' onClick={restar}>-</button>
            <button className='click menos' onClick={restar5}>-5</button>
        </nav>
        <h2>RESULTADO CONTADOR {state.contador}</h2>
    </div>
  )
}

export default Contador