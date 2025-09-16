import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
  type ColumnDef,
  type SortingState,
  type CellContext,
  type Cell,
} from "@tanstack/react-table";
import sortIcon from "../../../assets/Admin/Icons/chevron-sort.svg";

export type CustomColumnDef<T> = ColumnDef<T> & {
  showSort?: boolean;
  accessorKey?:number| string;
  // accessorFn?: (row: T) => unknown; 
  id?: string;
};
interface TanDataTableProps<T extends object> {
  columns: CustomColumnDef<T>[];
  data: T[];
  showCheckbox?: boolean;
  onRowSelect?: (rows: T[]) => void;
  showSort?: boolean;
  showActions?: boolean;
  actions?: (row: T) => React.ReactNode;
  className?: string;
  clickableColumns?: number[];
  onCellClick?: (row: T, cell: Cell<T, unknown>, colIndex: number) => void;
}

const TanDataTable = <T extends object>({
  columns = [],
  data = [],
  showCheckbox = false,
  onRowSelect = () => {},
  // showSort = false,
  showActions = false,
  actions = () => null,
  className = "",
  clickableColumns = [],
  onCellClick = () => {},
}: TanDataTableProps<T>) => {
  const columnHelper = createColumnHelper<T>();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const baseColumns: ColumnDef<T>[] = [];

  columns.forEach((col, index) => {
    const buildAccessor = col.accessorFn
      ? columnHelper.accessor(col.accessorFn, {
          id: col.id,
          header: () => col.header as React.ReactNode,
          cell: (info: CellContext<T, unknown>) => {
            const value = col.cell ? col.cell(info) : info.getValue();
            if (showCheckbox && index === 0) {
              const isChecked = selectedRows.some(
                (row) => row === info.row.original
              );
              return (
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => {
                      let updated: T[];
                      if (e.target.checked) {
                        updated = [...selectedRows, info.row.original];
                      } else {
                        updated = selectedRows.filter(
                          (r) => r !== info.row.original
                        );
                      }
                      setSelectedRows(updated);
                      onRowSelect(updated);
                    }}
                  />
                  {value}
                </div>
              );
            }
            return value;
          },
          enableSorting: col.showSort === true || col.enableSorting === true,
        })
      : columnHelper.accessor(
          (row) =>
            col.accessorKey ? (row as any)[col.accessorKey] : undefined,
          {
            id: (col.id || col.accessorKey) as string,
            header: () => col.header as React.ReactNode,
            cell: (info: CellContext<T, unknown>) => {
              const value = col.cell ? col.cell(info) : info.getValue();
              if (showCheckbox && index === 0) {
                const isChecked = selectedRows.some(
                  (row) => row === info.row.original
                );
                return (
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => {
                        let updated: T[];
                        if (e.target.checked) {
                          updated = [...selectedRows, info.row.original];
                        } else {
                          updated = selectedRows.filter(
                            (r) => r !== info.row.original
                          );
                        }
                        setSelectedRows(updated);
                        onRowSelect(updated);
                      }}
                    />
                    {value}
                  </div>
                );
              }
              return value;
            },
            enableSorting: col.showSort === true || col.enableSorting === true,
          }
        );

    baseColumns.push(buildAccessor);
  });

  if (showActions) {
    baseColumns.push(
      columnHelper.display({
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {actions(row.original)}
          </div>
        ),
        size: 60,
      })
    );
  }

  const table = useReactTable({
    data,
    columns: baseColumns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  // Header checkbox state
  const allSelected = data.length > 0 && selectedRows.length === data.length;
  const someSelected = selectedRows.length > 0 && !allSelected;

  const toggleSelectAll = (checked: boolean) => {
    let updated: T[] = [];
    if (checked) {
      updated = [...data];
    }
    setSelectedRows(updated);
    onRowSelect(updated);
  };

  return (
    <div
      className={`overflow-x-auto overflow-y-visible hide-scrollbar rounded-[16px] ${className}`}
    >
      <div className="relative md:w-full sm:w-[143px] w-[100px]">
        <table className="md:w-full text-sm text-left">
          <thead className="bg-white text-[#252525] mb-2">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <th
                    key={header.id}
                    className={`px-5 py-3 text-[#252525] text-sm font-normal min-w-[210px] border-b border-[#DEDEDEE5] ${
                      header.column.getCanSort()
                        ? "cursor-pointer select-none"
                        : ""
                    }`}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder ? null : (
                      <div className="flex items-center gap-2">
                        {showCheckbox && index === 0 && (
                          <input
                            type="checkbox"
                            checked={allSelected}
                            ref={(el) => {
                              if (el) el.indeterminate = someSelected;
                            }}
                            onClick={(e) => e.stopPropagation()}
                            onChange={(e) => toggleSelectAll(e.target.checked)}
                          />
                        )}
                        <span>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </span>
                        {header.column.getCanSort() && (
                          <span className="w-3 h-3 flex items-center">
                            {header.column.getIsSorted() === "asc" ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 15l7-7 7 7"
                                />
                              </svg>
                            ) : header.column.getIsSorted() === "desc" ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            ) : (
                              <img
                                src={sortIcon}
                                alt="sort icon"
                                className="w-5"
                              />
                            )}
                          </span>
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {data?.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (showActions ? 1 : 0)}
                  className="px-5 py-10 text-center text-gray-500 text-sm bg-white rounded-b-lg"
                >
                  <div className="flex flex-col items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-gray-400 mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V7a2 2 0 012-2h5l2 2h5a2 2 0 012 2v10a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="font-medium">No data found</span>
                  </div>
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="bg-white mb-3 transition-colors duration-200 border-b border-[#DEDEDEE5] last:border-b-0"
                >
                  {row.getVisibleCells().map((cell, colIndex) => {
                    const isClickable = clickableColumns.includes(colIndex);
                    return (
                      <td
                        key={cell.id}
                        className={`px-5 py-3 ${
                          isClickable ? "cursor-pointer" : ""
                        }`}
                        onClick={
                          isClickable
                            ? () => onCellClick(row.original, cell, colIndex)
                            : undefined
                        }
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TanDataTable;