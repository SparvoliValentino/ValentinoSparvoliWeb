const Header = ()=>{
    return(
        <div className="w-full p-2">
            <nav>
                <ul className="w-full flex justify-evenly items-center">
                    <li className="text-white text-[20px] hover:text-gray-200">Proyects</li>
                    <li className="text-white text-[20px] hover:text-gray-200">Studies</li>
                    <li className="text-white text-[20px] hover:text-gray-200">About me</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;