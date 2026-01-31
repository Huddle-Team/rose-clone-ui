import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ShoppingCart, ChevronLeft, ChevronRight, Truck, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Product } from '@/data/products';
import { useStore } from '@/contexts/StoreContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const { toast } = useToast();
  const inWishlist = isInWishlist(product.id);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    toast({
      title: 'Добавлено в корзину',
      description: product.name,
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
    toast({
      title: inWishlist ? 'Удалено из избранного' : 'Добавлено в избранное',
      description: product.name,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
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
      case 'Крупный бутон':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Link to={`/product/${product.slug}`}>
      <Card
        className="group overflow-hidden card-hover cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image container */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.badges.map((badge) => (
              <Badge key={badge} className={`${getBadgeClass(badge)} text-xs px-2 py-0.5`}>
                {badge}
              </Badge>
            ))}
            {product.oldPrice && (
              <Badge className="badge-sale text-xs px-2 py-0.5">
                -{Math.round((1 - product.price / product.oldPrice) * 100)}%
              </Badge>
            )}
          </div>

          {/* Wishlist button */}
          <button
            onClick={handleToggleWishlist}
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white transition-colors"
          >
            <Heart
              className={`h-4 w-4 transition-colors ${inWishlist ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
            />
          </button>

          {/* Image navigation */}
          {product.images.length > 1 && isHovered && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white transition-opacity"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white transition-opacity"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}

          {/* Image dots */}
          {product.images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {product.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-primary' : 'bg-white/60'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Quick view on hover */}
          {isHovered && (
            <div className="absolute bottom-2 right-2 animate-fade-in">
              <div className="bg-white/90 px-2 py-1 rounded text-xs flex items-center gap-1">
                <Eye className="h-3 w-3" />
                Быстрый просмотр
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* Name */}
          <h3 className="font-medium text-sm line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Composition preview */}
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
            {product.quantity} роз {product.stemLength}см
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg font-bold text-primary">{formatPrice(product.price)} ₽</span>
            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.oldPrice)} ₽
              </span>
            )}
          </div>

          {/* Delivery */}
          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
            <Truck className="h-3 w-3" />
            <span>{product.deliveryTime}</span>
          </div>

          {/* Purchases */}
          {product.purchases24h > 0 && (
            <p className="text-xs text-muted-foreground mb-3">
              🔥 {product.purchases24h} покупок за 24ч
            </p>
          )}

          {/* Actions */}
          <div className="flex gap-2">
            <Button
              onClick={handleAddToCart}
              className="flex-1 h-9 text-sm"
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              В корзину
            </Button>
          </div>

          {/* One-click buy */}
          <button className="w-full text-xs text-primary hover:underline mt-2">
            Купить в 1 клик
          </button>
        </div>
      </Card>
    </Link>
  );
}
