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
    <div className="flex justify-center">
      <table className="table-auto">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Wallet Address</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((trans: any) => (
            <tr key={trans.id}>
              <td>{trans.id}</td>
              <td>{trans.name}</td>
              <td>{trans.address}</td>
              <td>{trans.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataPage;
