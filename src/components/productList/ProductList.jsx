import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
     
        <h1 className="pl-title"> web developer portfolio & inspire. It's Neeraj Goswami</h1>
        <p className="pl-desc">
        From Web Components and UI/UX animations to React.JS,Html, CSS, JavaScript, Redux, Angular.JS, and Node.JS. Check out my latest web software development portfolio projects.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
