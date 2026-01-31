import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, Grid3X3, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Layout } from '@/components/layout/Layout';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { ProductCard } from '@/components/product/ProductCard';
import { ProductFilters, Filters } from '@/components/catalog/ProductFilters';
import { products, filterOptions, quickFilters } from '@/data/products';

type SortOption = 'popular' | 'price-asc' | 'price-desc' | 'new';

const defaultFilters: Filters = {
  priceRange: [filterOptions.priceRange.min, filterOptions.priceRange.max],
  quantities: [],
  colors: [],
  types: [],
  shapes: [],
  occasions: [],
};

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [gridCols, setGridCols] = useState<3 | 4>(4);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Initialize filters from URL params
  const [filters, setFilters] = useState<Filters>(() => {
    const quantity = searchParams.get('quantity');
    const color = searchParams.get('color');
    const shape = searchParams.get('shape');
    const type = searchParams.get('type');
    
    return {
      ...defaultFilters,
      quantities: quantity ? [parseInt(quantity)] : [],
      colors: color ? [color] : [],
      shapes: shape ? [shape] : [],
      types: type ? [type] : [],
    };
  });

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Apply filters
    if (filters.priceRange[0] > filterOptions.priceRange.min || filters.priceRange[1] < filterOptions.priceRange.max) {
      result = result.filter(
        (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
      );
    }

    if (filters.quantities.length > 0) {
      result = result.filter((p) => filters.quantities.includes(p.quantity));
    }

    if (filters.colors.length > 0) {
      result = result.filter((p) => filters.colors.includes(p.color));
    }

    if (filters.types.length > 0) {
      result = result.filter((p) => filters.types.includes(p.type));
    }

    if (filters.shapes.length > 0) {
      result = result.filter((p) => filters.shapes.includes(p.shape));
    }

    if (filters.occasions.length > 0) {
      result = result.filter((p) =>
        p.occasion.some((occ) => filters.occasions.includes(occ))
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'new':
        result.sort((a, b) => (b.badges.includes('Новинка') ? 1 : 0) - (a.badges.includes('Новинка') ? 1 : 0));
        break;
      case 'popular':
      default:
        result.sort((a, b) => b.purchases24h - a.purchases24h);
        break;
    }

    return result;
  }, [filters, sortBy]);

  const handleQuickFilter = (type: string, value: string | number) => {
    const newFilters = { ...filters };
    
    switch (type) {
      case 'quantity':
        if (newFilters.quantities.includes(value as number)) {
          newFilters.quantities = newFilters.quantities.filter((q) => q !== value);
        } else {
          newFilters.quantities = [value as number];
        }
        break;
      case 'color':
        if (newFilters.colors.includes(value as string)) {
          newFilters.colors = newFilters.colors.filter((c) => c !== value);
        } else {
          newFilters.colors = [value as string];
        }
        break;
      case 'shape':
        if (newFilters.shapes.includes(value as string)) {
          newFilters.shapes = newFilters.shapes.filter((s) => s !== value);
        } else {
          newFilters.shapes = [value as string];
        }
        break;
      case 'type':
        if (newFilters.types.includes(value as string)) {
          newFilters.types = newFilters.types.filter((t) => t !== value);
        } else {
          newFilters.types = [value as string];
        }
        break;
    }
    
    setFilters(newFilters);
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
    setSearchParams({});
  };

  const activeFiltersCount =
    filters.quantities.length +
    filters.colors.length +
    filters.types.length +
    filters.shapes.length +
    filters.occasions.length +
    (filters.priceRange[0] > filterOptions.priceRange.min || filters.priceRange[1] < filterOptions.priceRange.max ? 1 : 0);

  return (
    <Layout>
      <div className="container-custom">
        <Breadcrumbs items={[{ label: 'Каталог', href: '/catalog' }, { label: 'Розы' }]} />

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Розы</h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'букет' : 'букетов'}
          </p>
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
          {quickFilters.map((filter) => {
            const isActive =
              (filter.type === 'quantity' && filters.quantities.includes(filter.value as number)) ||
              (filter.type === 'color' && filters.colors.includes(filter.value as string)) ||
              (filter.type === 'shape' && filters.shapes.includes(filter.value as string)) ||
              (filter.type === 'type' && filters.types.includes(filter.value as string));

            return (
              <Badge
                key={filter.label}
                variant={isActive ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
                onClick={() => handleQuickFilter(filter.type, filter.value)}
              >
                {filter.label}
                {isActive && <X className="h-3 w-3 ml-1" />}
              </Badge>
            );
          })}
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <ProductFilters
              filters={filters}
              onFiltersChange={setFilters}
              onReset={resetFilters}
            />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 gap-4">
              <div className="flex items-center gap-2">
                {/* Mobile Filters */}
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Фильтры
                      {activeFiltersCount > 0 && (
                        <Badge className="ml-2 h-5 w-5 p-0 flex items-center justify-center">
                          {activeFiltersCount}
                        </Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Фильтры</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <ProductFilters
                        filters={filters}
                        onFiltersChange={setFilters}
                        onReset={resetFilters}
                        isMobile
                      />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Grid toggle */}
                <div className="hidden md:flex items-center border rounded-md">
                  <Button
                    variant={gridCols === 3 ? 'secondary' : 'ghost'}
                    size="icon"
                    className="rounded-r-none"
                    onClick={() => setGridCols(3)}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={gridCols === 4 ? 'secondary' : 'ghost'}
                    size="icon"
                    className="rounded-l-none"
                    onClick={() => setGridCols(4)}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Sort */}
              <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">По популярности</SelectItem>
                  <SelectItem value="price-asc">Сначала дешевле</SelectItem>
                  <SelectItem value="price-desc">Сначала дороже</SelectItem>
                  <SelectItem value="new">Сначала новинки</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div
                className={`grid gap-6 ${
                  gridCols === 3
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                }`}
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">Товары не найдены</p>
                <Button variant="outline" onClick={resetFilters}>
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
