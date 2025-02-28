import photo from './photo.png'
import speech from './speech.png'

 const Home = () => {
    return(
        <div className="container">
         <nav>
            <ul className="nav-menu">
                <li className="nav-menu__li"><a href="#" className="nav-menu__a">Home</a></li>
                <li className="nav-menu__li"><a href="#" className="nav-menu__a">About me</a></li>
                <li className="nav-menu__li"><a href="#" className="nav-menu__a">Skills</a></li>
                <li className="nav-menu__li"><a href="#" className="nav-menu__a">Portfolio</a></li>
                <li className="nav-menu__li"><a href="#" className="nav-menu__a">Contacts</a></li>
            </ul> 
        </nav>
        <main>
            <div className="home">
                <div className="name">
                    <h1 className="name__h1">Igor'<br/>Yurchenko</h1>
                </div>
                <div className="photo">
                    <div className="photo__des">web-developer, designer,<br/>Crimea, Simferopol</div>
                    <div className="photo__wrap">
                        <img src={photo} alt="photo" className="photo__img"></img>
                    </div>
                </div>
                <div className="speach">
                    <div className="speach__langswitch">
                        <a href="#" className="speach__a">RU|<span className="toggleLang">ENG</span></a>
                    </div>
                    <div className="speach__position">
                        <img src={speech} alt="photo" className="speach__img" width="250px"></img>
                    </div>
                 </div>
            </div>
        </main>
        </div>
    );
}

export default Home;
