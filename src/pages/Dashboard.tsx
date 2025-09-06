import {
  DollarSign,
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
  Eye
} from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {

  const recentOrders = [
    { id: "ORD-001", customer: "John Doe", amount: "$129.99", status: "Completed", date: "2024-01-15" },
    { id: "ORD-002", customer: "Jane Smith", amount: "$89.50", status: "Processing", date: "2024-01-15" },
    { id: "ORD-003", customer: "Mike Johnson", amount: "$199.99", status: "Shipped", date: "2024-01-14" },
    { id: "ORD-004", customer: "Sarah Wilson", amount: "$59.99", status: "Pending", date: "2024-01-14" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-success bg-success/10";
      case "Processing":
        return "text-warning bg-warning/10";
      case "Shipped":
        return "text-primary bg-primary/10";
      case "Pending":
        return "text-muted-foreground bg-muted";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your business.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            View Reports
          </Button>
        </div>
      </div>


      {/* Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Orders */}
        <Card className="col-span-4 shadow-card">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-sm font-medium">{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.customer}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{order.amount}</p>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="col-span-3 shadow-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Package className="h-4 w-4 mr-2" />
              Add New Product
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="h-4 w-4 mr-2" />
              Manage Customers
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <ShoppingCart className="h-4 w-4 mr-2" />
              View Orders
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}