import React from "react";

const ExpenseCategoryItem = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex items-center justify-between p-4 bg-slate-700 rounded-3xl">
          <div className="flex items-center gap-2">
            <div className="w-[25px] h-[25px] rounded-full bg-yellow-500" />
            <h4 className="capitalize">Entertainment</h4>
          </div>
          <p>{currencyFormatter(500)}</p>
        </div>
      </div>
    </>
  );
};

export default ExpenseCategoryItem;
