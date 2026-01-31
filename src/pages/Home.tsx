import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/product/ProductCard';
import { products } from '@/data/products';

const benefits = [
  {
    icon: Truck,
    title: 'Бесплатная доставка',
    description: 'При заказе от 3000₽ по Москве',
  },
  {
    icon: Clock,
    title: 'Доставка за 2 часа',
    description: 'Быстрая доставка по всему городу',
  },
  {
    icon: Shield,
    title: 'Гарантия свежести',
    description: 'Только свежие цветы от поставщиков',
  },
  {
    icon: Award,
    title: '10 лет опыта',
    description: 'Более 50 000 довольных клиентов',
  },
];

const categories = [
  {
    title: '25 роз',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop',
    href: '/catalog?quantity=25',
  },
  {
    title: '51 роза',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop',
    href: '/catalog?quantity=51',
  },
  {
    title: '101 роза',
    image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=400&fit=crop',
    href: '/catalog?quantity=101',
  },
  {
    title: 'В коробке',
    image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400&h=400&fit=crop',
    href: '/catalog?shape=Коробка',
  },
];

export default function HomePage() {
  const featuredProducts = products.filter(p => p.badges.includes('Хит')).slice(0, 4);
  const newProducts = products.filter(p => p.badges.includes('Новинка')).slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[hsl(var(--rose-light))] to-[hsl(var(--accent))] overflow-hidden">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Свежие розы с
              <span className="text-primary"> доставкой</span> по Москве
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Более 200 вариантов букетов из роз. Доставка за 2 часа. Гарантия свежести 7 дней.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/catalog">
                <Button size="lg" className="text-lg px-8">
                  Смотреть каталог
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+74951234567">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  +7 (495) 123-45-67
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 md:opacity-40 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=800&fit=crop"
            alt="Roses"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center p-6 border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-secondary/50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Популярные категории</h2>
            <Link to="/catalog" className="text-primary hover:underline flex items-center gap-1">
              Все категории <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link key={category.title} to={category.href}>
                <Card className="overflow-hidden group card-hover">
                  <div className="aspect-square relative">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                      {category.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Хиты продаж</h2>
            <Link to="/catalog?badge=Хит" className="text-primary hover:underline flex items-center gap-1">
              Все хиты <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Products */}
      <section className="py-12 bg-secondary/50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Новинки</h2>
            <Link to="/catalog?badge=Новинка" className="text-primary hover:underline flex items-center gap-1">
              Все новинки <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Нужна помощь с выбором?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Позвоните нам, и наши флористы помогут подобрать идеальный букет для любого повода
          </p>
          <a href="tel:+74951234567">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              +7 (495) 123-45-67
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
