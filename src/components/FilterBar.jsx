import React from 'react';

const FilterBar = () => {
    return (
        <div className="flex flex-wrap items-center justify-between p-8 bg-white">
            <div className="relative w-full max-w-md">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                <input
                    type="text"
                    placeholder="Search by Employee Name or Number"
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all placeholder:text-gray-400"
                />
            </div>

            <div className="flex items-center gap-3">
                <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    📥
                </button>
                <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    🎛️
                </button>
                <button className="p-3 bg-brand-dark text-white rounded-xl hover:bg-black transition-colors shadow-lg">
                    ➕
                </button>

                <div className="flex items-center ml-4 bg-gray-50 p-1 rounded-xl border border-gray-200">
                    <button className="p-2 bg-white shadow-sm rounded-lg text-lg">
                        🔲
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors text-lg">
                        〓
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors text-lg">
                        🌳
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
