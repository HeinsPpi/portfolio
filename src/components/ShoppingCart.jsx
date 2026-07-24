import { useState } from 'react';

const ShoppingCart = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    alert(`${count}個をカートに入れました`);
  };

  return (
    <main className="page">
      <section className="shopping-card">
        <h1 className="title">ショッピングカート</h1>

        <div className="count-panel">
          <p className="count-label">選択した個数:</p>
          <div className="count-number">{count}</div>
        </div>

        <div className="button-area">
          <button className="button increase-button" onClick={increaseCount}>
            個数を増やす
          </button>

          <button className="button decrease-button" onClick={decreaseCount}>
            個数を減らす
          </button>
        </div>

        <button className="cart-button" onClick={addToCart}>
          🛒 カートに入れる
        </button>
      </section>
    </main>
  );
};

export default ShoppingCart;