import "./brands.scss";

const Brands = () => {

    return (
        <div className="brands">
            <p className="brands__title">Бренды</p>
            <div className="brands__images">
                <div className="brands__images__image"><img src="/best-products/airwick.png" /></div>
                <div className="brands__images__image"><img src="/best-products/fresh.png" /></div>
                <div className="brands__images__image"><img src="/best-products/sibiar.png" width={156} height={46}/></div>
                <div className="brands__images__image"><img src="/best-products/cotton.png" /></div>
                <div className="brands__images__image"><img src="/best-products/camay.png" /></div>
            </div>
        </div>
    );
};

export default Brands;
