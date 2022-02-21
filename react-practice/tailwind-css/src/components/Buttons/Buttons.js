import "./Buttons.css";

const Buttons = () => {
  return (
    <div className="btn-container">
      <button className="hover:bg-teal-900 transition-all font-medium py-1 px-2 uppercase text-white bg-teal-700 rounded">
        simple button
      </button>
      <button className="hover:bg-teal-100 transition-all font-medium py-1 px-2 uppercase text-teal-700 bg-transparent rounded border-teal-700 border-2">
        outlined button
      </button>
      <button className="hover:bg-teal-900 transition-all font-medium py-1 px-2 uppercase text-white bg-teal-700 rounded-full">
        rounded button
      </button>
      <button className="hover:bg-teal-100 transition-all font-medium py-1 px-2 uppercase text-teal-700 bg-transparent rounded-full border-teal-700 border-2">
        outlined rounded button
      </button>
      <button className="hover:bg-teal-900 hover:shadow-teal-900 shadow-teal-700 shadow-sm transition-all font-medium py-1 px-2 uppercase text-white bg-teal-700 rounded">
        shadow button
      </button>
      <button className="hover:bg-teal-700 hover:text-white hover:shadow-md hover:shadow-gray-800 transition-all font-medium py-1 px-2 uppercase text-teal-700 bg-transparent rounded-full border-teal-700 border-2">
        outlined rounded shadow button
      </button>
    </div>
  );
};

export default Buttons;
