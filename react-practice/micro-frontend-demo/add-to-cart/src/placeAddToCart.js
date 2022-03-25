import { render } from "solid-js/web";

import "./index.scss";
import AddToCart from "./components/AddToCart";

export default function placeAddToCart(el, id) {
  render(() => <AddToCart id={id} />, el);
}
