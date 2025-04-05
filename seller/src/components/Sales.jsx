import { useState } from "react";
import jsPDF from "jspdf"; 
import autoTable from "jspdf-autotable";

const mockOrders = [ { id: "001", customer: "Alice", date: "2025-04-01", amount: 1200 }, { id: "002", customer: "Bob", date: "2025-04-02", amount: 900 }, { id: "003", customer: "Charlie", date: "2025-03-28", amount: 1500 }, { id: "004", customer: "Diana", date: "2025-03-30", amount: 800 }, { id: "005", customer: "Eva", date: "2025-04-02", amount: 650 }, ];

const Sales = () => { const [orders] = useState(mockOrders); const [filteredOrders, setFilteredOrders] = useState(mockOrders); const [startDate, setStartDate] = useState(""); const [endDate, setEndDate] = useState("");

const handleFilter = () => { const filtered = orders.filter((order) => { const orderDate = new Date(order.date); const start = startDate ? new Date(startDate) : null; const end = endDate ? new Date(endDate) : null;

  return (
    (!start || orderDate >= start) &&
    (!end || orderDate <= end)
  );
});

setFilteredOrders(filtered);
};

const handleCSVExport = () => { const csvRows = [ ["Order ID", "Customer", "Date", "Amount"], ...filteredOrders.map((order) => [ order.id, order.customer, order.date, order.amount.toFixed(2), ]), ];

const csvString = csvRows.map((row) => row.join(",")).join("\n");
const blob = new Blob([csvString], { type: "text/csv" });

const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "sales_report.csv";
link.click();
};

const handlePDFExport = () => {
    const doc = new jsPDF();
    doc.text("Sales Report", 14, 16);
  
    autoTable(doc, {
      startY: 22,
      head: [["Order ID", "Customer", "Date", "Amount"]],
      body: filteredOrders.map((order) => [
        order.id,
        order.customer,
        order.date,
        order.amount.toFixed(2),
      ]),
      theme: "grid",
      styles: { fontSize: 10 },
    });
  
    doc.save("sales_report.pdf");
  };

const totalSales = filteredOrders.reduce( (acc, order) => acc + order.amount, 0 );

return ( <div className="p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-md"> <h2 className="text-2xl font-bold mb-4">Sales Overview</h2>


  <div className="flex flex-wrap items-end gap-4 mb-6">
    <div>
      <label className="block text-sm font-medium">Start Date</label>
      <input
        type="date"
        className="p-2 border rounded-md"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
    </div>

    <div>
      <label className="block text-sm font-medium">End Date</label>
      <input
        type="date"
        className="p-2 border rounded-md"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
    </div>

    <button
      onClick={handleFilter}
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
    >
      Filter
    </button>

    <button
      onClick={handleCSVExport}
      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
    >
      Export CSV
    </button>

    <button
      onClick={handlePDFExport}
      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
    >
      Export PDF
    </button>
  </div>

  <div className="overflow-x-auto">
    <table className="min-w-full border">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-2 px-4 border">Order ID</th>
          <th className="py-2 px-4 border">Customer</th>
          <th className="py-2 px-4 border">Date</th>
          <th className="py-2 px-4 border text-right">Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        {filteredOrders.map((order) => (
          <tr key={order.id} className="border-t">
            <td className="py-2 px-4 border">{order.id}</td>
            <td className="py-2 px-4 border">{order.customer}</td>
            <td className="py-2 px-4 border">{order.date}</td>
            <td className="py-2 px-4 border text-right">
              ₹{order.amount.toFixed(2)}
            </td>
          </tr>
        ))}
        <tr className="bg-gray-50 font-semibold">
          <td colSpan="3" className="py-2 px-4 text-right border">
            Total
          </td>
          <td className="py-2 px-4 text-right border">
            ₹{totalSales.toFixed(2)}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
); };

export default Sales;