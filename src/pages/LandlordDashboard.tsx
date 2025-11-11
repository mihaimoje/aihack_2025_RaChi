import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Plus, Edit, Trash2, Eye, LogOut } from "lucide-react";
import livingRoomImage from "@/assets/living-room.jpg";
import kitchenImage from "@/assets/kitchen.jpg";

export default function LandlordDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [properties] = useState([
    {
      id: 1,
      image: livingRoomImage,
      title: "Modern Downtown Apartment",
      location: "123 Main St, City Center",
      price: "$2,400/mo",
      status: "Available",
    },
    {
      id: 2,
      image: kitchenImage,
      title: "Luxury Penthouse Suite",
      location: "456 Park Ave, Downtown",
      price: "$4,800/mo",
      status: "Rented",
    },
  ]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">RentFinder</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {user?.name}
            </span>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                My Properties
              </h1>
              <p className="text-muted-foreground">
                Manage your rental listings
              </p>
            </div>
            <Button className="gap-2" onClick={() => navigate("/landlord/add-property")}>
              <Plus className="h-4 w-4" />
              Add New Property
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Properties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {properties.length}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Available
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {properties.filter((p) => p.status === "Available").length}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Rented
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {properties.filter((p) => p.status === "Rented").length}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {properties.map((property) => (
              <Card key={property.id}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {property.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {property.location}
                          </p>
                        </div>
                        <Badge
                          variant={property.status === "Available" ? "default" : "secondary"}
                        >
                          {property.status}
                        </Badge>
                      </div>
                      
                      <p className="text-lg font-semibold text-primary mb-4">
                        {property.price}
                      </p>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
