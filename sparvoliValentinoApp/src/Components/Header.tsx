const Header = ()=>{

    const handleScroll = (targetId: string) => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return(
        <div className="w-full border-b-2 border-b-blue-500">
            <div className="max-w-[1000px] mx-auto flex justify-evenly items-center p-2">
                <div className="flex w-2/4 items-center justify-start">
                    <h2 className="text-white text-[50px] text-outline font-black">VS</h2>
                </div>
                <nav className="w-2/4">
                    <ul className="w-full flex justify-end items-center gap-10">
                        <li className="text-white text-[20px] hover:text-gray-400 cursor-pointer font-poppins" onClick={() => handleScroll('projects')}>Proyects</li>
                        <li className="text-white text-[20px] hover:text-gray-400 cursor-pointer  font-poppins" onClick={() => handleScroll('studies')}>Studies</li>
                        <li className="text-white text-[20px] hover:text-gray-400 cursor-pointer  font-poppins" onClick={() => handleScroll('aboutme')}>About me</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;