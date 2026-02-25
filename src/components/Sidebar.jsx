import { HiHome, HiUser, HiUserGroup, HiUserAdd, HiCog, HiChevronRight, HiChevronDoubleLeft, HiDocumentReport, HiFolderOpen } from "react-icons/hi";

const Sidebar = () => {
    const menuItems = [
        { name: 'Home', icon: <HiHome /> },
        { name: 'My Info', icon: <HiUser />, hasArrow: true },
        { name: 'People', icon: <HiUserGroup />, active: true },
        { name: 'Team Management', icon: <HiUserGroup />, hasArrow: true },
        { name: 'Project Setup', icon: <HiFolderOpen />, hasArrow: true },
        { name: 'Hiring', icon: <HiUserAdd /> },
        { name: 'Report', icon: <HiDocumentReport /> },
    ];

    return (
        <aside className="w-72 bg-brand-dark min-h-screen p-6 flex flex-col justify-between text-white/60">
            <div>
                <div className="flex items-center justify-between mb-12">
                    <div className="h-10 flex-shrink-0">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="h-full w-auto object-contain"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = '<span class="text-2xl font-black text-white tracking-tighter">CORE</span>';
                            }}
                        />
                    </div>
                    <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-white/40 hover:text-white hover:bg-white/5 transition-all">
                        <HiChevronDoubleLeft className="text-xl" />
                    </button>
                </div>

                <nav className="flex flex-col gap-2">
                    {menuItems.map((item) => (
                        <div
                            key={item.name}
                            className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${item.active
                                ? 'bg-white text-brand-dark font-semibold'
                                : 'hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-xl leading-none">{item.icon}</span>
                                <span className="text-sm">{item.name}</span>
                            </div>
                            {item.hasArrow && (
                                <span className={`text-base ${item.active ? 'text-brand-dark' : 'text-white/30'}`}>
                                    <HiChevronRight />
                                </span>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            <div className="mt-auto">
                <div className="flex items-center gap-4 p-3 hover:bg-white/5 hover:text-white rounded-xl cursor-pointer transition-all">
                    <span className="text-xl leading-none"><HiCog /></span>
                    <span className="text-sm">Settings</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
