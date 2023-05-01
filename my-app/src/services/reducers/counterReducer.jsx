 
import { DECREMENT, INCREMENT, RESET } from './../constants/counterConstant';

const initaistate = {
    count:0,
}

const counterReducer = (state = initaistate,actions) =>{
    switch (actions.type) {
        case INCREMENT:
            return{
                count: state.count + 1,
            };
          
         case DECREMENT:
            return{
                count: state.count - 1
            };
            
          case RESET:
            return{
                count: 0
            }  
            
    
        default:
            return state;
    }

};

export default counterReducer;