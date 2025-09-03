import CompleteLook from "./_ui/completeLook/CompleteLook";
import FollowUs from "./_ui/followUs/FollowUs";
import Hero from "./_ui/hero/Hero";
import BrandsYouLove from "./_ui/brandsYouLove/BrandsYouLove";

export default function Home() {
  return (
    <div>
      <Hero />
      <BrandsYouLove />
      <CompleteLook />
      <FollowUs />
    </div>
  );
}
