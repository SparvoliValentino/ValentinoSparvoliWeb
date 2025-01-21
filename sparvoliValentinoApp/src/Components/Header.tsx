const Header = ()=>{

    const handleScroll = (targetId: string) => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return(
        <div className="w-full p-2">
            <nav>
                <ul className="w-full flex justify-evenly items-center">
                    <li className="text-white text-[20px] hover:text-gray-400 cursor-pointer" onClick={() => handleScroll('projects')}>Proyects</li>
                    <li className="text-white text-[20px] hover:text-gray-400 cursor-pointer" onClick={() => handleScroll('studies')}>Studies</li>
                    <li className="text-white text-[20px] hover:text-gray-400 cursor-pointer" onClick={() => handleScroll('aboutme')}>About me</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;