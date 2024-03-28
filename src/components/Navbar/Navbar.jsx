import "./Navbar.css"
export const Navbar = ()=>{
    return (
        <header className="heading d-flex align-center">
             <h1 className="heading-1">
                <a className="link" href="/">
                    TravelO
                </a>
             </h1>
            <div className="form-container d-flex align-center cursor-pointer shadow">
                <span className="form-option">Any Where</span>
                <span className="border-right-1px"></span>
                <span className="form-option">Any Week</span>
                <span className="border-right-1px"></span>
                <span className="form-option">Add Guests</span>
                <span class="material-symbols-outlined">search</span>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </div>


             <nav className="d-flex align-center gap-large" >
                <div className="nav d-flex align-center cursor-pointer">
                <span className="material-icons-outlined profile-option menu ">menu</span>
                <span className="material-icons-outlined profile-option person">person_2</span>
                
                </div>
            </nav>
        </header>
    )
}