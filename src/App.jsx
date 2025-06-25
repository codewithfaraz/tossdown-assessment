import "./App.css";
import Header from "./Components/Header";
import ExploreProducts from "./Components/ExploreProducts";
import AnimatedBar from "./Components/AnimatedBar";
import ShopNow from "./Components/ShopNow";
import LearnMore from "./Components/LearnMore";
import JoinFamilySection from "./Components/JoinFamilySection";
import Footer from "./Components/footer";
function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <ExploreProducts />
      <AnimatedBar />
      <ShopNow />
      <LearnMore />
      <JoinFamilySection />
      <Footer />
    </div>
  );
}

export default App;
