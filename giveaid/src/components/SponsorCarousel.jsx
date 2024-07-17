/* src/components/SponsorCarousel.jsx */
import React, { useEffect, useRef } from 'react';

const sponsors = [
  'https://logos-world.net/wp-content/uploads/2021/11/UN-Logo.png',
  'https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png',
  'https://logos-world.net/wp-content/uploads/2020/08/Bitcoin-Logo-700x394.png',
  'https://logos-world.net/wp-content/uploads/2020/05/Visa-Logo-700x394.png',
  'https://www.blacknight.com/wp-content/uploads/2019/08/buy-dot-tech-domain-logo-register-with-blacknight.png',
  'https://media.licdn.com/dms/image/D4E12AQE2l97kOckvDQ/article-cover_image-shrink_720_1280/0/1654084253078?e=2147483647&v=beta&t=R0_eQISDdkFzi5t585UzZGp4uzamNjn5XIO-cO2rMgc',
  'https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo-700x394.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/1024px-DigitalOcean_logo.svg.png',
  // Add more sponsor URLs
];

const SponsorCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1;
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    };
    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div ref={carouselRef} className="flex overflow-x-hidden whitespace-nowrap w-full">
      {sponsors.concat(sponsors).map((src, index) => (
        <img key={index} src={src} alt={`Sponsor ${index}`} className="w-32 h-24 object-contain" />
      ))}
    </div>
  );
};

export default SponsorCarousel;

