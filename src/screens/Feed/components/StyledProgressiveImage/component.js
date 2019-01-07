import React from 'react';
import PropTypes from 'prop-types';
import { ProgressiveImage } from 'kitsu/components/ProgressiveImage';

export const StyledProgressiveImage = React.memo(props => (
  <ProgressiveImage
    style={{
      width: '100%',
      height: '100%',
      borderRadius: props.borderRadius,
    }}
    {...props}
  />
));

StyledProgressiveImage.propTypes = {
  borderRadius: PropTypes.number,
};

StyledProgressiveImage.defaultProps = {
  borderRadius: 0,
};
