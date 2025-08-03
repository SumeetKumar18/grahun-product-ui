import React from "react";
import { ChevronUp, X } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  match: "Perfect Match" | "Decent Match" | "Partial Match";
  matchPercentage: number;
}

interface RecommendationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const RecommendationDrawer: React.FC<RecommendationDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const products: Product[] = [
    {
      id: "prev",
      name: "Classic Sterling Band",
      price: "$19.99",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/79e899e6a64cc1d3cf3f16ddc85a962385344142?width=400",
      match: "Partial Match",
      matchPercentage: 65,
    },
    {
      id: "current",
      name: "Six piece band ring",
      price: "$23.99",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/79e899e6a64cc1d3cf3f16ddc85a962385344142?width=400",
      match: "Decent Match",
      matchPercentage: 85,
    },
    {
      id: "next",
      name: "Elegant Stackable Set",
      price: "$29.99",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/79e899e6a64cc1d3cf3f16ddc85a962385344142?width=400",
      match: "Perfect Match",
      matchPercentage: 95,
    },
  ];

  const getMatchColor = (match: string) => {
    switch (match) {
      case "Perfect Match":
        return "text-green-400";
      case "Decent Match":
        return "text-grahun-yellow";
      case "Partial Match":
        return "text-orange-400";
      default:
        return "text-white";
    }
  };

  const getMatchBgColor = (match: string) => {
    switch (match) {
      case "Perfect Match":
        return "bg-green-400/20 border-green-400/30";
      case "Decent Match":
        return "bg-grahun-yellow/20 border-grahun-yellow/30";
      case "Partial Match":
        return "bg-orange-400/20 border-orange-400/30";
      default:
        return "bg-grahun-white-20 border-grahun-white-20";
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-grahun-dark border-t border-grahun-white-20 z-50 transition-transform duration-500 ease-out ${
          isOpen ? "transform translate-y-0" : "transform translate-y-full"
        }`}
      >
        {/* Handle Bar */}
        <div className="flex justify-center pt-4 pb-2">
          <div
            className="w-12 h-1 bg-grahun-white-40 rounded-full cursor-pointer hover:bg-grahun-white-70 transition-colors"
            onClick={onClose}
          />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-grahun-white-20">
          <div>
            <h3 className="text-white text-xl font-semibold">
              Recommendations
            </h3>
            <p className="text-grahun-white-40 text-sm">
              Based on your preferences
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-grahun-white-20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="px-6 py-6 max-h-[60vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`relative group cursor-pointer transition-all duration-300 hover:scale-105 ${
                  index === 1 ? "md:scale-105 md:z-10" : ""
                }`}
              >
                {/* Current Product Badge */}
                {index === 1 && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-grahun-yellow text-black px-3 py-1 rounded-full text-xs font-medium">
                      Current
                    </div>
                  </div>
                )}

                <div className="bg-grahun-white-10 rounded-2xl p-4 border border-grahun-white-20 hover:border-grahun-white-40 transition-all duration-300">
                  {/* Product Image */}
                  <div className="aspect-square mb-4 bg-grahun-white-5 rounded-xl overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="space-y-3">
                    <h4 className="text-white font-medium text-lg line-clamp-2">
                      {product.name}
                    </h4>

                    <div className="flex items-center justify-between">
                      <span className="text-white font-semibold text-xl">
                        {product.price}
                      </span>
                      <div className="text-right">
                        <div className="text-grahun-white-40 text-xs">
                          Match
                        </div>
                        <div
                          className={`font-semibold text-sm ${getMatchColor(product.match)}`}
                        >
                          {product.matchPercentage}%
                        </div>
                      </div>
                    </div>

                    {/* Match Badge */}
                    <div
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getMatchBgColor(product.match)} ${getMatchColor(product.match)}`}
                    >
                      {product.match}
                    </div>

                    {/* Action Button */}
                    <button className="w-full py-2 bg-grahun-white-20 hover:bg-grahun-yellow hover:text-black text-white rounded-lg transition-all duration-200 font-medium">
                      {index === 1 ? "View Details" : "Switch to This"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-grahun-white-20 bg-grahun-white-5">
          <div className="flex items-center justify-between">
            <span className="text-grahun-white-40 text-sm">
              Swipe up for more options
            </span>
            <button className="text-grahun-yellow hover:text-yellow-400 text-sm font-medium transition-colors">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendationDrawer;
