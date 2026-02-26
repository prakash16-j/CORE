import React from 'react';

const PersonCard = ({ person }) => {
    return (
        <div className="bg-white border border-gray-100 rounded-[32px] p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-2xl hover:shadow-gray-200/30 transition-all duration-500 group cursor-pointer relative w-full aspect-square">

            <div className="relative mb-2">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500">
                    <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Status Icon Badge - Direct Overlay */}
                <div className="absolute bottom-0 right-0 w-10 h-10 transform group-hover:scale-110 transition-transform flex items-center justify-center pointer-events-none">
                    <img
                        src={person.statusIcon}
                        alt="icon"
                        className="w-full h-full object-contain filter drop-shadow-md"
                    />
                </div>
            </div>

            <div className="text-center">
                <h3 className="text-xl font-bold text-[#1A1A1A] leading-tight group-hover:text-black transition-colors">{person.name}</h3>
                <p className="text-sm font-semibold mt-1 capitalize tracking-tight" style={{ color: person.roleColor || '#947550' }}>{person.role}</p>
            </div>

            <div className="flex gap-2.5 mt-4 justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFC53D]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#52C41A]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#1890FF]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF7A45]"></div>
            </div>
        </div>
    );
};

export default PersonCard;
