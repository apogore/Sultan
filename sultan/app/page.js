import './page.css'; // Импорт стилей
import Header from './shared/header/header'; // Импорт компонента заголовка
import Footer from './shared/footer/footer'; 
import MiniCard from './shared/mini-card/mini-card';

const HomePage = () => {
    return (
        <div className="container">
            <div className="content">
              <Header className="header" />

              <div className='body'>
                <div className='section banner'>
                  <h3>Баннер с фоткой</h3>
                </div>
                <div className='section cards'> 
                  <h3>Акционные товары</h3>
                  <MiniCard className="mini-card" />
                </div>
                <div className='section category'> 
                  <h3>Категории товаров</h3>
                </div>
                <div className='section carousel'> 
                  <h3>Карусель акций</h3>
                </div>
                <div className='section best'>
                  <h3>Лучшие товары</h3>
                </div>
                <div className='section map'>
                  <h3>Геолокация</h3>
                </div>
              </div>
              
              <Footer className="footer" />

            </div>
        </div>
    );
};

export default HomePage;
