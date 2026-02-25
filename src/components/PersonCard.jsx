import React from 'react';

const PersonCard = ({ person }) => {
    return (
        <div className="bg-white border border-gray-100 rounded-[45px] p-8 flex flex-col items-center gap-6 shadow-sm hover:shadow-2xl hover:shadow-gray-200/30 transition-all duration-500 group cursor-pointer relative">

            <div className="relative">
                <div className="w-40 h-40 rounded-full overflow-hidden border-[6px] border-white shadow-xl group-hover:scale-105 transition-transform duration-500">
                    <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Status Icon Badge - Direct Overlay */}
                <div className="absolute bottom-1 right-1 w-16 h-16 transform translate-x-1/6 translate-y-1/6 group-hover:scale-110 transition-transform flex items-center justify-center p-0.5 pointer-events-none">
                    <img
                        src={person.statusIcon}
                        alt="icon"
                        className="w-full h-full object-contain filter drop-shadow-lg"
                    />
                </div>
            </div>

            <div className="text-center mt-4">
                <h3 className="text-[26px] font-bold text-[#1A1A1A] leading-tight group-hover:text-black transition-colors">{person.name}</h3>
                <p className="text-lg font-medium mt-2 capitalize tracking-tight" style={{ color: person.roleColor || '#947550' }}>{person.role}</p>
            </div>

            <div className="flex gap-2.5 mt-2 justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-[#FFC53D]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#52C41A]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#1890FF]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#FF7A45]"></div>
            </div>
        </div>
    );
};

export default PersonCard;
