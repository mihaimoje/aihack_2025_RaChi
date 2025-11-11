import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Maximize, MapPin, ArrowLeft, Heart, Share2 } from "lucide-react";
import livingRoomImage from "@/assets/living-room.jpg";
import kitchenImage from "@/assets/kitchen.jpg";
import bedroomImage from "@/assets/bedroom.jpg";

const properties = [
  {
    id: "1",
    image: livingRoomImage,
    title: "Modern Downtown Apartment",
    location: "123 Main St, City Center",
    price: "$2,400/mo",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    type: "Apartment",
    description: "Beautiful modern apartment in the heart of downtown. Features include hardwood floors, stainless steel appliances, and floor-to-ceiling windows with stunning city views.",
    amenities: ["Gym", "Pool", "Parking", "Pet Friendly", "Laundry"],
  },
  {
    id: "2",
    image: kitchenImage,
    title: "Luxury Penthouse Suite",
    location: "456 Park Ave, Downtown",
    price: "$4,800/mo",
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    type: "Penthouse",
    description: "Exceptional penthouse with panoramic views and high-end finishes throughout. Chef's kitchen, spa-like bathrooms, and private terrace.",
    amenities: ["Gym", "Pool", "Parking", "Concierge", "Doorman", "Rooftop Access"],
  },
  {
    id: "3",
    image: bedroomImage,
    title: "Cozy Studio Apartment",
    location: "789 Oak St, Arts District",
    price: "$1,600/mo",
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    type: "Studio",
    description: "Charming studio in vibrant Arts District. Perfect for young professionals. Open layout with modern fixtures and lots of natural light.",
    amenities: ["Laundry", "Bike Storage", "High-Speed Internet"],
  },
  {
    id: "4",
    image: livingRoomImage,
    title: "Spacious Family Home",
    location: "321 Elm St, Suburbs",
    price: "$3,200/mo",
    bedrooms: 4,
    bathrooms: 3,
    area: 2400,
    type: "House",
    description: "Beautiful single-family home with large backyard. Perfect for families. Updated kitchen, spacious bedrooms, and quiet neighborhood.",
    amenities: ["Garage", "Backyard", "Pet Friendly", "Fireplace"],
  },
  {
    id: "5",
    image: kitchenImage,
    title: "Contemporary Loft",
    location: "654 Industrial Blvd",
    price: "$2,800/mo",
    bedrooms: 2,
    bathrooms: 2,
    area: 1500,
    type: "Loft",
    description: "Stylish industrial loft with exposed brick and high ceilings. Open floor plan with designer finishes and modern appliances.",
    amenities: ["Gym", "Parking", "Storage", "High-Speed Internet"],
  },
  {
    id: "6",
    image: bedroomImage,
    title: "Garden View Apartment",
    location: "987 Green St, Park Side",
    price: "$2,200/mo",
    bedrooms: 2,
    bathrooms: 1,
    area: 1100,
    type: "Apartment",
    description: "Peaceful apartment overlooking community garden. Bright and airy with updated kitchen and bathroom. Great location near parks.",
    amenities: ["Garden Access", "Laundry", "Bike Storage", "Pet Friendly"],
  },
];

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Property not found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Properties
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className="mb-2">{property.type}</Badge>
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    {property.title}
                  </h1>
                  <p className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="outline">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-6 py-4 border-y border-border">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground font-medium">
                    {property.bedrooms} Beds
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground font-medium">
                    {property.bathrooms} Baths
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground font-medium">
                    {property.area} sqft
                  </span>
                </div>
              </div>

              <div className="py-6">
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  About this property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>

              <div className="py-6">
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  Amenities
                </h2>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity) => (
                    <Badge key={amenity} variant="secondary">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 p-6">
              <div className="mb-6">
                <p className="text-3xl font-bold text-primary mb-1">
                  {property.price}
                </p>
                <p className="text-sm text-muted-foreground">per month</p>
              </div>

              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  Request a Tour
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Contact Landlord
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
