import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  const [destination, setDestination] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 py-24 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              E-Travel
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Discover your next adventure with us
            </p>
          </div>

          {/* Search Box */}
          <div className="mx-auto mt-12 max-w-2xl">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <input
                    type="text"
                    placeholder="Where do you want to go?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="flex-1 rounded-lg border-0 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500"
                  />
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                    Search Flights
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why Choose E-Travel?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">✈️</span>
                  Best Flight Deals
                </CardTitle>
                <CardDescription>
                  Compare prices from hundreds of airlines to find the best deals
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🏨</span>
                  Hotel Bookings
                </CardTitle>
                <CardDescription>
                  Find perfect accommodations from budget to luxury options
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Tour Packages
                </CardTitle>
                <CardDescription>
                  Curated travel experiences with local guides and activities
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Popular Destinations
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Paris", "Tokyo", "New York", "Bali"].map((city) => (
              <Card key={city} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300" />
                <CardContent className="p-4">
                  <h3 className="font-semibold">{city}</h3>
                  <p className="text-sm text-muted-foreground">
                    Starting from $299
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 E-Travel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
