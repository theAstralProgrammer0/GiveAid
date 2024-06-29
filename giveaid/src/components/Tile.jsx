import React from 'react';

const Tile = ({ backgroundImage, title, description }) => {
  return (
    <div
      className="relative w-full h-64 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* For a dark overlay */}
      <div className="relative z-10 text-center text-white p-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

const TilesSection = () => {
  const tilesData = [
    {
      backgroundImage: 'https://via.placeholder.com/600x400',
      title: 'Tile 1',
      description: 'Description for tile 1',
    },
    {
      backgroundImage: 'https://via.placeholder.com/600x400',
      title: 'Tile 2',
      description: 'Description for tile 2',
    },
    {
      backgroundImage: 'https://via.placeholder.com/600x400',
      title: 'Tile 3',
      description: 'Description for tile 3',
    },
    {
      backgroundImage: 'https://via.placeholder.com/600x400',
      title: 'Tile 4',
      description: 'Description for tile 4',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {tilesData.map((tile, index) => (
        <Tile
          key={index}
          backgroundImage={tile.backgroundImage}
          title={tile.title}
          description={tile.description}
        />
      ))}
    </div>
  );
};

export default TilesSection;

