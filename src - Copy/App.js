import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'laptop', price: 53000 },
    { name: 'Phone', price: 43000 },
    { name: 'Watch', price: 5300 },
    { name: 'Bag', price: 3300 },
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }

      {/* <Product name='Laptop' price='55000'></Product>
      <Product name='Phone' price='75000'></Product>
      <Product name='Watch' price='3500'></Product> */}
    </div>
  );
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name : {props.name}</h3>
      <p>Price : {props.price}</p>
    </div>
  )
}

export default App;
