import Item from "./components/Item";
import "./App.css";
import { Products } from "./Products";

function App() {
  return (
    <div>
      <h1>dasdlkjahslkjdklsa</h1>
      <div className="Wrappers">
        {Products.map((item, index) => (
          <Item
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
          ></Item>
        ))}
      </div>
    </div>
  );
}

export default App;
