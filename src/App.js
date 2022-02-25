import MyFeatureSection from "./components/MyFeatureSection";
import FAQ from "./components/FAQ";
import { Link } from "react-scroll";
import DemoSlider from './components/DemoSlider';

function App() {
  const navigation = [
    { name: "Ravin AI", id: "ravin", href: "#" },
    { name: "Comma AI", id: "comma", href: "#" },
    { name: "Smartcar Integration", id: "smartcar", href: "#" },
  ];

  return (
    <div className="bg-black" >
      <div className="relative overflow-hidden">
        <div className="max-w-8xl mx-auto">
          <div className=" relative z-10 pb-8 sm:pb-16 md:pb-20 md:max-w-xl lg:max-w-2xl md:m-auto lg:m-0  lg:w-full lg:pb-28 xl:pb-32">
            <div className=" relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className=" flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="ml-2 flex gap-10 justify-center md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      activeClass="active"
                      to={item.id}
                      className="hover:cursor-pointer font-medium text-cyan-400 hover:text-blue-500"
                      key={item.name}
                      smooth={true}
                      offset={1}
                      duration={500}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
            <main className="md:m-auto lg:m-0 mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:pl-28 lg:pr-4 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    Car rentals with cutting-edge technology
                  </span>{" "}
                  <span className="block text-indigo-300 xl:inline">
                    for creating the best experience for your next road trip.
                  </span>
                </h1>
                <p className="mt-3 font-extrabold text-base text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-4xl lg:mx-0">
                  We provide rental cars with Tesla Autopilot like features
                  using Comma AI, delivered directly to wherever you are within
                  Toronto.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="mx-auto lg:absolute lg:inset-y-0 lg:top-48 lg:right-12 xl:right-48">

          <DemoSlider />
        </div>
      </div>
      <MyFeatureSection />
      <FAQ />
    </div>
  );
}

export default App;
