import { useState } from "react";

const mockOrders = [
  {
    id: "ORD001",
    customer: "John Doe",
    date: "2025-04-01",
    amount: "₹2,499",
    status: "Shipped",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    date: "2025-03-30",
    amount: "₹1,799",
    status: "Pending",
  },
  {
    id: "ORD003",
    customer: "Amit Sharma",
    date: "2025-03-28",
    amount: "₹3,200",
    status: "Delivered",
  },
  {
    id: "ORD004",
    customer: "Priya Mehta",
    date: "2025-03-25",
    amount: "₹999",
    status: "Cancelled",
  },
];

const statusStyles = {
  Pending: "bg-yellow-100 text-yellow-800",
  Shipped: "bg-blue-100 text-blue-800",
  Delivered: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
};

const Orders = () => {
  const [orders] = useState(mockOrders);

  return (
    <div className="max-w-6xl mx-auto p-6 mt-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Order ID</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Customer</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Date</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Amount</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={order.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3">{order.id}</td>
                <td className="px-4 py-3">{order.customer}</td>
                <td className="px-4 py-3">{order.date}</td>
                <td className="px-4 py-3">{order.amount}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[order.status]}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;