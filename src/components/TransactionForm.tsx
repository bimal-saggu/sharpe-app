import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { isAddress } from "ethers";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  address: z.string().refine((value) => isAddress(value), {
    message: "Invalid Ethereum address format",
  }),
  amount: z.number({ invalid_type_error: "Amount is required" }).max(10000),
});

type FormData = z.infer<typeof schema>;

const TransactionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const dbref = collection(db, "userinfo");

  const onSubmit = async (data: FieldValues) => {
    try {
      await addDoc(dbref, data);
      console.log(data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="m-16 w-72 md:w-1/2 lg:w-1/3 bg-darkGray rounded-2xl ring-1 ring-white shadow-xl shadow-midGray">
      <div className="p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="p-5 text-3xl font-semibold  text-white">
            Make a{" "}
            <span className="text-pink decoration-pink">Transaction</span>
          </h1>
          <div className="px-5 py-2">
            <label htmlFor="name" className="block text-lg text-white">
              Name
            </label>
            <input
              {...register("name")}
              id="name"
              type="text"
              className="mt-2 p-3 bg-gray rounded-md w-full text-lg text-white outline-none focus:ring-1 ring-midGray ring-offset-2 ring-offset-darkGray"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>
          <div className="px-5 py-2">
            <label htmlFor="address" className="block text-lg text-white">
              Wallet address
            </label>
            <input
              {...register("address")}
              id="address"
              type="text"
              className="mt-2 p-3 bg-gray rounded-md w-full text-lg text-white outline-none focus:ring-1 ring-midGray ring-offset-2 ring-offset-darkGray"
              placeholder="Enter your wallet address"
            />
            {errors.address && (
              <p className="text-danger">{errors.address.message}</p>
            )}
          </div>
          <div className="px-5 py-2">
            <label htmlFor="amount" className="block text-lg text-white">
              Amount
            </label>
            <input
              {...register("amount", { valueAsNumber: true })}
              id="amount"
              type="text"
              className="mt-2 p-3 bg-gray rounded-md w-full text-lg text-white outline-none focus:ring-1 ring-midGray ring-offset-2 ring-offset-darkGray"
              placeholder="Enter the amount"
            />
            {errors.amount && (
              <p className="text-danger">{errors.amount.message}</p>
            )}
          </div>
          <div className="p-5">
            <button
              type="submit"
              className="bg-pink hover:bg-darkPink w-full rounded-md p-2 text-white text-lg font-semibold transition duration-500 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;
