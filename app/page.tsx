import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "@/components/navbar"; // Import Navbar component
import { Footer } from "@/components/footer"; // Import Footer component

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-[url('/hero-image.jpg')] h-[80vh] flex items-center justify-center">
        <div className="bg-black bg-opacity-50 text-white text-center p-6 rounded-lg max-w-lg">
          <h1 className="text-4xl font-bold mb-4">
            Find Your Dream Home, Effortlessly
          </h1>
          <p className="text-lg mb-6">
            Explore thousands of listings, compare prices, and find the perfect
            home in your dream neighborhood.
          </p>
          <div className="flex gap-2">
            <Input
              placeholder="Enter location"
              className="bg-white text-black"
            />
            <Button
              variant="default"
              className="bg-green-600 hover:bg-green-700"
            >
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
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card
              key={item}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={`/house-${item}.jpg`}
                alt={`House ${item}`}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent>
                <CardTitle>Beautiful Family Home</CardTitle>
                <CardDescription>$350,000 • 3 Beds • 2 Baths</CardDescription>
                <Button
                  variant="default"
                  className="mt-4 bg-green-600 hover:bg-green-700"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-16 px-8">
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
              <div className="text-4xl font-bold text-green-600">{step}</div>
              <h3 className="text-xl font-semibold mt-4">{title}</h3>
              <p className="text-gray-700 mt-2">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Find Your Perfect Home?
        </h2>
        <p className="text-lg mb-6">Start your journey today with HouseHunt!</p>
        <Button
          variant="default"
          className="bg-white text-green-600 hover:bg-gray-100"
        >
          Start Searching
        </Button>
      </section>

      {/* Footer */}
      
      <Footer/>
    </main>
  );
}
