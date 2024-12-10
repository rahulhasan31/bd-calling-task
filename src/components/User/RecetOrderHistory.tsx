"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import Link from "next/link";

const data = [
  {
    orderId: "#738",
    date: "8 Sep, 2020",
    amount: "$135.00",
    products: 5,
    status: "Processing",
  },
  {
    orderId: "#703",
    date: "24 May, 2020",
    amount: "$25.00",
    products: 1,
    status: "On the way",
  },
  {
    orderId: "#130",
    date: "22 Oct, 2020",
    amount: "$250.00",
    products: 4,
    status: "Completed",
  },
  {
    orderId: "#561",
    date: "1 Feb, 2020",
    amount: "$35.00",
    products: 1,
    status: "Completed",
  },
  {
    orderId: "#536",
    date: "21 Sep, 2020",
    amount: "$578.00",
    products: 13,
    status: "Cancelled",
  },
  {
    orderId: "#492",
    date: "22 Oct, 2020",
    amount: "$345.00",
    products: 7,
    status: "Completed",
  },
];

export default function RecentOrderHistory() {
  return (
    <div className="mt-4 ms-4">
      {/* Header */}
      <div className="bg-white shadow-lg p-4 flex justify-between items-center rounded-md">
        <h1 className="text-2xl font-semibold">Recent Order History</h1>
        <button className="text-lg font-medium text-red-500 hover:underline">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-5 bg-white rounded-md shadow-lg">
        <Table
          aria-label="Recent Orders Table"
          className="w-full"
          classNames={{
            table: "w-full border-collapse",
            td: "text-sm p-3 border-b border-gray-200",
            th: "text-left text-sm font-semibold text-gray-700 border-b border-gray-200 p-3",
            tr: "hover:bg-gray-50",
          }}
        >
          <TableHeader>
            <TableColumn>Order ID</TableColumn>
            <TableColumn>Date</TableColumn>
            <TableColumn>Total</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Action</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell>{order.orderId}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>
                  <span
                    className={`py-1 px-2 rounded text-sm font-medium ${
                      order.status === "Completed"
                        ? "text-green-700 bg-green-100"
                        : order.status === "Cancelled"
                          ? "text-red-700 bg-red-100"
                          : "text-yellow-700 bg-yellow-100"
                    }`}
                  >
                    {order.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Link href={"/order-history/379"}>
                    <button className="text-blue-500 hover:underline">
                      View Details
                    </button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
