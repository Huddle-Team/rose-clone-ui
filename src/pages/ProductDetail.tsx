import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingCart, Truck, Shield, Star, Minus, Plus, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Layout } from '@/components/layout/Layout';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { ProductCard } from '@/components/product/ProductCard';
import { products } from '@/data/products';
import { useStore } from '@/contexts/StoreContext';
import { useToast } from '@/hooks/use-toast';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const { toast } = useToast();

  const product = products.find((p) => p.slug === slug);
  const inWishlist = product ? isInWishlist(product.id) : false;

  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
          <Link to="/catalog">
            <Button>Вернуться в каталог</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const similarProducts = products
    .filter((p) => p.id !== product.id && (p.color === product.color || p.quantity === product.quantity))
    .slice(0, 4);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: 'Добавлено в корзину',
      description: `${product.name} (${quantity} шт.)`,
    });
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product.id);
    toast({
      title: inWishlist ? 'Удалено из избранного' : 'Добавлено в избранное',
      description: product.name,
    });
  };

  const getBadgeClass = (badge: string) => {
    switch (badge) {
      case 'Хит':
        return 'badge-hit';
      case 'Новинка':
        return 'badge-new';
      case 'Премиум':
      case 'VIP':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Layout>
      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: 'Каталог', href: '/catalog' },
            { label: 'Розы', href: '/catalog' },
            { label: product.name },
          ]}
        />

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.badges.map((badge) => (
                  <Badge key={badge} className={`${getBadgeClass(badge)} px-3 py-1`}>
                    {badge}
                  </Badge>
                ))}
                {product.oldPrice && (
                  <Badge className="badge-sale px-3 py-1">
                    -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                  </Badge>
                )}
              </div>

              {/* Navigation */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                {product.rating} ({product.reviewCount} отзывов)
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-primary">{formatPrice(product.price)} ₽</span>
              {product.oldPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {formatPrice(product.oldPrice)} ₽
                </span>
              )}
            </div>

            {/* Composition */}
            <Card className="p-4 mb-6 bg-secondary/50">
              <h3 className="font-semibold mb-2">Состав букета:</h3>
              <p className="text-muted-foreground">{product.composition}</p>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                <span>Страна: {product.type}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                <span>Высота: {product.stemLength} см</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                <span>Цвет: {product.color}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-500" />
                <span>Количество: {product.quantity} шт</span>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-medium">Количество:</span>
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-6">
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                В корзину за {formatPrice(product.price * quantity)} ₽
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleToggleWishlist}
              >
                <Heart className={`h-5 w-5 ${inWishlist ? 'fill-primary text-primary' : ''}`} />
              </Button>
            </div>

            <button className="w-full text-primary hover:underline mb-6">
              Купить в 1 клик
            </button>

            {/* Delivery Info */}
            <Card className="p-4">
              <div className="flex items-start gap-3 mb-4">
                <Truck className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">{product.deliveryTime}</p>
                  <p className="text-sm text-muted-foreground">Бесплатная доставка от 3000₽</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Гарантия свежести 7 дней</p>
                  <p className="text-sm text-muted-foreground">Вернём деньги, если цветы завянут раньше</p>
                </div>
              </div>
            </Card>

            {/* Purchases */}
            {product.purchases24h > 0 && (
              <p className="text-sm text-muted-foreground mt-4">
                🔥 {product.purchases24h} человек купили за последние 24 часа
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Описание</h2>
          <p className="text-muted-foreground">{product.description}</p>
        </section>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Похожие букеты</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}
