import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-gray-300 p-14 mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-6">
          <div className="space-y-4">
            <h1 className="text-orange-500 text-xl font-bold">Twiggy</h1>
            <p>Delivering happiness to your doorstep, one meal at a time.</p>
            <div className="flex ">
              <Facebook className="mr-2 " />
              <Instagram className="mr-2 " />
              <Twitter className="mr-2 " />
            </div>
          </div>
          <div>
            <h1 className="text-xl mb-2">Quick Links</h1>
            {["Menu", "About Us", "Contact"].map((item) => (
              <div className="mb-2">
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;