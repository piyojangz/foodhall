<<<<<<< HEAD
<<<<<<< HEAD

'use strict';

import type {Action} from '../actions/types';
import { SET_INDEX,SET_SHOPDETAIL,SET_LASTESTSENDOTP,SET_ฺBASKET,SET_LIST } from '../actions/list';

export type State = {
    list: string,
}
var  endpoint = 'http://leafood.servewellsolution.com/';
//var endpoint = 'http://192.168.1.36/api/';
const initialState = {
    list: [],
    selectedIndex: undefined,
    apiaddress:endpoint,
    imageaddress:endpoint +'public/uploads/shop_img/',
    shopdetail:[],
    basket:[],
    lastestsendorp:undefined,
};

export default function (state:State = initialState, action:Action): State {
    if (action.type === SET_INDEX) {
        return {
            ...state,
            selectedIndex: action.payload
        };
    }
    if (action.type === SET_SHOPDETAIL) {
        return {
            ...state,
            shopdetail: action.payload
        };
    }
   if (action.type === SET_LASTESTSENDOTP) {
        return {
            ...state,
            lastestsendorp: action.payload
        };
    }

    if (action.type === SET_ฺBASKET) {
         return {
             ...state,
             basket: action.payload
         };
     }
     if (action.type === SET_LIST) {
         return {
             ...state,
             list: action.payload
         };
     }
    return state;
=======
import type { Action } from "../actions/types";
import { SET_INDEX } from "../actions/list";

export type State = {
  list: string
};

const initialState = {
  list: [
    "React Native Starter Kit",
    "React Navigation",
    "NativeBase Easy Grid",
    "NativeBase",
    "CodePush",
    "Redux"
  ],
  selectedIndex: undefined
};

=======
import type { Action } from "../actions/types";
import { SET_INDEX } from "../actions/list";

export type State = {
  list: string
};

const initialState = {
  list: [
    "React Native Starter Kit",
    "React Navigation",
    "NativeBase Easy Grid",
    "NativeBase",
    "CodePush",
    "Redux"
  ],
  selectedIndex: undefined
};

>>>>>>> 7e5102f5df78ce39ff2d6e5bb1eabcf3dea9ac20
export default function(state: State = initialState, action: Action): State {
  if (action.type === SET_INDEX) {
    return {
      ...state,
      selectedIndex: action.payload
    };
  }
  return state;
<<<<<<< HEAD
>>>>>>> 7e5102f5df78ce39ff2d6e5bb1eabcf3dea9ac20
=======
>>>>>>> 7e5102f5df78ce39ff2d6e5bb1eabcf3dea9ac20
}
