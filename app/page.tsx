import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface Apartment {
  _id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  isVerified: boolean;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  units: {
    type: string;
    bedrooms: number;
    bathrooms: number;
    squareFootage: number;
    rent: number;
    isAvailable: boolean;
    images: string[];
    _id: string;
  }[];
  images: string[];
}

export default async function LandingPage() {
  const res = await fetch("http://3.23.95.191:7000/apartments", {
    cache: "no-store", // Prevent caching for fresh data
  });

  if (!res.ok) {
    console.error("Failed to fetch apartments");
    return <div>Error loading apartments</div>;
  }

  const data = await res.json();
  const apartments: Apartment[] = data.data.items;

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] flex items-center justify-center">
        <div className="text-center p-6 rounded-lg max-w-3xl ">
          <h1 className="text-5xl text-white font-bold mb-4">
            Find Your Dream Home, Effortlessly
          </h1>

          <p className="text-xl text-white font-light mb-6">
            Explore thousands of listings, compare prices, and find the perfect
            home in your dream neighborhood.
          </p>
          <div className="flex gap-2 max-w-lg mx-auto">
            <Input
              placeholder="Search by Address, City or Zip"
              className="flex-1 h-12 bg-background"
            />
            <Button variant="default" className="h-12">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Popular Listings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {apartments.map((apartment) => (
            <Card
              key={apartment._id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={apartment.images[0] || "/placeholder.jpg"}
                alt={apartment.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent>
                <CardTitle>{apartment.title}</CardTitle>
                <CardDescription>
                  {apartment.address}, {apartment.city}, {apartment.state}
                </CardDescription>
                <Button variant="default" className="mt-4 ">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className=" py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {[
            {
              step: "1",
              title: "Search & Compare",
              description: "Find homes that match your criteria.",
            },
            {
              step: "2",
              title: "Schedule Visits",
              description: "Book house tours instantly.",
            },
            {
              step: "3",
              title: "Move In",
              description: "Secure your dream home with ease.",
            },
          ].map(({ step, title, description }) => (
            <div key={step} className="text-center">
              <div className="text-4xl font-bold text-primary-600">{step}</div>
              <h3 className="text-xl font-semibold mt-4">{title}</h3>
              <p className=" mt-2">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Find Your Perfect Home?
        </h2>
        <p className="text-lg mb-6">Start your journey today with HouseHunt!</p>
        <Button variant="default" className="">
          Start Searching
        </Button>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
