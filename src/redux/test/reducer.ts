import { MULTIPLY_FIVE } from './actionTypes';
import { TestActions } from './types';

const initialState = {
	value: 1
}

const FiveReducer = (state = initialState, action: TestActions) => {
	switch(action.type){
		case MULTIPLY_FIVE: return {
			...state,
			value: state.value * 5
		}
		
		default: return state
	}
}

export default FiveReducer;