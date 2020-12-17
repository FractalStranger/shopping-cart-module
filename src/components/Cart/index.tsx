import React from 'react';
import classnames from 'classnames';

type Props = {
  items: any[];
  loadingCart: boolean;
  lang: string;
  changeItemQuantity: (itemId: number, quantity: number) => void;
  removeItem: (itemId: number) => void;
};

function Cart({ items, loadingCart, lang, changeItemQuantity, removeItem }: Props) {
  return (
    <div className="shopping-cart-step_cart">
      {loadingCart ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <div className="shopping-cart-step_cart_table-header">
            <div className="item image" />
            <div className="item label">Produkt</div>
            <div className="item price">Preis</div>
            <div className="item quantity">Quantität</div>
            <div className="item subtotal">Zwischensumme</div>
            <div className="item actions" />
          </div>
          <div
            className={classnames(
              'shopping-cart-step_cart_table-body',
              items.length < 1 && 'empty',
            )}
          >
            {items.length < 1 && (
              <div className="item empty">
                <div className="item-col image" />
                <div className="item-col label">
                  <span>-</span>
                </div>
                <div className="item-col price">
                  <span>-</span>
                </div>
                <div className="item-col quantity">
                  <span>-</span>
                </div>
                <div className="item-col subtotal">
                  <span>-</span>
                </div>
                <div className="item-col actions" />
              </div>
            )}
            {items.map((item: any) => (
              <div key={item.item.label[lang]} className="item">
                <div className="item-col image">
                  {item.item.gallery[lang] && item.item.gallery[lang][0] && (
                    <img
                      src={item.item.gallery[lang][0].thumbnail}
                      alt={item.item.gallery[lang][0].alt}
                    />
                  )}
                </div>
                <div className="item-col label">
                  <h4>
                    <a href={`/produkte/${item.item.path[lang]}`}>{item.item.label[lang]}</a>
                  </h4>
                  <a
                    className="product-category-link"
                    href={`/produkte/kategorie/${item.item.categories[0].name[lang]}`}
                  >
                    {item.item.categories[0].fullname[lang]}
                  </a>
                </div>
                <div className="item-col price">
                  <div className="mobile-label">Preis</div>
                  <span className="value">
                    {item.item.price[lang].value} {item.item.price[lang].currency}
                  </span>
                  {item.item.itemForSale && <span className="price-type">(Kaufpreis)</span>}
                  {item.item.itemForRent && <span className="price-type">(Mietpreis)</span>}
                </div>
                <div className="item-col quantity">
                  <div className="mobile-label">Quantität</div>
                  <div className="categories-setting">
                    <button
                      type="button"
                      disabled={item.quantity < 2}
                      onClick={
                        item.quantity > 1
                          ? () => changeItemQuantity(item.item._id, item.quantity - 1)
                          : undefined
                      }
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      max="99"
                      value={Number(item.quantity)}
                      onChange={(e) => changeItemQuantity(item.item._id, Number(e.target.value))}
                    />
                    <button
                      type="button"
                      onClick={() => changeItemQuantity(item.item._id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="item-col subtotal">
                  <div className="mobile-label">Zwischensumme</div>
                  <span>
                    {item.item.price[lang].value * item.quantity} {item.item.price[lang].currency}
                  </span>
                </div>
                <div className="item-col actions">
                  <button type="button" onClick={() => removeItem(item.item._id)}>
                    <i className="fas fa-trash-alt" />
                    <span>Entfernen</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          {items.length < 1 && (
            <>
              <h4>Shopping cart is empty. Please choose products.</h4>
              <a className="button" href="/produkte">
                Produkte ansehen
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
