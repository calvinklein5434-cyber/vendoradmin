import { useState } from "react";
import { Search, Filter, TrendingUp, DollarSign, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DashboardCard } from "@/components/DashboardCard";

export default function Sales() {
  const [searchTerm, setSearchTerm] = useState("");

  const salesStats = [
    {
      title: "Total Sales",
      value: "$24,567",
      description: "this month",
      icon: <DollarSign className="h-4 w-4" />,
      trend: "up" as const,
      trendValue: "18%"
    },
    {
      title: "Orders",
      value: "156",
      description: "this month",
      icon: <ShoppingCart className="h-4 w-4" />,
      trend: "up" as const,
      trendValue: "12"
    },
    {
      title: "Average Order",
      value: "$157.48",
      description: "per order",
      icon: <TrendingUp className="h-4 w-4" />,
      trend: "up" as const,
      trendValue: "5%"
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      description: "visitors to sales",
      icon: <Eye className="h-4 w-4" />,
      trend: "up" as const,
      trendValue: "0.8%"
    }
  ];

  const orders = [
    {
      id: "ORD-2024-001",
      customer: "John Doe",
      date: "2024-01-16",
      status: "Completed",
      items: 3,
      total: "$299.99"
    },
    {
      id: "ORD-2024-002",
      customer: "Jane Smith",
      date: "2024-01-16",
      status: "Processing",
      items: 1,
      total: "$149.50"
    },
    {
      id: "ORD-2024-003",
      customer: "Mike Johnson",
      date: "2024-01-15",
      status: "Shipped",
      items: 2,
      total: "$89.99"
    },
    {
      id: "ORD-2024-004",
      customer: "Sarah Wilson",
      date: "2024-01-15",
      status: "Pending",
      items: 4,
      total: "$567.89"
    },
    {
      id: "ORD-2024-005",
      customer: "David Brown",
      date: "2024-01-14",
      status: "Completed",
      items: 1,
      total: "$79.99"
    },
    {
      id: "ORD-2024-006",
      customer: "Emily Davis",
      date: "2024-01-14",
      status: "Cancelled",
      items: 2,
      total: "$199.99"
    }
  ];

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-success/10 text-success";
      case "Processing":
        return "bg-warning/10 text-warning";
      case "Shipped":
        return "bg-primary/10 text-primary";
      case "Pending":
        return "bg-muted text-muted-foreground";
      case "Cancelled":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sales & Orders</h1>
          <p className="text-muted-foreground">
            Track your sales performance and manage orders
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            Export Data
          </Button>
        </div>
      </div>

      {/* Sales Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {salesStats.map((stat, index) => (
          <DashboardCard key={index} {...stat} />
        ))}
      </div>

      {/* Orders Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Orders</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Orders Table */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Order History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.customer}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <p className="text-sm font-medium">{order.date}</p>
                      <p className="text-xs text-muted-foreground">Order Date</p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm font-medium">{order.items}</p>
                      <p className="text-xs text-muted-foreground">Items</p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm font-medium">{order.total}</p>
                      <p className="text-xs text-muted-foreground">Total</p>
                    </div>
                    
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                    
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>


      {/* Empty State */}
      {filteredOrders.length === 0 && (
        <Card className="shadow-card">
          <CardContent className="text-center py-12">
            <div className="mx-auto w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
              <ShoppingCart className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No orders found</h3>
            <p className="text-muted-foreground">
              {searchTerm ? "Try adjusting your search terms" : "Orders will appear here when customers make purchases"}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}