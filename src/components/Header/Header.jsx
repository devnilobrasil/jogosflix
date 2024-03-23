


function Header() {
    return (
        <header className="bg-bgColor p-8 font-roboto">
            <div className="block flex">
                <div className="flex flex-1 border">
                    <h1 className='text-3xl text-whiteColor'>
                        Jogos
                    </h1>
                </div>
                <nav className=" flex-1 border ">
                    <ul className="
                    flex
                    items-center
                    h-full
                    justify-evenly
                    text-whiteColor">
                        <li><a className="hover:text-redHover hover:duration-300 " href="#">Home</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;