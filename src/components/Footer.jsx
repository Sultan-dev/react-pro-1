import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 text-gray-300 gap-10">
      <div>
        <h1 className="flex-1 text-3xl font-bold text-[#00df90]">React.</h1>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quam
          assumenda cumque repudiandae modi sapiente. Consectetur distinctio
          esse nemo cum quidem eius, expedita corrupti alias dignissimos, harum
          perspiciatis error sit?
        </p>
        <div className="flex flex-row gap-1 justify-between mt-3">
          <FaDribbbleSquare size={25} />
          <FaFacebookSquare size={25} />
          <FaGithubSquare size={25} />
          <FaInstagram size={25} />
          <FaTwitterSquare size={25} />
        </div>
      </div>
      <div className="lg:col-span-2 flex flex-row justify-between">
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="mt-2 text-sm">About</li>
            <li className="mt-2 text-sm">Blog</li>
            <li className="mt-2 text-sm">Jobs</li>
            <li className="mt-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="mt-2 text-sm">Analytics</li>
            <li className="mt-2 text-sm">Marketing</li>
            <li className="mt-2 text-sm">Commerce</li>
            <li className="mt-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="mt-2 text-sm">Pricing</li>
            <li className="mt-2 text-sm">Documentation</li>
            <li className="mt-2 text-sm">Guides</li>
            <li className="mt-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="mt-2 text-sm">Claim </li>
            <li className="mt-2 text-sm">Policy</li>
            <li className="mt-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
