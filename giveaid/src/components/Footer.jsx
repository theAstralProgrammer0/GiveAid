import React from 'react';
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedin,
  GrTwitter,
  GrYoutube,
  GrGooglePlus
} from 'react-icons/gr';
import { SiWhatsapp } from 'react-icons/si';
import { Link } from 'react-router-dom';

const socialLinks = [
  { href: 'https://www.facebook.com', icon: <GrFacebookOption size={30} /> },
  { href: 'https://www.instagram.com', icon: <GrInstagram size={30} /> },
  { href: 'https://www.twitter.com', icon: <GrTwitter size={30} /> },
  { href: 'https://www.linkedin.com', icon: <GrLinkedin size={30} /> },
  { href: 'https://www.youtube.com', icon: <GrYoutube size={30} /> },
  { href: 'https://www.whatsapp.com', icon: <SiWhatsapp size={30} /> },
  { href: 'https://www.google.com', icon: <GrGooglePlus size={30} /> }
];

const sections = [
  {
    title: 'Solutions',
    links: ['Marketing', 'Analytics', 'Commerce', 'Insights']
  },
  {
    title: 'Support',
    links: ['Pricing', 'Documentation', 'Guides', 'APIs']
  },
  {
    title: 'Company',
    links: [
      { text: 'About', to: '/about' },
      { text: 'Blog', to: '/blog' },
      { text: 'Jobs' },
      { text: 'Press' },
      { text: 'Careers' }
    ]
  },
  {
    title: 'Legal',
    links: ['Claims', 'Policy', 'Terms']
  }
];

const Footer = () => {
  return (
    <div id="footer" className="mx-auto py-2 px-16 grid lg:grid-cols-3 gap-8 text-palette-dark">
      <div>
        <h1 className="w-full text-3xl text-center font-bold text-palette-major dark:text-palette-text tracking-wider">GiveAid</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, saepe cumque modi porro aut necessitatibus
          voluptatibus incidunt quos ipsa facilis fugit accusantium expedita enim, maxime officiis asperiores odit sequi
          illo.
        </p>
        <div className="flex justify-between md:w-[100%] my-2">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="blank"
              className="hover:cursor-pointer hover:text-palette-majorLight ease-in-out duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-medium text-gray-400">{section.title}</h6>
            <ul>
              {section.links.map((link, idx) =>
                typeof link === 'string' ? (
                  <li
                    key={idx}
                    className="py-2 text-sm hover:font-bold hover:text-lg hover:text-palette-majorLight ease-in-out duration-300"
                  >
                    {link}
                  </li>
                ) : (
                  <Link key={idx} to={link.to}>
                    <li
                      className="py-2 text-sm hover:font-bold hover:text-lg hover:text-palette-majorLight ease-in-out duration-300"
                    >
                      {link.text}
                    </li>
                  </Link>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
      <div className="relative lg:left-[100%] w-full text-center text-gray-500">
        © 2024 GiveAid Foundation
      </div>
    </div>
  );
};

export default Footer;

