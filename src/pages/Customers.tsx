import { useState } from "react";
import { Search, Filter, UserPlus, Mail, Phone, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Customers() {
  const [searchTerm, setSearchTerm] = useState("");

  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 234 567 8900",
      status: "Active",
      totalOrders: 12,
      totalSpent: "$2,456",
      lastOrder: "2024-01-15",
      avatar: "JD"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 234 567 8901",
      status: "Active",
      totalOrders: 8,
      totalSpent: "$1,890",
      lastOrder: "2024-01-14",
      avatar: "JS"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "+1 234 567 8902",
      status: "Inactive",
      totalOrders: 3,
      totalSpent: "$567",
      lastOrder: "2023-12-20",
      avatar: "MJ"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      phone: "+1 234 567 8903",
      status: "VIP",
      totalOrders: 25,
      totalSpent: "$5,678",
      lastOrder: "2024-01-16",
      avatar: "SW"
    },
    {
      id: 5,
      name: "David Brown",
      email: "david@example.com",
      phone: "+1 234 567 8904",
      status: "Active",
      totalOrders: 6,
      totalSpent: "$1,234",
      lastOrder: "2024-01-10",
      avatar: "DB"
    }
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-success/10 text-success";
      case "VIP":
        return "bg-primary/10 text-primary";
      case "Inactive":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
          <p className="text-muted-foreground">
            Manage your customer relationships and data
          </p>
        </div>
        <Button className="bg-gradient-primary text-white">
          <UserPlus className="h-4 w-4 mr-2" />
          Add Customer
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="shadow-card">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search customers..."
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
        </CardContent>
      </Card>


      {/* Customers List */}
      <div className="grid gap-4">
        {filteredCustomers.map((customer) => (
          <Card key={customer.id} className="shadow-card hover:shadow-elegant transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {customer.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{customer.name}</h3>
                      <Badge className={getStatusColor(customer.status)}>
                        {customer.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-1" />
                        {customer.email}
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-1" />
                        {customer.phone}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-sm font-medium">{customer.totalOrders}</p>
                    <p className="text-xs text-muted-foreground">Orders</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">{customer.totalSpent}</p>
                    <p className="text-xs text-muted-foreground">Total Spent</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">{customer.lastOrder}</p>
                    <p className="text-xs text-muted-foreground">Last Order</p>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-popover">
                      <DropdownMenuItem>
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        View Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        View Orders
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredCustomers.length === 0 && (
        <Card className="shadow-card">
          <CardContent className="text-center py-12">
            <div className="mx-auto w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
              <UserPlus className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No customers found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm ? "Try adjusting your search terms" : "Get started by adding your first customer"}
            </p>
            <Button className="bg-gradient-primary text-white">
              <UserPlus className="h-4 w-4 mr-2" />
              Add Your First Customer
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}