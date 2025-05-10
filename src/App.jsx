import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ChoosenProcut from './components/ChoosenProduct';
import CancelOrder from './components/CancelOrder';

function App () {
  const products = ["Shoes", "Clothes", "T-Shirt", "Bags"];
  const [choosenProducts, setChoosenProducts] = useState([]);

  const handleOrderProduct = (product) => {
    setChoosenProducts((prev) => {
      const existing = prev.find((item) => item.product === product);
      if (existing) {
        return prev.map((item) =>
          item.product === product ? {...item, total: item.total + 1} : item
        )
      } else {
        return [ ...prev, { product, total: 1}];
      }
    })
  }

  const handleDecreaseOrderProduct = (product) => {
    setChoosenProducts((prev) =>
     prev.map((item) =>
          item.product === product ? {...item, total: item.total - 1} : item
        ).filter((item) => item.total > 0)
    )
  }
  return (
    <>
    <Header />
    <ul>
      {products.map((product) => (
        <li key={product}>
          {product}
          <button onClick={() => handleOrderProduct(product)}>+</button>
          <button onClick={() => handleDecreaseOrderProduct(product)}>-</button>
        </li>
      ))}
    </ul>
    <button onClick={() => CancelOrder(setChoosenProducts)}>Cancel All Order</button>
    <ChoosenProcut choosenProcuts={choosenProducts}/>
    </>
  )
}

export default App;
