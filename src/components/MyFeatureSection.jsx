import {
  GlobeAltIcon,
  LightningBoltIcon,
  EmojiHappyIcon,
  HeartIcon,
  ThumbUpIcon,
  DocumentReportIcon,
} from "@heroicons/react/outline";
import EmbededVideo from "./EmbededVideo";

const commaFeatures = [
  {
    id: 1,
    name: "Comma Prime Service",
    description:
      "With Comma Prime Service, just type in the destination on your smartphone, and it will be wirelessly synced with your car. comma three provides turn-by-turn directions to get you where you need to go.",
    icon: LightningBoltIcon,
  },
  {
    id: 1,
    name: "openpilot",
    description:
      "Find Openpilot powered Comma 3 driving kit, enabling Tesla autopilot like features on our fleet of cars.",
    icon: GlobeAltIcon,
  },
];
const ravinFeatures = [
  {
    id: 1,
    name: "Real-time Damage documentation",
    description:
      "Scans the condition of the vehicle and documents damage in real-time.",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: "Vehicle Health Report",
    description:
      "A seamless, digital health record of the vehicle is generated and maintained, ensuring peace of mind and transparency.",
    icon: HeartIcon,
  },

  {
    id: 3,
    name: "Transparent Vehicle Condition & Assesments",
    description:
      "Knowing the vehicle condition before and after your trip ends creates trust and transparency if a claim or dispute occurs.",
    icon: DocumentReportIcon,
  },
];
const smartcarFeatures = [
  {
    id: 1,
    name: "Contactless Pickup And Delivery",
    description:
      "With smartcar integration, you no longer have to meet up in person, Instead cars can be located and unlocked directly via our app. Say Goodbye to meeting with your delivery associate and exchanging keys.",
    icon: ThumbUpIcon,
  },
  {
    id: 2,
    name: "Digital car keys",
    description:
      "One less key to worry about, As long as your phone is connected to internet our app is your key. From starting the engine to (un)locking your car, we can do it all for you.",
    icon: EmojiHappyIcon,
  },
  {
    id: 3,
    name: "Automatic fuel & mileage check",
    description:
      "Just drop your car after your trip ends, and thats it, no need to manually click a picture of fuel available or mileage spent, all the information is already available to you within the app itself.",
    icon: DocumentReportIcon,
  },
];

