import image from './image/no_image.png'
const Portfolio = () => {
    return(
        
        <div id="portfolio"  className="portfolio">
            <div className="portfolio__title">
               <h1 className="portfolio__h1">Portfolio</h1>
            </div>
            <div className="container">
                <div className="portfolio__items">
                    <div className="portfolio__col">
                        <img src={image} alt="" className="portfolio__col-img" />
                        <a href="#" className="portfolio__a">link to project</a>
                    </div>
                    <div className="portfolio__col">
                        <img src={image} alt="" className="portfolio__col-img" />
                        <a href="#" className="portfolio__a">link to project</a>
                    </div>
                    <div className="portfolio__col">
                        <img src={image} alt="" className="portfolio__col-img" />
                        <a href="#" className="portfolio__a">link to project</a>
                    </div>
                </div>
                <p className="portfolio__p">
                <a href="https://github.com/x-treme-dev" className="portfolio__a">More...</a>
                </p>
            </div>
           
        </div>
          
    );
}

export default Portfolio;
