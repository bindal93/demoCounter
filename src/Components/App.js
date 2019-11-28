import { connect } from 'react-redux';
import Counter from './Counter.js';
import { onIncrement,onDecrement } from '../actions/actions';
var mapStateToProps = function(state){
  return {
    inCount:state.inReducer.inCount,
    deCount:state.deReducer.deCount
  };
}
var mapDispatchToProps = function(dispatch){
  return {
    onIncrement:(step)=>{
      dispatch(onIncrement(step))
    },
    onDecrement:(step)=>{
      dispatch(onDecrement(step))
    }
  }
}
var App= connect(mapStateToProps,mapDispatchToProps)(Counter);
export default App;
