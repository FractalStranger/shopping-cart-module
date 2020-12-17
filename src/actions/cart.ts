import axios from 'axios';

export const CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const LOAD_PRODUCT_ITEMS = 'LOAD_PRODUCT_ITEMS';

export function loadProductItems(items: any[], lang: string) {
  const sources = [] as any;
  items.forEach((item: any) => {
    const source = axios
      .get(`${process.env.REACT_APP_ENDPOINT}/content/products/${item.item._id}`)
      .then((data: any) => {
        if (!data.data.published[lang]) return undefined;
        const loadedItem = {
          ...item,
          item: data.data,
        };
        return loadedItem;
      })
      .catch(() => undefined);
    sources.push(source);
  });

  const success = (res: any) => res;

  return {
    type: LOAD_PRODUCT_ITEMS,
    promise: Promise.all(sources).then(success),
  };
}

export function changeItemQuantity(itemId: number, quantity: number) {
  return {
    type: CHANGE_ITEM_QUANTITY,
    itemId,
    quantity,
  };
}

export function removeItem(itemId: number) {
  return {
    type: REMOVE_ITEM,
    itemId,
  };
}
