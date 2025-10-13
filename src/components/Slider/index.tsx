import "./index.css";
import ProductCard, { type ProductTestimonialCardProps } from "../Product-Card";
import earpudImage from "../../assets/earpod-image.png";
import powerbank from "../../assets/powerbank.png";
import powerstation from "../../assets/powerstation.png";
import powerstation2 from "../../assets/powerstation-2.png";
import speaker from "../../assets/speaker.png";

const index = () => {
  const products: ProductTestimonialCardProps[] = [
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
