import Image from "next/image";

const useBuildSlides = (device, imagesToMap) => {
  if (!device) return [];

  return imagesToMap.map((image, index) => ({
    id: index + 1,
    value: (
      <Image key={index} fill unoptimized={true} src={image.src} alt="image" />
    ),
  }));
};

export default useBuildSlides;
