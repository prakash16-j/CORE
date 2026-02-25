import { HiSearch, HiDownload, HiFilter, HiPlus, HiViewGrid, HiViewList, HiOutlineShare } from "react-icons/hi";

const FilterBar = () => {
    return (
        <div className="flex flex-wrap items-center justify-between p-8 bg-white gap-6">
            <div className="relative w-full max-w-md">
                <HiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                <input
                    type="text"
                    placeholder="Search by Employee Name or Number"
                    className="w-full pl-16 pr-6 py-4 bg-white border border-gray-100 rounded-full text-base focus:outline-none focus:ring-4 focus:ring-brand-accent/5 focus:border-brand-accent transition-all placeholder:text-gray-400 shadow-sm"
                />
            </div>

            <div className="flex items-center gap-4">
                <button className="w-12 h-12 flex items-center justify-center border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all text-gray-600 shadow-sm text-xl">
                    <HiDownload />
                </button>
                <button className="w-12 h-12 flex items-center justify-center border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all text-gray-600 shadow-sm text-xl">
                    <HiFilter />
                </button>
                <button className="w-12 h-12 flex items-center justify-center bg-[#333333] text-white rounded-2xl hover:bg-black transition-all shadow-lg text-2xl">
                    <HiPlus />
                </button>

                <div className="flex items-center ml-4 bg-[#F8F9FA] p-1.5 rounded-[20px] border border-gray-100 shadow-inner">
                    <button className="w-10 h-10 flex items-center justify-center bg-[#333333] text-white rounded-xl shadow-md transition-all">
                        <HiViewGrid className="text-xl" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-all">
                        <HiViewList className="text-xl" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-all">
                        <HiOutlineShare className="text-xl rotate-90" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
