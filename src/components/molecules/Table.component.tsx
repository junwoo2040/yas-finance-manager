/* components/molecules/Table.component.tsx */

/* Imports */
import { ReactNode } from "react";

interface IProps<T> {
  headers: { label: string; property: keyof T }[];
  data: { [P in keyof T]: ReactNode }[];
}

const Table = <T,>({ headers, data }: IProps<T>) => {
  return (
    <table className="h-fit w-full border-separate border-spacing-0 rounded-lg border-2 border-orange-500">
      <thead className="p-0 text-left">
        <tr className="bg-purple-500">
          {headers.map((header, index) => (
            <th className="p-2" key={index}>
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr className="odd:bg-white even:bg-gray-200" key={rowIndex}>
            {headers.map((header, headerIndex) => (
              <td className="p-2" key={headerIndex}>
                {row[header.property]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
