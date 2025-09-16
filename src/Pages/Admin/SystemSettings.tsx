import React, { useState } from "react";

const SystemSettings = () => {
    const [fullName, setFullName] = useState("Jay");
    const [lastName, setLastName] = useState("Gerber");
    const [email, setEmail] = useState("JayGerber1@example.com");
    const [phone, setPhone] = useState("123-456789-000");

    return (
        <div className="w-full">
            {/* Tabs */}
            <div className="flex border-b border-gray-300 mb-6 text-sm font-medium text-gray-500">
                <button className="text-purple-700 border-b-2 border-purple-700 pb-2 px-4">
                    Profile Management
                </button>
                <button className="hover:text-gray-800 px-4 pb-2">Notification & Alerts</button>
                <button className="hover:text-gray-800 px-4 pb-2">Threshold & Climate</button>
            </div>

            {/* Personal Information */}
            <div className="flex flex-col gap-5">
                <div className="bg-white rounded-3xl p-5">
                    <p className="font-semibold text-gray-900 mb-1">
                        Personal Information
                    </p>
                    <p className="text-gray-600 text-sm">
                        Core identity and contact details of the Admin , View and Update your
                        name, contact, & login credentials.
                    </p>

                </div>

                <div className="bg-white rounded-3xl p-5 space-y-6">
                    {/* Profile Photo Section */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-700 text-lg font-semibold">
                            J
                        </div>
                        <button
                            type="button"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-gray-300 text-sm text-gray-700 hover:bg-gray-200 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12v8m-4-4h8"
                                />
                            </svg>
                            Upload/Change Photo
                        </button>
                    </div>

                    {/* Input Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="fullName"
                                className="block mb-1 text-sm font-medium text-gray-700"
                            >
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="lastName"
                                className="block mb-1 text-sm font-medium text-gray-700"
                            >
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-1 text-sm font-medium text-gray-700"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="phone"
                                className="block mb-1 text-sm font-medium text-gray-700"
                            >
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                type="text"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Save Changes Button */}
                    <button
                        type="button"
                        className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
                    >
                        Save Changes
                    </button>
                </div>
            </div>

            {/* Change Password Section Placeholder */}
            <div className="bg-white rounded-3xl p-5 mt-5">
                <p className="font-semibold text-gray-900 mb-1">Change Password</p>
                {/* Add your Change Password form or content here */}
            </div>
        </div>
    );
};

export default SystemSettings;
