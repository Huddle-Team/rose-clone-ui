import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, Instagram, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-xl">🌹</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">РусБукет</h3>
                <p className="text-xs text-muted-foreground">Доставка цветов</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Более 10 лет мы доставляем свежие цветы по Москве и области. Гарантия качества и своевременная доставка.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Каталог */}
          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors">
                  Все розы
                </Link>
              </li>
              <li>
                <Link to="/catalog?color=Красный" className="text-muted-foreground hover:text-primary transition-colors">
                  Красные розы
                </Link>
              </li>
              <li>
                <Link to="/catalog?shape=Коробка" className="text-muted-foreground hover:text-primary transition-colors">
                  В коробке
                </Link>
              </li>
              <li>
                <Link to="/catalog?shape=Корзина" className="text-muted-foreground hover:text-primary transition-colors">
                  В корзине
                </Link>
              </li>
              <li>
                <Link to="/catalog?badge=Премиум" className="text-muted-foreground hover:text-primary transition-colors">
                  Премиум букеты
                </Link>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Гарантии
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+74951234567" className="text-muted-foreground hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@rusbuket.ru" className="text-muted-foreground hover:text-primary transition-colors">
                  info@rusbuket.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  Москва, ул. Цветочная, д. 1
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  Ежедневно, 08:00 - 22:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 РусБукет. Все права защищены.</p>
            <div className="flex items-center gap-4">
              <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="Visa" className="h-6" />
              <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="MasterCard" className="h-6" />
              <img src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="Mir" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
