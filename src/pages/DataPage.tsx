import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const DataPage = () => {
  const [transactionData, setTransactionData] = useState<any>([]);

  const fetchDataFromFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, "userinfo"));
    const transactions = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return transactions;
  };

  useEffect(() => {
    const fetchData = async () => {
      const transactions = await fetchDataFromFirestore();
      setTransactionData(transactions);
    };
    fetchData();
  }, []);
  return (
    <div className="flex justify-center m-10">
      <table className="table-auto">
        <thead className="">
          <tr className="bg-darkGray h-14">
            <th className="hidden md:table-cell text-white">Id</th>
            <th className="text-white">Name</th>
            <th className="hidden md:table-cell text-white">Wallet Address</th>
            <th className="text-white">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((trans: any) => (
            <tr key={trans.id} className="bg-midGray">
              <td className="hidden md:table-cell">{trans.id}</td>
              <td>{trans.name}</td>
              <td className="hidden md:table-cell">{trans.address}</td>
              <td>{trans.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataPage;
