
// eslint-disable-next-line react/prop-types
const PortfolioItem = ({imgUrl, title, github, demo}) => {
    return (
        <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={`${imgUrl}`} alt={`${title}`}/>
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
                <a href={`${github}`}
                   className='btn'
                   target={'_blank'} rel="noreferrer"
                >Repo</a>
                <a href={`${demo}`}
                   className='btn btn-primary'
                   target={'_blank'} rel="noreferrer"
                >Demo</a>
            </div>
        </article>
    );
};

export default PortfolioItem;
