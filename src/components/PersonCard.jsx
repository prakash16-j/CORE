import React from 'react';

const PersonCard = ({ person }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-[20px] p-6 flex flex-col items-center gap-4 shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300 group cursor-pointer relative overflow-hidden">

            <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Status Icon Badge */}
                <div className="absolute bottom-1 right-1 bg-white p-2 rounded-xl shadow-lg border border-gray-50 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform">
                    <span className="text-xl leading-none">{person.statusIcon}</span>
                </div>
            </div>

            <div className="text-center mt-2">
                <h3 className="text-lg font-bold text-gray-800 tracking-tight group-hover:text-brand-dark transition-colors">{person.name}</h3>
                <p className="text-xs font-semibold text-gray-400 mt-1 uppercase tracking-wider">{person.role}</p>
            </div>

            <div className="flex gap-1.5 mt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-sm shadow-yellow-200"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-sm shadow-green-200"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm shadow-blue-200"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-sm shadow-orange-200"></div>
            </div>
        </div>
    );
};

export default PersonCard;
