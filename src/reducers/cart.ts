import { handle } from 'redux-pack';

import { LOAD_PRODUCT_ITEMS, CHANGE_ITEM_QUANTITY, REMOVE_ITEM } from '../actions/cart';
import { SUBMIT_ORDER } from '../actions/index';

export const INITIAL_STATE = {
  items: [],
  loading: true,
};

const cart = (state = INITIAL_STATE, action: any) => {
  const { type, itemId, quantity } = action;
  let changingItem: any;
  let newItems: Array<any>;
  let foundIndex: number;
  switch (type) {
    case LOAD_PRODUCT_ITEMS:
      return handle(state, action, {
        start: (prevState: any) => {
          return {
            ...prevState,
            loading: true,
          };
        },
        finish: (prevState: any) => {
          return {
            ...prevState,
            loading: false,
          };
        },
        failure: (prevState: any) => {
          return prevState;
        },
        success: (prevState: any) => {
          return {
            ...prevState,
            items: action.payload.filter((item: any) => item),
          };
        },
      });
    case CHANGE_ITEM_QUANTITY:
      newItems = state.items;
      changingItem = state.items.find((item: any) => item.item._id === itemId);
      if (!changingItem) return state;
      changingItem = {
        item: changingItem.item,
        quantity: quantity || 1,
      };
      foundIndex = state.items.findIndex((item: any) => item.item._id === itemId);
      newItems[foundIndex] = changingItem;
      return {
        ...state,
        items: [...newItems],
      };
    case REMOVE_ITEM:
      newItems = state.items.filter((item: any) => item.item._id !== itemId);
      return {
        ...state,
        items: [...newItems],
      };
    case SUBMIT_ORDER:
      return handle(state, action, {
        start: (prevState: any) => {
          return prevState;
        },
        finish: (prevState: any) => {
          return prevState;
        },
        failure: (prevState: any) => {
          return prevState;
        },
        success: () => {
          return INITIAL_STATE;
        },
      });
    default:
      return state;
  }
};

export default cart;
