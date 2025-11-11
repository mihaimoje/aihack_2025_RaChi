import { useState } from "react";
import { PropertyCard } from "./PropertyCard";
import { SearchFilters } from "./SearchFilters";
import livingRoomImage from "@/assets/living-room.jpg";
import kitchenImage from "@/assets/kitchen.jpg";
import bedroomImage from "@/assets/bedroom.jpg";

const properties = [
  {
    id: 1,
    image: livingRoomImage,
    title: "Modern Downtown Apartment",
    location: "123 Main St, City Center",
    price: "$2,400/mo",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    type: "Apartment",
  },
  {
    id: 2,
    image: kitchenImage,
    title: "Luxury Penthouse Suite",
    location: "456 Park Ave, Downtown",
    price: "$4,800/mo",
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    type: "Penthouse",
  },
  {
    id: 3,
    image: bedroomImage,
    title: "Cozy Studio Apartment",
    location: "789 Oak St, Arts District",
    price: "$1,600/mo",
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    type: "Studio",
  },
  {
    id: 4,
    image: livingRoomImage,
    title: "Spacious Family Home",
    location: "321 Elm St, Suburbs",
    price: "$3,200/mo",
    bedrooms: 4,
    bathrooms: 3,
    area: 2400,
    type: "House",
  },
  {
    id: 5,
    image: kitchenImage,
    title: "Contemporary Loft",
    location: "654 Industrial Blvd",
    price: "$2,800/mo",
    bedrooms: 2,
    bathrooms: 2,
    area: 1500,
    type: "Loft",
  },
  {
    id: 6,
    image: bedroomImage,
    title: "Garden View Apartment",
    location: "987 Green St, Park Side",
    price: "$2,200/mo",
    bedrooms: 2,
    bathrooms: 1,
    area: 1100,
    type: "Apartment",
  },
];

export const PropertyGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [bedrooms, setBedrooms] = useState("all");
  const [propertyType, setPropertyType] = useState("all");

  const filteredProperties = properties.filter((property) => {
    // Location filter
    const matchesLocation = property.location
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Price filter
    const priceValue = parseInt(property.price.replace(/[^0-9]/g, ""));
    let matchesPrice = true;
    if (priceRange === "0-2000") matchesPrice = priceValue < 2000;
    else if (priceRange === "2000-3000")
      matchesPrice = priceValue >= 2000 && priceValue < 3000;
    else if (priceRange === "3000-5000")
      matchesPrice = priceValue >= 3000 && priceValue < 5000;
    else if (priceRange === "5000+") matchesPrice = priceValue >= 5000;

    // Bedrooms filter
    let matchesBedrooms = true;
    if (bedrooms === "4+") matchesBedrooms = property.bedrooms >= 4;
    else if (bedrooms !== "all")
      matchesBedrooms = property.bedrooms === parseInt(bedrooms);

    // Property type filter
    const matchesType =
      propertyType === "all" || property.type === propertyType;

    return matchesLocation && matchesPrice && matchesBedrooms && matchesType;
  });

  return (
    <section id="properties" className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our hand-picked selection of premium rental properties
          </p>
        </div>

        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          bedrooms={bedrooms}
          setBedrooms={setBedrooms}
          propertyType={propertyType}
          setPropertyType={setPropertyType}
        />

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No properties found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
