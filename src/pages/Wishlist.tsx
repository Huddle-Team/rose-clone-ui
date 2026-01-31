import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Layout } from '@/components/layout/Layout';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { products } from '@/data/products';
import { useStore } from '@/contexts/StoreContext';
import { useToast } from '@/hooks/use-toast';

export default function WishlistPage() {
  const { state, toggleWishlist, addToCart } = useStore();
  const { toast } = useToast();

  const wishlistProducts = products.filter((p) => state.wishlist.includes(p.id));

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product, 1);
    toast({
      title: 'Добавлено в корзину',
      description: product.name,
    });
  };

  const handleRemove = (productId: string, productName: string) => {
    toggleWishlist(productId);
    toast({
      title: 'Удалено из избранного',
      description: productName,
    });
  };

  if (wishlistProducts.length === 0) {
    return (
      <Layout>
        <div className="container-custom py-12">
          <Breadcrumbs items={[{ label: 'Избранное' }]} />
          
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Избранное пусто</h1>
            <p className="text-muted-foreground mb-6">
              Добавляйте понравившиеся букеты, нажимая на сердечко
            </p>
            <Link to="/catalog">
              <Button size="lg">
                Перейти в каталог
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-custom py-4">
        <Breadcrumbs items={[{ label: 'Избранное' }]} />

        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Избранное ({wishlistProducts.length})
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden group">
              <Link to={`/product/${product.slug}`}>
                <div className="relative aspect-square">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              
              <div className="p-4">
                <Link to={`/product/${product.slug}`} className="hover:text-primary transition-colors">
                  <h3 className="font-medium line-clamp-2 mb-2">{product.name}</h3>
                </Link>
                
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-lg font-bold text-primary">{formatPrice(product.price)} ₽</span>
                  {product.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.oldPrice)} ₽
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button
                    className="flex-1"
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    В корзину
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="text-muted-foreground hover:text-destructive"
                    onClick={() => handleRemove(product.id, product.name)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
