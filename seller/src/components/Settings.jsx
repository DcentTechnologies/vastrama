import { useState } from "react"; 
import { Switch } from "@headlessui/react"; 
import { Pencil, Trash2 } from "lucide-react";

const Settings = () => { 
    const [notificationsEnabled, setNotificationsEnabled] = useState(true); 
    const [darkMode, setDarkMode] = useState(false); 
    const [isPrivate, setIsPrivate] = useState(false); 
    const [passwordForm, setPasswordForm] = useState({ current: "", new: "", confirm: "" });

    const handlePasswordChange = (e) => { 
        e.preventDefault();
        console.log("Password updated:", passwordForm); 
    };

    const handleDeleteAccount = () => { 
        const confirm = window.confirm("Are you sure you want to delete your account?"); 
        if (confirm) { 
            alert("Account deleted."); } 
        };

    return ( 
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm space-y-8"> 
            <h2 className="text-2xl font-bold">Settings</h2>

            {/* Notifications */}
            <div className="border rounded-md p-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Notifications</h3>
                <Switch
                    checked={notificationsEnabled}
                    onChange={setNotificationsEnabled}
                    className={`${
                    notificationsEnabled ? "bg-blue-600" : "bg-gray-300"
                    } relative inline-flex items-center h-6 rounded-full w-11`}
                >
                    <span
                    className={`${
                        notificationsEnabled ? "translate-x-6" : "translate-x-1"
                    } inline-block w-4 h-4 transform bg-white rounded-full`}
                    />
                </Switch>
    </div>
    <p className="text-sm text-gray-500 mt-1">
      Receive order updates and promotions.
    </p>
  </div>

  {/* Privacy */}
  <div className="border rounded-md p-4">
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-medium">Privacy</h3>
      <Switch
        checked={isPrivate}
        onChange={setIsPrivate}
        className={`${
          isPrivate ? "bg-blue-600" : "bg-gray-300"
        } relative inline-flex items-center h-6 rounded-full w-11`}
      >
        <span
          className={`${
            isPrivate ? "translate-x-6" : "translate-x-1"
          } inline-block w-4 h-4 transform bg-white rounded-full`}
        />
      </Switch>
    </div>
    <p className="text-sm text-gray-500 mt-1">
      Toggle account visibility to customers.
    </p>
  </div>

  {/* Appearance */}
  <div className="border rounded-md p-4">
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-medium">Appearance</h3>
      <Switch
        checked={darkMode}
        onChange={setDarkMode}
        className={`${
          darkMode ? "bg-blue-600" : "bg-gray-300"
        } relative inline-flex items-center h-6 rounded-full w-11`}
      >
        <span
          className={`${
            darkMode ? "translate-x-6" : "translate-x-1"
          } inline-block w-4 h-4 transform bg-white rounded-full`}
        />
      </Switch>
    </div>
    <p className="text-sm text-gray-500 mt-1">Enable dark mode.</p>
  </div>

  {/* Change Password */}
  <div className="border rounded-md p-4">
    <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
      Change Password <Pencil size={16} className="text-gray-400" />
    </h3>
    <form onSubmit={handlePasswordChange} className="space-y-3">
      <div>
        <label className="block text-sm font-medium">Current Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded-md"
          value={passwordForm.current}
          onChange={(e) => setPasswordForm({ ...passwordForm, current: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">New Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded-md"
          value={passwordForm.new}
          onChange={(e) => setPasswordForm({ ...passwordForm, new: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Confirm New Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded-md"
          value={passwordForm.confirm}
          onChange={(e) => setPasswordForm({ ...passwordForm, confirm: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Update Password
      </button>
    </form>
  </div>

  {/* Danger Zone */}
  <div className="border border-red-300 rounded-md p-4">
    <h3 className="text-lg font-medium text-red-600 flex items-center gap-2">
      Delete Account <Trash2 size={16} />
    </h3>
    <p className="text-sm text-gray-500 mt-1">
      Once deleted, your account cannot be recovered.
    </p>
    <button
      onClick={handleDeleteAccount}
      className="mt-3 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
    >
      Delete My Account
    </button>
  </div>
</div>
); };

export default Settings;