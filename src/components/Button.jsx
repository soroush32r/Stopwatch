export const Button = ({ name, clickHandler }) => {
  return (
    <button
      className="border border-white px-10 py-2 rounded-sm hover:text-black hover:bg-orange-300 shadow-md md:mx-5 my-3"
      onClick={clickHandler}
    >
      {name}
    </button>
  );
};
