import { Dispatch, SetStateAction, useState } from "react";

const AdvancePagination = ({
  setOffset,
  offset,
  total,
  limit,
}: {
  setOffset: Dispatch<SetStateAction<number>>;
  offset: number;
  total: number;
  limit: number;
}) => {
  const pages = Math.ceil(total / limit);
  const current = offset + 1;
  const numbers = () => {
    console.log(current);
    const list: any = [];
    const firstPage = 1;
    const lastPage = pages;
    const prevoius = current - 1;
    const next = current + 1;
    list.push(1);
    if (Math.abs(prevoius - firstPage) > 1) {
      list.push("...");
    }
    if (prevoius > firstPage) {
      list.push(prevoius);
    }
    if (current !== firstPage && current != lastPage) {
      list.push(current);
    }
    if (next < lastPage) {
      list.push(next);
    }
    if (Math.abs(lastPage - next) > 1) {
      list.push("...");
    }
    list.push(lastPage);
    return list;
  };

  return (
    <div className="a-pagination">
      {numbers().map((ele: number, index: number) => (
        <p
          key={index}
          className={ele == current ? "active" : ""}
          onClick={() => {
            if (!isNaN(ele)) {
              setOffset(ele - 1);
            }
          }}
        >
          {ele}
        </p>
      ))}
    </div>
  );
};
export default AdvancePagination;
