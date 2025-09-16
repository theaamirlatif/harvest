import React from "react";
import { PrimaryButton } from "../Buttons/PrimaryButton";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const handlePrevious = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 3;

        let startPage = Math.max(1, currentPage - 1);
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage < maxVisiblePages - 1) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return (
            <>
                {pageNumbers.map((page) => (
                    <span
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`cursor-pointer flex border border-[#D9D9D9] justify-center items-center  w-[38px] h-[38px] rounded-[8px] ${page === currentPage
                            ? "bg-black text-white font-bold"
                            : "text-gray-700"
                            }`}
                    >
                        {page}
                    </span>
                ))}
                {endPage < totalPages && (
                    <>
                        <span className="text-gray-500">...</span>
                        <span
                            onClick={() => onPageChange(totalPages)}
                            className="cursor-pointer text-gray-700"
                        >
                            {totalPages}
                        </span>
                    </>
                )}
            </>
        );
    };

    return (
        <div className="flex justify-center mt-4">
            <div className="flex gap-[12px] w-full max-w-[300px] items-center justify-end">
                <PrimaryButton
                    btnText="Prev"
                    btnClass="bg-[#FAFAFA] cursor-pointer !w-[64px] py-[10px] px-[4px] !rounded-[8px] font-roboto font-medium text-[#252525] text-[16px]"
                    onClick={handlePrevious}
                />
                <p className="flex gap-[12px] items-center">
                    {renderPageNumbers()}
                </p>
                <PrimaryButton
                    btnText="Next"
                    btnClass="bg-[#FAFAFA] cursor-pointer !w-[64px] py-[10px] px-[4px] !rounded-[8px] text-roboto text-medium text-[#252525] text-[16px]"
                    onClick={handleNext}
                />
            </div>
        </div>
    );
};

export default Pagination;
