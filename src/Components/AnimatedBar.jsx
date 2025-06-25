export default function AnimatedBar() {
  return (
    <div className="my-6 py-4 overflow-hidden bg-white">
      <div className="flex items-center animate-scroll whitespace-nowrap">
        {/* First set of items */}
        <div className="flex items-center space-x-8 px-8">
          <h1 className="text-2xl uppercase font-thin">
            spices herbs & season
          </h1>
          <h1 className="text-6xl mt-2">*</h1>
          <h1 className="text-2xl uppercase font-thin">Facewash</h1>
          <h1 className="text-6xl mt-2">*</h1>
          <h1 className="text-2xl uppercase font-thin">Cooking ESSENTIALS</h1>
          <h1 className="text-6xl mt-2">*</h1>
          <h1 className="text-2xl uppercase font-thin">Herbal oils</h1>
          <h1 className="text-6xl mt-2">*</h1>
          <h1 className="text-2xl uppercase font-thin">health & Beauty</h1>
          <h1 className="text-6xl mt-2">*</h1>
          <h1 className="text-2xl uppercase font-thin">Hot beverages</h1>
          <h1 className="text-6xl mt-2">*</h1>
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex items-center space-x-8 px-8">
          <h1 className="text-2xl uppercase font-thin">
            spices herbs & season
          </h1>
          <h1 className="text-6xl mt-2">*</h1>
          <h1 className="text-2xl uppercase font-thin">Facewash</h1>
          <h1 className="text-6xl mt-2">*</h1>
          <h1 className="text-2xl uppercase font-thin">Cooking ESSENTIALS</h1>
          <h1 className="text-6xl mt-2">*</h1>
          <h1 className="text-2xl uppercase font-thin">Herbal oils</h1>
          <h1 className="text-6xl mt-2">*</h1>
          <h1 className="text-2xl uppercase font-thin">health & Beauty</h1>
          <h1 className="text-6xl mt-2">*</h1>
          <h1 className="text-2xl uppercase font-thin">Hot beverages</h1>
          <h1 className="text-6xl mt-2">*</h1>
        </div>
      </div>
    </div>
  );
}
