/* src/components/TileSection.jsx */
import React from 'react'
import Tile from './Tile'

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

