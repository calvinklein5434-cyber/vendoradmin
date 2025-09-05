import { useState } from "react";
import { Plus, Search, Filter, Grid, List, Edit, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const products = [
    {
      id: 1,
      name: "Premium WordPress Theme",
      description: "Responsive and customizable WordPress theme for businesses",
      price: "$79",
      stock: 45,
      status: "Active",
      category: "Digital",
      sales: 234,
      image: "🎨"
    },
    {
      id: 2,
      name: "E-commerce Template",
      description: "Complete online store template with payment integration",
      price: "$149",
      stock: 12,
      status: "Active",
      category: "Templates",
      sales: 89,
      image: "🛒"
    },
    {
      id: 3,
      name: "Mobile App UI Kit",
      description: "Modern UI components for mobile applications",
      price: "$199",
      stock: 0,
      status: "Out of Stock",
      category: "UI/UX",
      sales: 156,
      image: "📱"
    },
    {
      id: 4,
      name: "SEO Optimization Guide",
      description: "Comprehensive guide to improve your website's SEO",
      price: "$29",
      stock: 99,
      status: "Active",
      category: "Digital",
      sales: 445,
      image: "📈"
    },
    {
      id: 5,
      name: "Brand Identity Package",
      description: "Complete branding solution with logo and guidelines",
      price: "$299",
      stock: 8,
      status: "Low Stock",
      category: "Branding",
      sales: 67,
      image: "🎯"
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-success/10 text-success";
      case "Out of Stock":
        return "bg-destructive/10 text-destructive";
      case "Low Stock":
        return "bg-warning/10 text-warning";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Digital: "bg-primary/10 text-primary",
      Templates: "bg-warning/10 text-warning",
      "UI/UX": "bg-success/10 text-success",
      Branding: "bg-destructive/10 text-destructive"
    };
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground";
  };

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <Card className="shadow-card hover:shadow-elegant transition-all duration-200">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{product.image}</div>
            <div>
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <Badge className={getCategoryColor(product.category)}>
                {product.category}
              </Badge>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Eye className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover">
              <DropdownMenuItem>
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold">{product.price}</span>
          <Badge className={getStatusColor(product.status)}>
            {product.status}
          </Badge>
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Stock: {product.stock}</span>
          <span>{product.sales} sales</span>
        </div>
      </CardContent>
    </Card>
  );

  const ProductListItem = ({ product }: { product: typeof products[0] }) => (
    <Card className="shadow-card">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl">{product.image}</div>
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className={getCategoryColor(product.category)}>
              {product.category}
            </Badge>
            <span className="font-bold">{product.price}</span>
            <Badge className={getStatusColor(product.status)}>
              {product.status}
            </Badge>
            <span className="text-sm text-muted-foreground">Stock: {product.stock}</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Eye className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-popover">
                <DropdownMenuItem>
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground">
            Manage your product catalog and inventory
          </p>
        </div>
        <Button className="bg-gradient-primary text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Search and Controls */}
      <Card className="shadow-card">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Display */}
      {viewMode === "grid" ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredProducts.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <Card className="shadow-card">
          <CardContent className="text-center py-12">
            <div className="mx-auto w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
              <Plus className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm ? "Try adjusting your search terms" : "Get started by adding your first product"}
            </p>
            <Button className="bg-gradient-primary text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Product
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}