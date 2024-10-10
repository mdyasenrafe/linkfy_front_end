import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface MobilePreviewProps {
  profileImage?: string;
  links: { platform: string; url: string; color: string }[];
}

export const LeftSidePreview: React.FC<MobilePreviewProps> = ({
  profileImage,
  links,
}) => {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center">
      <div className="mobile_case">
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="h-24 w-24 mx-auto rounded-full mb-4"
          />
        ) : (
          <Skeleton circle={true} height={96} width={96} className="mb-4" />
        )}
        {profileImage ? (
          <h2 className="text-center text-xl font-semibold mb-4">
            {profileImage}
          </h2>
        ) : (
          <Skeleton height={20} width={150} className="mx-auto mb-4" />
        )}
        {!profileImage && (
          <Skeleton height={16} width={120} className="mx-auto mb-2" />
        )}
        <div className="flex flex-col space-y-4 mt-6 w-[300px]">
          <a
            href="#"
            className="flex items-center justify-between bg-black text-white px-4 py-3 rounded-md"
          >
            <div className="flex items-center space-x-3">
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </div>
            <span>&rarr;</span>
          </a>
          <a
            href="#"
            className="flex items-center justify-between bg-red-500 text-white px-4 py-3 rounded-md"
          >
            <div className="flex items-center space-x-3">
              <i className="fab fa-youtube"></i>
              <span>YouTube</span>
            </div>
            <span>&rarr;</span>
          </a>
          <a
            href="#"
            className="flex items-center justify-between bg-blue-600 text-white px-4 py-3 rounded-md"
          >
            <div className="flex items-center space-x-3">
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </div>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};
