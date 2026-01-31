import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Layout } from '@/components/layout/Layout';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { useStore } from '@/contexts/StoreContext';

export default function CartPage() {
  const { state, removeFromCart, updateCartQuantity, getCartTotal, clearCart } = useStore();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const deliveryPrice = getCartTotal() >= 3000 ? 0 : 500;
  const totalWithDelivery = getCartTotal() + deliveryPrice;

  if (state.cart.length === 0) {
    return (
      <Layout>
        <div className="container-custom py-12">
          <Breadcrumbs items={[{ label: 'Корзина' }]} />
          
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Корзина пуста</h1>
            <p className="text-muted-foreground mb-6">
              Добавьте букеты из каталога, чтобы оформить заказ
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
        <Breadcrumbs items={[{ label: 'Корзина' }]} />

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Корзина</h1>
          <Button variant="ghost" onClick={clearCart} className="text-destructive hover:text-destructive">
            Очистить корзину
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.cart.map((item) => (
              <Card key={item.product.id} className="p-4">
                <div className="flex gap-4">
                  <Link to={`/product/${item.product.slug}`} className="flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
                    />
                  </Link>
                  
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.product.slug}`} className="hover:text-primary transition-colors">
                      <h3 className="font-medium line-clamp-2 mb-1">{item.product.name}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.product.quantity} роз, {item.product.color}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center border rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-primary">
                          {formatPrice(item.product.price * item.quantity)} ₽
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground hover:text-destructive"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <Link to="/catalog" className="inline-flex items-center text-primary hover:underline mt-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Продолжить покупки
            </Link>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Итого</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Товары ({state.cart.reduce((acc, item) => acc + item.quantity, 0)})</span>
                  <span>{formatPrice(getCartTotal())} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Доставка</span>
                  <span className={deliveryPrice === 0 ? 'text-green-500' : ''}>
                    {deliveryPrice === 0 ? 'Бесплатно' : `${formatPrice(deliveryPrice)} ₽`}
                  </span>
                </div>
                {deliveryPrice > 0 && (
                  <p className="text-xs text-muted-foreground">
                    До бесплатной доставки: {formatPrice(3000 - getCartTotal())} ₽
                  </p>
                )}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold">
                  <span>К оплате</span>
                  <span className="text-primary">{formatPrice(totalWithDelivery)} ₽</span>
                </div>
              </div>

              <Button size="lg" className="w-full mb-3">
                Оформить заказ
              </Button>
              
              <button className="w-full text-sm text-primary hover:underline">
                Купить в 1 клик
              </button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Нажимая «Оформить заказ», вы соглашаетесь с условиями оферты
              </p>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
