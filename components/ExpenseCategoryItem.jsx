import currencyFormatter from "@/lib/util";
import React from "react";

const ExpenseCategoryItem = ({ color, title, total }) => {
  return (
    <>
      <button>
        <div className="flex items-center justify-between p-4 bg-slate-700 rounded-3xl">
          <div className="flex items-center gap-2">
            <div
              className="w-[25px] h-[25px] rounded-full bg-yellow-500"
              style={{ backgroundColor: color }}
            />
            <h4 className="capitalize">{title}</h4>
          </div>
          <p>{currencyFormatter(total)}</p>
        </div>
      </button>
    </>
  );
};

export default ExpenseCategoryItem;
