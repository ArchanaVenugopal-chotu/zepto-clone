import './Footer.scss';

function Footer(){
    return(
        <div className="Footer">
            <div className="Footer-container">
                <div className="home">
                    <img alt="HOME" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" class="relative overflow-hidden false " src="https://ik.imagekit.io/jupdt2k6txi/app/inventory/3c988dd4-7ebc-49bf-bb1b-ba582571d88f-Home_ActiveIcon.svg" />
                    <div className="home-text">Zepto</div>
                </div>
                <div className="categories">
                    <img alt="CATEGORIES" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" class="relative overflow-hidden false " src="https://ik.imagekit.io/jupdt2k6txi/app/inventory/7bb8a9d8-0e9b-41bc-80d2-5e4222005372-Categories_InactiveIcon.svg" />
                    <div className="categories-text">Categories</div>
                </div>
                <div className="cafe">
                    <img alt="Cafe" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" class="relative overflow-hidden false " src="https://ik.imagekit.io/jupdt2k6txi/inventory/banner/f8649eb2-41e3-4221-892e-61f26a520437.svg" />
                    <div className="cafe-text">Cafe</div>
                </div>
                <div className="cart">
                    <img alt="CART" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" class="relative overflow-hidden false " src="https://ik.imagekit.io/jupdt2k6txi/app/inventory/3f7836ba-cf57-492a-b768-13fca2056a0d-Cart_InactiveIcon.svg" />
                    <div className="cart-text">Cart</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;