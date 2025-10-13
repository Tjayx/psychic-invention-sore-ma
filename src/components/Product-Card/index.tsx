import React from "react";
import "./index.css";

export interface ProductTestimonialCardProps {
  productName: string;
  specifications: string[];
  image: any;
}

const index: React.FC<ProductTestimonialCardProps> = ({
  image,
  productName,
  specifications,
}) => {
  return (
    <div className="p-6 border border-gray-200 rounded-xl shadow-xl bg-white hover:shadow-2xl duration-500 w-full hover:scale-105 transition-transform">
      <div className="w-full overflow-hidden mb-4 lg:mb-0 lg:order-1">
        <img
          src={image}
          alt={`Product: ${productName}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center lg:p-4 lg:order-2">
        <h3 className="text-xl font-extrabold text-[#4282bd] mb-2">
          {productName}
        </h3>
        <ul>
          {specifications.map((specification, index) => (
            <li key={index}>{specification}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default index;
