import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component{
    render () {
        return (
            <div className="product">
                <p>{this.props.name}</p>
                {this.props.producer ? <p>{this.props.producer}</p> : null}
                <p>{this.props.color}</p>
                <p>{this.props.hasWatermark ? 'Watermarked' : 'Not watermarked'}</p>
                <p>{this.props.weight}</p>
            </div>
        );
    }
}

Product.defaultProps ={
    hasWatermark: false,
};
Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    weight: (props, propName) => {
        const weight = props[propName];
        if (weight === undefined) {
            return new Error('The `weight` prop is required.');
          }
      
          if (isNaN(weight)) {
            return new Error('The `weight` prop is not a number.');
          }
      
          const isValidWeight = weight > 80 && weight < 300;
      
          if (!isValidWeight) {
            return new Error('The `weight` prop should range between 80 and 300.');
          }
    },
};