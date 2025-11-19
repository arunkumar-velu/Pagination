import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";
import { FaArrowLeft } from "react-icons/fa";

const Pagination = ({
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
  const pagesArr = Array.from({ length: pages });
  const FaArrowLeftIcon: IconType = FaArrowLeft;
  const handlePagenation = (current: number) => {
    setOffset(current);
  };
  const hadleArrowNavigation = (direction: string) => {
    if (direction == "LEFT") {
      setOffset((prev) => prev - 1);
    } else {
      setOffset((prev) => prev + 1);
    }
  };
  return (
    <div className="pagination">
      {offset != 0 && (
        <FaArrowLeftIcon
          onClick={() => {
            hadleArrowNavigation("LEFT");
          }}
        />
      )}
      {pagesArr.map((_, index) => {
        return (
          <span
            className={`page ${offset == index && "active"}`}
            onClick={() => handlePagenation(index)}
            key={index}
          >
            {index + 1}
          </span>
        );
      })}
      {offset != pagesArr.length - 1 && (
        <FaArrowLeftIcon
          className="next-page"
          onClick={() => {
            hadleArrowNavigation("RIGHT");
          }}
        />
      )}
    </div>
  );
};
export default Pagination;
