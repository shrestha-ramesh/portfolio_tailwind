import Button from "./Button";
import { portfolioItems } from "./PortfolioItems";

export default function Portfolio() {
  return (
    <>
      <div
        name="Portfolio"
        className="max-w-screen-2xl container mx-auto px-4 md:p-20 mt-10"
      >
        <div>
          <h1 className="mb-5 text-3xl font-bold">Portfolio</h1>
          <span className="underline font-semibold">Feature Projects</span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
            {portfolioItems.map(({ id, logo, name, sourCodeLink }) => (
              <div
                className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <img
                  src={logo}
                  className="h-[120px] w-[120px] rounded-full border-[2px] p-1"
                  alt=""
                />
                <div>
                  <div className="font-bold text-xl mb-2 px-2">{name}</div>
                  <p className="px-2 text-gray-700">
                    Train to model and analyze the sentence sentiment of the
                    drama audience after geting feedback.
                  </p>
                </div>
                <div className="justify-around px-6 py-4 space-x-3">
                  <Button
                    buttonName="GitHub"
                    buttonHref="https://github.com/shrestha-ramesh?tab=repositories"
                    buttonStyle="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                  />
                  <Button
                    buttonName="Source Code"
                    buttonHref={sourCodeLink}
                    buttonStyle="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
