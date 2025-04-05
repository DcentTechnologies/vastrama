import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
  } from "recharts";
  import {
    CircleDollarSign, PackageCheck, Shirt, Users, AlertTriangle,
  } from "lucide-react";
  
  const dummyStats = [
    { label: "Total Sales", value: "₹85,400", icon: <CircleDollarSign className="w-6 h-6 text-green-600" /> },
    { label: "Orders", value: "430", icon: <PackageCheck className="w-6 h-6 text-blue-600" /> },
    { label: "Products", value: "122", icon: <Shirt className="w-6 h-6 text-purple-600" /> },
    { label: "Customers", value: "310", icon: <Users className="w-6 h-6 text-yellow-600" /> },
  ];
  
  const dummyOrders = [
    { id: "INV-001", customer: "Alice", date: "2025-04-01", total: "₹1,200" },
    { id: "INV-002", customer: "Bob", date: "2025-04-02", total: "₹900" },
    { id: "INV-003", customer: "Charlie", date: "2025-04-02", total: "₹1,500" },
  ];
  
  const chartData = [
    { name: "Mon", sales: 4000 },
    { name: "Tue", sales: 3000 },
    { name: "Wed", sales: 5000 },
    { name: "Thu", sales: 4000 },
    { name: "Fri", sales: 6000 },
    { name: "Sat", sales: 2500 },
    { name: "Sun", sales: 4800 },
  ];
  
  const pieData = [
    { name: "T-Shirts", value: 400 },
    { name: "Jeans", value: 300 },
    { name: "Jackets", value: 200 },
    { name: "Shoes", value: 100 },
  ];
  
  const outOfStock = [
    { product: "Blue T-Shirt", stock: 0 },
    { product: "Black Jeans", stock: 2 },
  ];
  
  const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444"];
  
  const Dashboard = () => {
    return (
      <div className="p-6 max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
  
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dummyStats.map((stat) => (
            <div
            key={stat.label}
            className="bg-white rounded-2xl shadow hover:shadow-md transition flex flex-col justify-center h-full p-5"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-100 rounded-full">{stat.icon}</div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-xl font-semibold text-gray-800">{stat.value}</p>
              </div>
            </div>
          </div>
          ))}
        </div>
  
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-5 shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Weekly Sales</h2>
            <ResponsiveContainer width="100%" height={240}>
  <BarChart
    data={chartData}
    margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
    barCategoryGap={24}
  >
    <XAxis dataKey="name" stroke="#888" />
    <YAxis stroke="#888" />
    <Tooltip />
    <Bar dataKey="sales" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={20} />
  </BarChart>
</ResponsiveContainer>
          </div>
  
          <div className="bg-white rounded-2xl p-5 shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Top Selling Categories</h2>
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
  
        {/* Out of Stock */}
        <div className="bg-white rounded-2xl p-5 shadow">
          <h2 className="text-xl font-semibold text-red-600 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" /> Out of Stock Alerts
          </h2>
          <ul className="list-disc pl-6 text-sm text-gray-700">
            {outOfStock.map((item, i) => (
              <li key={i}>
              <span className="font-medium">{item.product}</span> —{" "}
              {item.stock === 0 ? (
                <span className="text-red-600 font-semibold">Out of stock</span>
              ) : (
                `only ${item.stock} left`
              )}
            </li>
            ))}
          </ul>
        </div>
  
        {/* Recent Orders */}
        <div className="bg-white rounded-2xl p-5 shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="text-left px-4 py-3">Order ID</th>
                  <th className="text-left px-4 py-3">Customer</th>
                  <th className="text-left px-4 py-3">Date</th>
                  <th className="text-right px-4 py-3">Total</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {dummyOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{order.id}</td>
                    <td className="px-4 py-2">{order.customer}</td>
                    <td className="px-4 py-2">{order.date}</td>
                    <td className="px-4 py-2 text-right">{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;