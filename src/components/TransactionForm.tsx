const TransactionForm = () => {
  return (
    <div className="m-16 w-72 md:w-1/2 lg:w-1/3 bg-darkGray rounded-2xl ring-1 ring-white shadow-xl shadow-midGray">
      <div className="p-5">
        <form action="">
          <h1 className="p-5 text-3xl font-semibold  text-white">
            Make a{" "}
            <span className="text-pink decoration-pink">Transaction</span>
          </h1>
          <div className="px-5 py-2">
            <label htmlFor="" className="block text-lg text-white">
              Name
            </label>
            <input
              type="text"
              className="mt-2 p-3 bg-gray rounded-md w-full text-lg text-white outline-none focus:ring-1 ring-midGray ring-offset-2 ring-offset-darkGray"
              placeholder="Enter your name"
            />
          </div>
          <div className="px-5 py-2">
            <label htmlFor="" className="block text-lg text-white">
              Wallet address
            </label>
            <input
              type="text"
              className="mt-2 p-3 bg-gray rounded-md w-full text-lg text-white outline-none focus:ring-1 ring-midGray ring-offset-2 ring-offset-darkGray"
              placeholder="Enter your wallet address"
            />
          </div>
          <div className="px-5 py-2">
            <label htmlFor="" className="block text-lg text-white">
              Amount
            </label>
            <input
              type="text"
              className="mt-2 p-3 bg-gray rounded-md w-full text-lg text-white outline-none focus:ring-1 ring-midGray ring-offset-2 ring-offset-darkGray"
              placeholder="Enter the amount"
            />
          </div>
          <div className="p-5">
            <button className="bg-pink hover:bg-darkPink w-full rounded-md p-2 text-white text-lg font-semibold transition duration-500 ease-in-out">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;
