const counter = (state = 0, action) => {
  
  if (typeof state === 'undefined'){
    return 0;
  }
  
  if(action.type === 'INCREMENT'){
    return state + 1;
  }else if(action.type === 'DECREMENT'){
    return state - 1;
  }else{
    return state;
  }
  
};

const { createStore } = Redux;
// var createStore = Redux.createStore;
// import  { createStore } from 'redux';

const store = createStore(counter);
console.info(store.getState());

const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});  
});