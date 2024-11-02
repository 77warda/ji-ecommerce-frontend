import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
function GalleryImages() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <ImageGallery
        items={images}
        thumbnailPosition={isDesktop ? "left" : "bottom"}
        showPlayButton={false}
        showThumbnails={isDesktop}
        showFullscreenButton={true}
        showBullets={true}
        renderItem={(item) => (
          <div className={`w-full ${item.originalHeight}`}>
            <img
              src={item.original}
              alt={item.originalAlt}
              className="bg-gray-100 object-contain w-full h-[50vh] md:h-[75vh] lg:h-[85vh]"
            />
          </div>
        )}
        renderLeftNav={(onClick, disabled) => (
          <TfiAngleLeft
            onClick={onClick}
            disabled={disabled}
            className={`text-2xl text-white top-1/2 transform -translate-y-1/2 absolute z-50  ${
              disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
          />
        )}
        renderRightNav={(onClick, disabled) => (
          <TfiAngleRight
            onClick={onClick}
            disabled={disabled}
            className={`text-2xl text-white top-1/2 transform -translate-y-1/2 absolute z-50 right-0 ${
              disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
          />
        )}
      />
    </>
  );
}

export default GalleryImages;
