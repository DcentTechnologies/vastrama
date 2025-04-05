import { useState } from "react";
import { Pencil } from "lucide-react";

const Account = () => {
  const [sellerInfo, setSellerInfo] = useState({
    name: "John Doe",
    email: "seller@example.com",
    phone: "9876543210",
    bankName: "State Bank of India",
    accountNumber: "123456789012",
    ifscCode: "SBIN0000123",
    address: "123, MG Road, Bangalore, Karnataka",
    pincode: "560001",
    gstin: "22AAAAA0000A1Z5",
  });

  const [editable, setEditable] = useState({
    account: false,
    bank: false,
    address: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSellerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = (section) => {
    setEditable((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleSave = () => {
    console.log("Updated seller info:", sellerInfo);
    alert("Details updated successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Seller Account</h2>

      {/* Account Info */}
      <SectionHeader title="Account Information" editable={editable.account} onEdit={() => toggleEdit("account")} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Input label="Name" name="name" value={sellerInfo.name} onChange={handleChange} disabled={!editable.account} />
        <Input label="Email" name="email" value={sellerInfo.email} onChange={handleChange} disabled={!editable.account} />
        <Input label="Phone" name="phone" value={sellerInfo.phone} onChange={handleChange} disabled={!editable.account} />
        <Input label="GSTIN" name="gstin" value={sellerInfo.gstin} onChange={handleChange} disabled={!editable.account} />
      </div>

      {/* Bank Info */}
      <SectionHeader title="Bank Information" editable={editable.bank} onEdit={() => toggleEdit("bank")} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Input label="Bank Name" name="bankName" value={sellerInfo.bankName} onChange={handleChange} disabled={!editable.bank} />
        <Input label="Account Number" name="accountNumber" value={sellerInfo.accountNumber} onChange={handleChange} disabled={!editable.bank} />
        <Input label="IFSC Code" name="ifscCode" value={sellerInfo.ifscCode} onChange={handleChange} disabled={!editable.bank} />
      </div>

      {/* Address */}
      <SectionHeader title="Address" editable={editable.address} onEdit={() => toggleEdit("address")} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Textarea label="Address" name="address" value={sellerInfo.address} onChange={handleChange} disabled={!editable.address} />
        <Input label="Pincode" name="pincode" value={sellerInfo.pincode} onChange={handleChange} disabled={!editable.address} />
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSave}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

const Input = ({ label, name, value, onChange, disabled }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`w-full p-2 border rounded-md focus:ring ${disabled ? "bg-gray-100" : "bg-white focus:ring-blue-300"}`}
    />
  </div>
);

const Textarea = ({ label, name, value, onChange, disabled }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows="3"
      disabled={disabled}
      className={`w-full p-2 border rounded-md focus:ring ${disabled ? "bg-gray-100" : "bg-white focus:ring-blue-300"}`}
    />
  </div>
);

const SectionHeader = ({ title, editable, onEdit }) => (
  <div className="flex justify-between items-center mb-2">
    <h3 className="text-xl font-semibold">{title}</h3>
    <button onClick={onEdit} className="text-blue-600 hover:text-blue-800 flex items-center">
      <Pencil size={16} className="mr-1" />
      {editable ? "Done" : "Edit"}
    </button>
  </div>
);

export default Account;