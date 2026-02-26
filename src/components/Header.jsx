import { HiClock, HiBell, HiPencil, HiOutlineInbox, HiMenuAlt2 } from "react-icons/hi";

const Header = ({ onMenuClick }) => {
    return (
        <header className="flex justify-between items-center py-4 px-4 sm:py-5 sm:px-10 bg-white border-b border-[#F2F2F2] rounded-b-[24px] sm:rounded-b-[32px] shadow-[0_2px_15px_rgba(0,0,0,0.02)] z-30">
            <div className="flex items-center gap-3">
                <button
                    onClick={onMenuClick}
                    className="p-2 -ml-2 hover:bg-gray-50 rounded-lg transition-colors lg:hidden text-[#1A1A1A]"
                >
                    <HiMenuAlt2 className="text-2xl" />
                </button>
                <h2 className="text-lg sm:text-2xl font-bold text-[#1A1A1A]">People</h2>
            </div>

            <div className="flex items-center gap-2 sm:gap-6">
                {/* MST Pill - Hidden on extra small mobile */}
                <div className="hidden sm:block bg-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-[#1A1A1A] border border-[#EEEEEE] shadow-sm">
                    MST
                </div>

                {/* Time & Edit Pill - More compact on mobile */}
                <div className="flex items-center bg-white rounded-full border border-[#EEEEEE] shadow-sm overflow-hidden scale-90 sm:scale-100 origin-right sm:origin-center">
                    <div className="flex items-center gap-2 px-3 sm:px-5 py-2 border-r border-[#EEEEEE]">
                        <HiClock className="text-[#1A1A1A] text-lg sm:text-xl" />
                        <span className="text-sm sm:text-base font-bold text-[#1A1A1A]">02:03:02</span>
                    </div>
                    <button className="px-3 sm:px-5 py-2 hover:bg-gray-50 transition-colors text-[#1A1A1A]">
                        <HiPencil className="text-lg sm:text-xl" />
                    </button>
                </div>

                {/* Notification/Inbox Button - Scaled on mobile */}
                <button className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-full border border-[#EEEEEE] shadow-sm hover:bg-gray-50 transition-all text-[#1A1A1A] scale-90 sm:scale-100">
                    <HiOutlineInbox className="text-xl sm:text-2xl" />
                    <span className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#FF4D4F] rounded-full border-2 border-white"></span>
                </button>

                {/* Profile Avatar */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-md cursor-pointer hover:scale-105 transition-transform flex-shrink-0">
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
