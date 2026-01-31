import { useState, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { filterOptions } from '@/data/products';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

export interface Filters {
  priceRange: [number, number];
  quantities: number[];
  colors: string[];
  types: string[];
  shapes: string[];
  occasions: string[];
}

interface ProductFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  onReset: () => void;
  isMobile?: boolean;
}

export function ProductFilters({ filters, onFiltersChange, onReset, isMobile }: ProductFiltersProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    price: true,
    quantity: true,
    color: true,
    type: false,
    shape: false,
    occasion: false,
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handlePriceChange = (value: number[]) => {
    onFiltersChange({ ...filters, priceRange: [value[0], value[1]] });
  };

  const handleCheckboxChange = (
    key: keyof Pick<Filters, 'quantities' | 'colors' | 'types' | 'shapes' | 'occasions'>,
    value: string | number,
    checked: boolean
  ) => {
    const currentValues = filters[key] as (string | number)[];
    const newValues = checked
      ? [...currentValues, value]
      : currentValues.filter((v) => v !== value);
    onFiltersChange({ ...filters, [key]: newValues });
  };

  const hasActiveFilters =
    filters.priceRange[0] !== filterOptions.priceRange.min ||
    filters.priceRange[1] !== filterOptions.priceRange.max ||
    filters.quantities.length > 0 ||
    filters.colors.length > 0 ||
    filters.types.length > 0 ||
    filters.shapes.length > 0 ||
    filters.occasions.length > 0;

  const FilterSection = ({
    title,
    id,
    children,
  }: {
    title: string;
    id: string;
    children: React.ReactNode;
  }) => (
    <Collapsible open={openSections[id]} onOpenChange={() => toggleSection(id)}>
      <CollapsibleTrigger className="flex items-center justify-between w-full py-3 border-b hover:text-primary transition-colors">
        <span className="font-medium">{title}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${openSections[id] ? 'rotate-180' : ''}`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="py-3">{children}</CollapsibleContent>
    </Collapsible>
  );

  return (
    <div className={`${isMobile ? '' : 'sticky top-24'}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Фильтры</h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={onReset} className="text-primary">
            <X className="h-4 w-4 mr-1" />
            Сбросить
          </Button>
        )}
      </div>

      {/* Price Range */}
      <FilterSection title="Цена, ₽" id="price">
        <div className="px-2">
          <Slider
            value={[filters.priceRange[0], filters.priceRange[1]]}
            onValueChange={handlePriceChange}
            min={filterOptions.priceRange.min}
            max={filterOptions.priceRange.max}
            step={100}
            className="mb-4"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{formatPrice(filters.priceRange[0])} ₽</span>
            <span>{formatPrice(filters.priceRange[1])} ₽</span>
          </div>
        </div>
      </FilterSection>

      {/* Quantity */}
      <FilterSection title="Количество роз" id="quantity">
        <div className="flex flex-wrap gap-2">
          {filterOptions.quantities.map((qty) => (
            <Badge
              key={qty}
              variant={filters.quantities.includes(qty) ? 'default' : 'outline'}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() =>
                handleCheckboxChange('quantities', qty, !filters.quantities.includes(qty))
              }
            >
              {qty}
            </Badge>
          ))}
        </div>
      </FilterSection>

      {/* Colors */}
      <FilterSection title="Цвет" id="color">
        <div className="space-y-2">
          {filterOptions.colors.map((color) => (
            <label key={color} className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
              <Checkbox
                checked={filters.colors.includes(color)}
                onCheckedChange={(checked) => handleCheckboxChange('colors', color, !!checked)}
              />
              <span className="text-sm">{color}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Types */}
      <FilterSection title="Страна" id="type">
        <div className="space-y-2">
          {filterOptions.types.map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
              <Checkbox
                checked={filters.types.includes(type)}
                onCheckedChange={(checked) => handleCheckboxChange('types', type, !!checked)}
              />
              <span className="text-sm">{type}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Shapes */}
      <FilterSection title="Оформление" id="shape">
        <div className="space-y-2">
          {filterOptions.shapes.map((shape) => (
            <label key={shape} className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
              <Checkbox
                checked={filters.shapes.includes(shape)}
                onCheckedChange={(checked) => handleCheckboxChange('shapes', shape, !!checked)}
              />
              <span className="text-sm">{shape}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Occasions */}
      <FilterSection title="Повод" id="occasion">
        <div className="space-y-2">
          {filterOptions.occasions.map((occasion) => (
            <label key={occasion} className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
              <Checkbox
                checked={filters.occasions.includes(occasion)}
                onCheckedChange={(checked) => handleCheckboxChange('occasions', occasion, !!checked)}
              />
              <span className="text-sm">{occasion}</span>
            </label>
          ))}
        </div>
      </FilterSection>
    </div>
  );
}
