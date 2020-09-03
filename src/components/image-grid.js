import React from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import { useGraphQL } from '../hooks';

function ImageGrid() {
  const { homeTwoImage } = useGraphQL();
  return (
    <div className="grid bg-black md:grid-cols-2 lg:grid-cols-3">
      <ServiceImage image={homeTwoImage.childImageSharp.fluid} />
      <ServiceImage image={homeTwoImage.childImageSharp.fluid} />
      <ServiceImage image={homeTwoImage.childImageSharp.fluid} />
      <ServiceImage image={homeTwoImage.childImageSharp.fluid} />
      <ServiceImage image={homeTwoImage.childImageSharp.fluid} />
      <ServiceImage image={homeTwoImage.childImageSharp.fluid} />
    </div>
  );
}

function ServiceImage({ image }) {
  return (
    <div className="relative h-0 aspect-ratio-square">
      <GatsbyImage fluid={image} className="flex-1" />
    </div>
  );
}

ServiceImage.propTypes = {
  image: PropTypes.object.isRequired,
};

export { ImageGrid };