export default function MyFeatureSection() {
  return (
    <div className="py-10 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">

        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600  sm:text-4xl">
            We believe that with power of AI, we can radically change the way,
            car rentals are done.
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-100">
            Vroom brings the best of everything, from contactless delivery to
            providing health report of your vehicle before and after your trip,
            making sure you are in the safest hands possible, and have 100%
            transparency throughout the process, everything within the touch of
            your smartphone.
          </p>
        </div>

        <div
          id="ravin"
          className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
        >
          <div className="py-10 relative">
            <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600 tracking-tight sm:text-3xl">
              Meet <a className="underline text-indigo-500" href="https://www.ravin.ai/">Ravin AI</a>, automobile industry's most mature and award winning
              inspection AI
            </h3>
            <p className="mt-3 text-lg text-white">
              Ravin's Artificial Intelligence (AI) inspects vehicle's physical
              condition right from your smartphone, and provides a detailed
              report of the vehicle.
            </p>

            <dl className="mt-10 space-y-10">
              {ravinFeatures.map((item, index) => (
                <div key={index} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-800 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-white">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <EmbededVideo videoId="9vWGnsNhOI0" opts={{}} />
          </div>
        </div>

        <div id="smartcar" className="relative mt-16 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <div className="flex flex-row items-center gap-2">
                <h3 className="text-2xl md:text-2xl center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600 tracking-tight">
                  Say Hi to connected cars via <a className="underline text-indigo-500" href="https://smartcar.com/">Smartcar</a>
                </h3>
                {/* <svg
                  width="108"
                  height="30"
                  viewBox="0 0 90 25"
                  fill="solid"
                  xmlns="http://www.w3.org/2000/svg"
                  className="jss9 w-24 md:w-32 h-12 center my-auto"
                >
                  <path d="M12.49 0C5.591 0 0 5.59 0 12.486 0 19.38 5.592 24.97 12.49 24.97c6.897 0 12.489-5.59 12.489-12.485S19.387 0 12.489 0zm0 3.121c4.064 0 7.498 2.617 8.793 6.243H3.696c1.295-3.626 4.73-6.243 8.793-6.243zm0 10.925a1.561 1.561 0 110-3.122 1.561 1.561 0 010 3.122zm-9.368-1.56c4.266 0 7.72 4.108 7.794 9.205-4.415-.756-7.794-4.581-7.794-9.205zm10.94 9.205c.074-5.096 3.529-9.205 7.795-9.205 0 4.624-3.379 8.45-7.794 9.205zM33.205 17c-.694 0-1.303-.113-1.827-.34A3.926 3.926 0 0130 15.61l1.186-1.066c.267.345.566.607.898.784.33.178.715.267 1.153.267.813 0 1.218-.316 1.218-.947 0-.247-.069-.439-.208-.577-.128-.148-.352-.246-.673-.296l-.785-.133c-.877-.148-1.512-.4-1.908-.754-.395-.355-.593-.873-.593-1.554 0-.808.257-1.41.77-1.804.513-.405 1.24-.607 2.18-.607.651 0 1.212.099 1.682.296.481.197.898.488 1.25.873l-1.138 1.05a2.384 2.384 0 00-.785-.592 2.247 2.247 0 00-1.01-.222c-.748 0-1.122.311-1.122.932 0 .257.075.454.225.592.15.128.385.217.705.266l.801.133c.877.148 1.502.4 1.876.755.384.345.577.833.577 1.464 0 .8-.268 1.42-.802 1.864-.534.444-1.298.666-2.292.666zM37.873 16.823V9.1h1.939v1.287h.224c.332-.977.989-1.465 1.972-1.465 1.047 0 1.725.508 2.035 1.524h.192c.182-.523.46-.908.834-1.154.384-.247.85-.37 1.394-.37.705 0 1.255.237 1.65.71.396.464.594 1.13.594 1.997v5.193h-1.94V11.94c0-1.006-.39-1.509-1.17-1.509-.373 0-.694.108-.961.325-.256.207-.385.503-.385.888v5.178h-1.939V11.94c0-.533-.096-.917-.288-1.154-.193-.237-.481-.355-.866-.355-.374 0-.694.108-.961.325-.257.207-.385.503-.385.888v5.178h-1.94zM56.172 16.823c-.866 0-1.32-.44-1.363-1.317h-.192a1.795 1.795 0 01-.721 1.11c-.374.256-.839.384-1.395.384-.769 0-1.346-.197-1.73-.592-.385-.394-.578-.947-.578-1.657 0-.808.273-1.41.818-1.804.545-.395 1.33-.592 2.356-.592h1.298v-.666c0-.453-.107-.789-.32-1.006-.204-.216-.545-.325-1.026-.325-.396 0-.727.089-.994.266-.267.168-.502.41-.705.725l-1.138-.947c.31-.443.7-.798 1.17-1.065.48-.276 1.09-.414 1.827-.414 2.084 0 3.125.907 3.125 2.722v3.743h.738v1.435h-1.17zm-2.933-1.14c.395 0 .732-.103 1.01-.31.277-.217.416-.513.416-.888v-1.02h-1.17c-.898 0-1.346.32-1.346.961v.325c0 .326.096.563.288.71.193.149.46.222.802.222zM58.845 16.823V9.1h1.94v1.582h.224c.096-.512.294-.902.593-1.168.31-.276.71-.414 1.202-.414h.417v1.834h-.641c-.61 0-1.063.089-1.363.266-.288.178-.432.488-.432.932v4.69h-1.94zM67.085 16.823c-.673 0-1.16-.139-1.458-.415-.3-.276-.45-.715-.45-1.316v-4.556h-1.105V9.1h.577c.278 0 .465-.06.56-.178.108-.118.161-.306.161-.562V7h1.747v2.1h1.507v1.436h-1.507v4.852h1.378v1.435h-1.41zM73.032 17c-1.132 0-1.998-.325-2.596-.976-.588-.651-.882-1.672-.882-3.063 0-1.39.294-2.41.882-3.062.598-.65 1.464-.976 2.596-.976.823 0 1.475.173 1.956.518a2.85 2.85 0 011.057 1.42l-1.586.65c-.086-.374-.24-.655-.465-.842-.214-.198-.534-.296-.962-.296-.961 0-1.442.532-1.442 1.597v1.983c0 1.065.48 1.597 1.442 1.597.449 0 .791-.098 1.026-.296.235-.197.411-.502.529-.917l1.506.666C75.602 16.334 74.582 17 73.033 17zM82.95 16.823c-.865 0-1.319-.44-1.362-1.317h-.192a1.796 1.796 0 01-.721 1.11c-.374.256-.839.384-1.394.384-.77 0-1.347-.197-1.731-.592-.385-.394-.577-.947-.577-1.657 0-.808.272-1.41.817-1.804.545-.395 1.33-.592 2.356-.592h1.298v-.666c0-.453-.107-.789-.32-1.006-.203-.216-.545-.325-1.026-.325-.395 0-.727.089-.994.266-.267.168-.502.41-.705.725l-1.138-.947c.31-.443.7-.798 1.17-1.065.481-.276 1.09-.414 1.827-.414 2.084 0 3.126.907 3.126 2.722v3.743h.737v1.435h-1.17zm-2.932-1.14c.395 0 .732-.103 1.01-.31.277-.217.416-.513.416-.888v-1.02h-1.17c-.897 0-1.346.32-1.346.961v.325c0 .326.096.563.288.71.193.149.46.222.802.222zM85.625 16.823V9.1h1.939v1.582h.224c.097-.512.294-.902.593-1.168.31-.276.71-.414 1.202-.414H90v1.834h-.641c-.61 0-1.063.089-1.362.266-.289.178-.433.488-.433.932v4.69h-1.94z"></path>
                </svg> */}
              </div>
              <h3 className="text-xl md:text-2xl center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600 tracking-tight">
                Integration
              </h3>

              <p className="mt-3 text-lg text-white">
                With smartcar integration, we are able to include features like
                Contactless Delivery, Automated fuel and mileage check, Roadside
                assistance, digital car keys and keyless car entry capabilities.
              </p>

              <dl className="mt-10 space-y-10">
                {smartcarFeatures.map((item, index) => (
                  <div key={index} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-800 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-white">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="h-60 mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">

              <img
                className="relative mt-100 items-center lg:bottom-30"
                width={550}
                height={100}
                src="../assests/landing_Smartcar.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          id="comma"
          className="relative mt-16 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
        >
          <div className="relative">
            <h3 className="text-2xl mt-12 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600 tracking-tight sm:text-3xl">
              Did you said Autopilot in a Toyota ? <span className="text-black">🤯</span>
            </h3>
            <p className="mt-3 text-lg text-white">
              With <a className="underline text-indigo-500" href="https://comma.ai/">Comma AI</a>'s self-driving car kit, features like Adaptive
              Cruise Control (ACC) and Automated Lane Centering (ALC) are fully
              supported. Similar to Tesla Autopilot, it can steer, accelerate,
              and brake automatically for other vehicles within its lane.
            </p>

            <dl className="mt-10 space-y-10">
              {commaFeatures.map((item, index) => (
                <div key={index} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-800 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-white">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <EmbededVideo videoId="VHKyqZ7t8Gw" opts={{}} />
          </div>
        </div>
        <div >
          <div className="max-w-4xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:px-8">


            {/* <div className="text-center m-auto">
              <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600 sm:text-4xl">
                <span className="block">
                  Ready to dive in? See it here in action
                </span>
              </h2>

            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
