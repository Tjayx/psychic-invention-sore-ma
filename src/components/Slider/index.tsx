//slider.tsx
import { useState } from "react";
import "./index.css";
import ProductCard, { type ProductTestimonialCardProps } from "../Product-Card";
import earpudImage from "../../assets/earpod-image.png";
import powerstation2 from "../../assets/powerstation-2.png";
import speaker from "../../assets/speaker.png";
import hex600Image from "../../assets/hex_600_solar.png";
import energyBlockImage from "../../assets/energy_block.png";
import noFrost911 from "../../assets/no-frost-911.png";
import inverterAC from "../../assets/inverter-ac.png";
import cerealBrands from "../../assets/cerealBrands.png";
import fAndfWines from "../../assets/fandfwines.jpg";
import confectioneries from "../../assets/confectioneries.jpg";
import detergentBrands from "../../assets/detergentBrands.png";
import containerised from "../../assets/containerised_storage_unit.png";
import washingMachine from "../../assets/auto_washing_machine.png";
import energyMeter from "../../assets/energy_meter.png";

type CategoryType = "FMCGs" | "Electronics" | "Solar";

const index = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("Electronics");

  const productCategories: Record<CategoryType, ProductTestimonialCardProps[]> = {
    Electronics: [
      {
        productName: "Refrigerator",
        specifications: ["Energy Efficient Refrigerator",],
        image: noFrost911,
      },
      {
        productName: "Air Conditioner",
        specifications: ["Inverter Technology", "Energy Saving"],
        image: inverterAC,
      },
      {
        productName: "Washing Machine",
        specifications: ["Touch Control"],
        image: washingMachine,
      },
      {
        productName: "Vortex",
        specifications: ["Wireless Earbuds", "Premium Sound"],
        image: earpudImage,
      },
      {
        productName: "PowerGO 210P",
        specifications: ["Compact Design", "Multiple Outlets"],
        image: powerstation2,
      },
      {
        productName: "SoundMate",
        specifications: ["Bluetooth Speaker", "HD Audio"],
        image: speaker,
      },
    ],
    "FMCGs": [
      {
        productName: "Cereals",
        specifications: ["", ""],
        image: cerealBrands,
      },
      {
        productName: "Wines",
        specifications: ["", ""],
        image: fAndfWines,
      },
      {
        productName: "Confectioneries",
        specifications: [""],
        image: confectioneries,
      },
      {
        productName: "Detergents",
        specifications: [""],
        image: detergentBrands,
      },
      // Add more FMCG products here
    ],
    Solar: [
      {
        productName: "Energy-Block Hybrid ECO",
        specifications: ["Hybrid Solar System"],
        image: energyBlockImage,
      },
      {
        productName: "HEX 600 Solar",
        specifications: ["600W Solar Panel"],
        image: hex600Image,
      },
      {
        productName: "Containerised Storage Unit",
        specifications: ["120MWh Storage Capacity", "Liquid Cooled"],
        image: containerised,
      },
      {
        productName: "Smart Energy Meter",
        specifications: ["Simple Configuration"],
        image: energyMeter,
      },
    ],
  };

  const categories: CategoryType[] = ["FMCGs", "Electronics", "Solar"];

  // Duplicate products for seamless infinite scroll
  const currentProducts = [
    ...productCategories[activeCategory],
    ...productCategories[activeCategory],
  ];

  return (
    <div className="slider-container">
      {/* Category Toggle Bar */}
      <div className="category-toggle-bar">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`category-tab ${
              activeCategory === category ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Slider */}
      <div className="flex gap-4 products">
        {currentProducts.map(({ image, productName, specifications }, index) => (
          <ProductCard
            productName={productName}
            specifications={specifications}
            image={image}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default index;