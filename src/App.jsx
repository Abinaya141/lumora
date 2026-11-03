import { useMemo, useState } from "react";
import products from "./data/products.json";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import FeaturedProducts from "./components/FeaturedProducts";
import PromotionalBanner from "./components/PromotionalBanner";
import NewArrivals from "./components/NewArrivals";
import Benefits from "./components/Benefits";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [wishlist, setWishlist] = useState(new Set());
  const [cartCount, setCartCount] = useState(0);

  const featured = useMemo(() => {
    const q = search.trim().toLowerCase();
    return products.filter(
      (p) =>
        p.featured &&
        (activeCategory === "all" || p.category === activeCategory) &&
        (!q || p.name.toLowerCase().includes(q) || p.category.includes(q)),
    );
  }, [search, activeCategory]);

  const newArrivals = useMemo(
    () => products.filter((p) => p.newArrival).slice(0, 4),
    [],
  );

  const toggleWishlist = (id) =>
    setWishlist((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const addToCart = () => setCartCount((c) => c + 1);

  return (
    <>
      <AnnouncementBar />
      <Navbar
        search={search}
        onSearch={setSearch}
        wishlistCount={wishlist.size}
        cartCount={cartCount}
        cartBump={cartCount}
      />
      <main>
        <Hero />
        <CategorySection
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
        <FeaturedProducts
          products={featured}
          search={search}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
          onClearSearch={() => setSearch("")}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          onAddToCart={addToCart}
        />
        <PromotionalBanner />
        <NewArrivals
          products={newArrivals}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          onAddToCart={addToCart}
        />
        <Benefits />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
