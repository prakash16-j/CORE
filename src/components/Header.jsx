import { HiClock, HiBell, HiPencil } from "react-icons/hi";

const Header = () => {
    return (
        <header className="flex justify-between items-center py-4 px-8 bg-white border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800">People</h2>

            <div className="flex items-center gap-4">
                <div className="bg-gray-50 px-3 py-1 rounded-lg text-xs font-medium text-gray-500 border border-gray-200">
                    MST
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg border border-gray-200">
                    <HiClock className="text-gray-400" />
                    <span className="text-sm font-medium text-gray-700">02:03:02</span>
                </div>
                <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200 text-gray-500">
                    <HiPencil />
                </button>
                <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200 text-gray-500">
                    <HiBell />
                </button>
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 shadow-sm cursor-pointer ml-2">
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="User profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
