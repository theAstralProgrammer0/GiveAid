/* src/components/SocialMediaStrip.jsx */
import React from 'react';
import { GrFacebookOption, GrInstagram, GrLinkedin, GrTwitter, GrYoutube, GrGooglePlus } from 'react-icons/gr';
import { SiWhatsapp } from 'react-icons/si';

const socialLinks = [
  { href: 'https://www.facebook.com', icon: <GrFacebookOption size={30} /> },
  { href: 'https://www.instagram.com', icon: <GrInstagram size={30} /> },
  { href: 'https://www.twitter.com', icon: <GrTwitter size={30} /> },
  { href: 'https://www.linkedin.com', icon: <GrLinkedin size={30} /> },
  { href: 'https://www.youtube.com', icon: <GrYoutube size={30} /> },
  { href: 'https://www.whatsapp.com', icon: <SiWhatsapp size={30} /> },
  { href: 'https://www.google.com', icon: <GrGooglePlus size={30} /> },
];

const SocialMediaStrip = () => {
  return (
    <div className="fixed z-[88] top-1/4 left-0 flex flex-col space-y-4 p-2 bg-opacity-50 bg-gray-200 dark:bg-gray-800 rounded-r-lg">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-palette-major transition duration-300 ease-in-out">
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaStrip;

