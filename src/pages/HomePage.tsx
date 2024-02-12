import TransactionForm from "../components/TransactionForm";

const HomePage = () => {
  return (
    <div className="flex justify-center">
      <div className="outline outline-1 outline-midGray w-fit">
        <p className="px-2 py-1 uppercase text-sm text-pink">
          What's new?{" "}
          <span className="text-white">Sharpe app is now in Early Access</span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
