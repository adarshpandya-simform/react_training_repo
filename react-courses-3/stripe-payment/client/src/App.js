import axios from "axios";

const App = () => {
  const paymentAcceptHandler = async () => {
    await axios
      .post(
        "http://localhost:2000/checkout",
        {
          items: [
            { id: 1, quantity: 2 },
            { id: 2, quantity: 3 },
          ],
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        if (res.data) {
          if (res.data.success) {
            window.location = res.data.url;
          } else {
            console.log("error", res.data);
          }
        } else {
          console.log("not successful");
        }
      })
      .catch((error) => {
        console.log(String(error));
      });
  };

  return (
    <div>
      <button onClick={paymentAcceptHandler}>pay using stripe</button>
      <code>
        the payment gateway is still in test mode. test it with 4242 4242 4242
        4242 card
      </code>
    </div>
  );
};

export default App;
