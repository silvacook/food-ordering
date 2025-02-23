import FlyingButton from 'react-flying-item';

export default function AddToCartButton({
  hasSizesOrExtras,
  onClick,
  basePrice,
  image,
}) {
  const defaultImage = '/path/to/default/image.png'; // Set a default image path
  const validImage = image && typeof image === 'string' && image.trim() !== '' ? image : defaultImage;
  const validBasePrice = typeof basePrice === 'number' && !isNaN(basePrice) ? basePrice : 0;

  const handleClick = (e) => {
    e.preventDefault();
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  if (!hasSizesOrExtras) {
    return (
      <div className="flying-button-parent mt-4">
        <FlyingButton
          targetTop={'5%'}
          targetLeft={'65%'}
          src={validImage}
          sourceWidth={50}
          sourceHeight={50}
        >
          <div onClick={handleClick} className="flying-button primary">
            Add to cart ${validBasePrice.toFixed(2)}
          </div>
        </FlyingButton>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="mt-4 bg-orange-600 text-white rounded-full px-8 py-2 hover:bg-orange-500 transition-colors"
    >
      <span style={{ whiteSpace: 'nowrap' }}>
        Add to cart (from ${validBasePrice.toFixed(2)})
      </span>
    </button>
  );
}
