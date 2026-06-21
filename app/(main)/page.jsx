

import BestSeller from "../../components/main/BestSeller";
import Hero from "../../components/main/Hero";
import LatestCollection from "../../components/main/LatestCollection";
import Policy from "../../components/shared/Policy";

export default function Home() {
  return (
<div>
    <Hero />
    <LatestCollection />
    <BestSeller />
    <Policy />
</div>
  );
}
