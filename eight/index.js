const counter = (state = 0, action) => {
  console.log('conter', state, action);
  if(action.type === 'INCREMENT'){
    return state + 1;
  }else if(action.type === 'DECREMENT'){
    return state - 1;
  }else{
    return state;
  }
  
};

const { createStore } = Redux;
const store = createStore(counter);
console.info(store.getState());

const Counter = ({
  value, 
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

const render = () => {
  ReactDOM.render(
    <Counter 
      value       = {store.getState()} 
      onIncrement = {() => store.dispatch({
                       type: 'INCREMENT'
                    })}
      onDecrement = {() => store.dispatch({
                       type: 'DECREMENT'
                    })} />,
    document.querySelector('#root')
  );
};

store.subscribe(render);
render();