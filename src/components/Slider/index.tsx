import "./index.css";
import ProductCard, { type ProductTestimonialCardProps } from "../Product-Card";
import earpudImage from "../../assets/earpod-image.png";
import powerbank from "../../assets/powerbank.png";
import powerstation from "../../assets/powerstation.png";
import powerstation2 from "../../assets/powerstation-2.png";
import speaker from "../../assets/speaker.png";
import hex600Image from "../../assets/hex_600_solar.png";
import energyBlockImage from "../../assets/energy_block.png";
import noFrost911 from "../../assets/no-frost-911.png";
import inverterAC from "../../assets/inverter-ac.png";

const index = () => {
  const products: ProductTestimonialCardProps[] = [
    {
      productName: "Energy-Block Hybrid ECO",
      specifications: ["", ""],
      image: energyBlockImage,
    },
    {
      productName: "HEX 600 Solar",
      specifications: ["", ""],
      image: hex600Image,
    },
    {
      productName: "911 No-Frost",
      specifications: ["", ""],
      image: noFrost911,
    },
    {
      productName: "EACM9KFLORA AC",
      specifications: ["", ""],
      image: inverterAC,
    },
    {
      productName: "Vortex",
      specifications: ["", ""],
      image: earpudImage,
    },
    {
      productName: "Powerboost PD 40K",
      specifications: ["", ""],
      image: powerbank,
    },
    {
      productName: "Powerboost PD 225C",
      specifications: ["", ""],
      image: powerstation,
    },
    {
      productName: "PowerGO 210P",
      specifications: ["", ""],
      image: powerstation2,
    },
    {
      productName: "SoundMate",
      specifications: ["", ""],
      image: speaker,
    },
  ];

  return (
    <div className="flex gap-4 products">
      {products.map(({ image, productName, specifications }, index) => (
        <ProductCard
          productName={productName}
          specifications={specifications}
          image={image}
          key={index}
        />
      ))}
    </div>
  );
};

export default index;
