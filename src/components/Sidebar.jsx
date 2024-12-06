import React, { useState } from "react";

const Sidebar = () => {
    const [active, setActive] = useState("Dashboard");
    const [isOpen, setIsOpen] = useState(true);
    const [dropdown, setDropdown] = useState(false);

    const menuItems = [
        { name: "Dashboard", icon: "bi bi-house-door" },
        { name: "Projects", icon: "bi bi-folder", },
        { name: "Favorites", icon: "bi bi-check-circle" },
        { name: "Inbox", icon: "bi bi-calendar-event" },
        { name: "Order Lists", icon: "bi bi-gear" },
        { name: "Product Stock", icon: "bi bi-gear" },
    ];

    return (
        <div className={`${isOpen ? "w-72" : "w-20"} bg-white h-screen shadow-lg border-r transition-all duration-300`}>
            {/* Logo Section */}
            <div className="flex items-center justify-center h-16 bg-gradient-to-r from-blue-500 to-purple-500 shadow-md">
                <h1 className={`${isOpen ? "block" : "hidden"} text-white font-bold text-xl`}>
                    MyBrand
                </h1>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="ml-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                >
                    <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"} text-blue-500`}></i>
                </button>
            </div>

            {/* Menu Items */}
            <div className="mt-8 px-4">
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index} className="mb-4">
                            {/* Dropdown Menu */}
                            {item.dropdown ? (
                                <div>
                                    <button
                                        onClick={() => setDropdown(!dropdown)}
                                        className={`flex items-center justify-between p-3 rounded-lg w-full transition-all ${active === item.name
                                            ? "bg-blue-100 text-blue-500"
                                            : "text-gray-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        <div className="flex items-center">
                                            <i className={`${item.icon} text-xl`}></i>
                                            {isOpen && <span className="ml-4">{item.name}</span>}
                                        </div>
                                        {isOpen && (
                                            <i
                                                className={`bi ${dropdown ? "bi-chevron-up" : "bi-chevron-down"
                                                    }`}
                                            ></i>
                                        )}
                                    </button>
                                    {dropdown && isOpen && (
                                        <ul className="mt-2 ml-6 space-y-2">
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <button
                                                        onClick={() => setActive(subItem)}
                                                        className={`flex items-center p-2 rounded-lg w-full text-sm ${active === subItem
                                                            ? "bg-blue-100 text-blue-500"
                                                            : "text-gray-700 hover:bg-gray-100"
                                                            }`}
                                                    >
                                                        {subItem}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <button
                                    onClick={() => setActive(item.name)}
                                    className={`flex items-center p-3 rounded-lg w-full ${active === item.name
                                        ? "bg-blue-100 text-blue-500"
                                        : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                >
                                    <i className={`${item.icon} text-xl`}></i>
                                    {isOpen && <span className="ml-4">{item.name}</span>}
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
