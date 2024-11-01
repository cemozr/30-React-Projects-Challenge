import { useState } from "react";

type ProductType = {
  name: string;
  id: number;
  quantity?: number;
};

const products: ProductType[] = [
  { name: "Product A", id: 0 },
  { name: "Product B", id: 1 },
  { name: "Product C", id: 2 },
  { name: "Product D", id: 3 },
];

export const ProjectSeventeen = () => {
  const [cart, setCart] = useState<ProductType[]>([]);

  const handleAddProduct = (product: ProductType) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity! + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleIncrement = (cartItemId: number) => {
    setCart(
      cart.map((item) =>
        item.id === cartItemId
          ? { ...item, quantity: item.quantity! + 1 }
          : item
      )
    );
  };
  const handleDecrement = (cartItemId: number) => {
    setCart(
      cart.map((item) =>
        item.id === cartItemId
          ? { ...item, quantity: item.quantity! - 1 }
          : item
      )
    );
  };
  const handleRemove = (cartItemId: number) => {
    setCart(cart.filter((item) => item.id !== cartItemId));
  };
  return (
    <div className="main-container">
      <div className="cart border">
        {cart.map((cartItem) => {
          return (
            <li key={cartItem.id}>
              {cartItem.name} - {cartItem.quantity}
              <button onClick={() => handleIncrement(cartItem.id)}>+</button>
              <button onClick={() => handleDecrement(cartItem.id)}>-</button>
              <button onClick={() => handleRemove(cartItem.id)}>Remove</button>
            </li>
          );
        })}
      </div>
      <div className="products border">
        <ul className="products-list">
          {products.map((product) => {
            return (
              <li key={product.id}>
                {product.name}{" "}
                <button onClick={() => handleAddProduct(product)}>
                  Add to cart
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
