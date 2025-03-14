import FlyingButton from 'react-flying-item'

export default function AddToCartButton({
  hasSizesOrExtras, 
  onClick, 
  basePrice, 
  image 
}) {
  if (!hasSizesOrExtras) {
    return (
      <div className="flying-button-parent mt-4">
        <FlyingButton
          targetTop={'5%'}
          targetLeft={'95%'}
          src={image}
        >
          {/* The issue is here - the onClick is being triggered both by the div and by the FlyingButton */}
          {/* Remove the onClick from the div and let FlyingButton handle it */}
          <div className="bg-primary text-[#9e473b] rounded-full px-8 py-2 cursor-pointer">
            Add to cart ${basePrice}
          </div>
        </FlyingButton>
      </div>
    );
  }
  
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 bg-primary text-[#9e473b] rounded-full px-8 py-2"
    >
      <span>Add to cart (from ${basePrice})</span>
    </button>
  );
}