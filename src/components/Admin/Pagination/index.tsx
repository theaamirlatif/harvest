import React from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
interface paginationProps {
  totalEntries: number;
  entriesPerPage: number;
  currentPage: number;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
}
const Pagination: React.FC<paginationProps> = ({
  totalEntries,
  entriesPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  // const endEntry = Math.min(currentPage * entriesPerPage, totalEntries);

  return (
    <div className="pt-2 mb-4">
      <div className="flex justify-between flex-wrap gap-2 items-center px-2">
        {/* Left text */}
        <div className="text-[#414651] font-medium text-xs leading-4 md:text-sm md:leading-[18px]">
          Showing {startEntry} of {totalEntries} results
        </div>

        {/* Pagination buttons */}
        <div className="flex items-center space-x-2">
          {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage && setCurrentPage(currentPage - 1)}
            className="cursor-pointer flex items-center gap-1 px-3 py-1.5 rounded-full border border-black text-sm font-medium !text-black disabled:opacity-50 transition"
          >
            <MdArrowBackIosNew size={14} color="black" />
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage && setCurrentPage(i + 1)}
                className={`text-sm font-medium ${
                  currentPage === i + 1
                    ? "text-[var(--primary)]"
                    : "text-[#414651] hover:text-[var(--primary)]"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage && setCurrentPage(currentPage + 1)}
            className="cursor-pointer flex items-center gap-1 px-3 py-1.5 rounded-full border border-black text-sm font-medium  text-[#414651] disabled:opacity-50 transition"
          >
            Next
            <MdArrowForwardIos size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
