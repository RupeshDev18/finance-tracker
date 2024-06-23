"use client";
import ExpenseCategoryItem from "@/components/ExpenseCategoryItem";
import Modal from "@/components/Modal";
import currencyFormatter from "@/lib/util";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DUMMY_DATA = [
  { id: 1, title: "Entertainment", color: "#00f", total: 900 },
  { id: 2, title: "Gas", color: "#0f0", total: 700 },
  { id: 3, title: "Fuel", color: "#f00", total: 1200 },
  { id: 4, title: "Movies", color: "#ff0", total: 800 },
  { id: 5, title: "Holiday", color: "#0ff", total: 2000 },
  { id: 6, title: "Food", color: "#f0f", total: 1000 },
];
export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <Modal show={modalIsOpen} onClose={setModalIsOpen}>
        <h3>hi</h3>
      </Modal>
      <main className="container max-w-2xl px-6 mx-auto">
        <section className="py-3">
          <small className="text-gray-400 text-md">My Balance</small>
          <h2 className="text-4xl font-bold">{currencyFormatter(10000)}</h2>
        </section>
        <section className="flex items-center gap-2 py-3">
          <button
            className="btn btn-primary"
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            + Expenses
          </button>
          <button className="btn btn-primary-outline">+ Income</button>
        </section>

        {/* Expenses */}
        <section className="py-6">
          <h3 className="text-2xl">My Expenses</h3>
          <div className="flex flex-col gap-4 mt-6">
            {DUMMY_DATA.map((expense) => {
              return (
                <ExpenseCategoryItem
                  color={expense.color}
                  title={expense.title}
                  total={expense.total}
                  key={expense.id}
                />
              );
            })}
          </div>
        </section>

        {/* Chart Section */}
        <section className="py-6">
          <h3 className="text-2xl">Stats</h3>
          <div className="w-1/2 mx-auto ">
            <Doughnut
              data={{
                labels: DUMMY_DATA.map((expense) => expense.title),
                datasets: [
                  {
                    label: "Expenses",
                    data: DUMMY_DATA.map((expense) => expense.total),
                    backgroundColor: DUMMY_DATA.map((expense) => expense.color),
                    borderColor: ["#18181b"],
                    borderWidth: 5,
                  },
                ],
              }}
            />
          </div>
        </section>
      </main>
    </>
  );
}
