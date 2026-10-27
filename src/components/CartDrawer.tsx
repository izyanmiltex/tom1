import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { CartItem, CurrencyCode } from '../types';
import { formatPrice } from '../utils/formatters';

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  currency: CurrencyCode;
  onClose: () => void;
  onUpdateQty: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  items,
  currency,
  onClose,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Shipping details state for checkout
  const [checkoutName, setCheckoutName] = useState('Devin Sharma');
  const [checkoutEmail, setCheckoutEmail] = useState('client@ralphlauren.in');
  const [checkoutCity, setCheckoutCity] = useState('New Delhi');

  if (!isOpen) return null;

  const subtotalINR = items.reduce(
    (sum, item) => sum + item.product.priceINR * item.quantity,
    0
  );

  const discountINR = (subtotalINR * appliedDiscount) / 100;
  const totalINR = Math.max(0, subtotalINR - discountINR);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoInput.trim().toUpperCase();
    if (code === 'RLVIP10' || code === 'POLO10') {
      setAppliedDiscount(10);
      setPromoMessage('Promo code RLVIP10 applied: 10% Luxury Courtesy applied.');
    } else if (code === 'PURPLE15') {
      setAppliedDiscount(15);
      setPromoMessage('Promo code PURPLE15 applied: 15% VIP Courtesy applied.');
    } else {
      setPromoMessage('Invalid promotion code. Try code: RLVIP10');
    }
  };

  const handleFinalizeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    setTimeout(() => {
      onClearCart();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between border-l border-gray-200 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-200 flex items-center justify-between bg-[#faf9f8]">
          <div className="flex items-center space-x-2">
            <span className="font-serif-brand text-lg tracking-wider text-[#1E5631]">
              Shopping Bag
            </span>
            <span className="text-xs text-gray-500 font-medium">
              ({items.reduce((acc, i) => acc + i.quantity, 0)} pieces)
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Shopping Bag"
            className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content View: Cart vs Checkout vs Order Complete */}
        {orderComplete ? (
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-[#1E5631] animate-bounce" />
            <h3 className="font-serif-brand text-2xl text-black">
              Thank You for Your Order
            </h3>
            <p className="text-xs text-gray-600 max-w-sm leading-relaxed">
              Your Selleria Luxury order has been received with reference <span className="font-mono font-semibold text-[#1E5631]">#SL-IN-{Math.floor(100000 + Math.random() * 900000)}</span>.
              A confirmation email has been dispatched to {checkoutEmail}.
            </p>
            <div className="p-4 bg-[#F0F6F2] border border-[#1E5631]/20 w-full text-left text-xs space-y-1.5 text-gray-700">
              <p className="font-semibold text-[#1E5631]">Delivery Destination:</p>
              <p>{checkoutName}, {checkoutCity}, India</p>
              <p className="text-[11px] text-gray-500">Estimated delivery: 2-3 business days via Insured Express Courier.</p>
            </div>
            <button
              onClick={() => {
                setOrderComplete(false);
                setIsCheckingOut(false);
                onClose();
              }}
              className="mt-4 px-8 py-3 bg-[#1E5631] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#164225] transition-colors"
            >
              Continue Exploring
            </button>
          </div>
        ) : isCheckingOut ? (
          /* Checkout Step Form */
          <div className="p-6 flex-1 overflow-y-auto space-y-6">
            <button
              onClick={() => setIsCheckingOut(false)}
              className="text-xs text-gray-500 hover:text-[#1E5631] uppercase tracking-wider font-medium flex items-center gap-1"
            >
              ← Back to Bag
            </button>

            <div>
              <h3 className="font-serif-brand text-xl text-black mb-1">
                Luxury Express Delivery
              </h3>
              <p className="text-xs text-gray-500">
                Please provide your Indian delivery coordinates for insured dispatch.
              </p>
            </div>

            <form onSubmit={handleFinalizeOrder} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-700 uppercase tracking-wider text-[10px] font-semibold mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={checkoutName}
                  onChange={(e) => setCheckoutName(e.target.value)}
                  className="w-full p-2.5 border border-gray-300 text-sm focus:border-[#1E5631] outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 uppercase tracking-wider text-[10px] font-semibold mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={checkoutEmail}
                  onChange={(e) => setCheckoutEmail(e.target.value)}
                  className="w-full p-2.5 border border-gray-300 text-sm focus:border-[#1E5631] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 uppercase tracking-wider text-[10px] font-semibold mb-1">
                    City / State
                  </label>
                  <input
                    type="text"
                    required
                    value={checkoutCity}
                    onChange={(e) => setCheckoutCity(e.target.value)}
                    className="w-full p-2.5 border border-gray-300 text-sm focus:border-[#1E5631] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 uppercase tracking-wider text-[10px] font-semibold mb-1">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    defaultValue="110001"
                    required
                    className="w-full p-2.5 border border-gray-300 text-sm focus:border-[#1E5631] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 uppercase tracking-wider text-[10px] font-semibold mb-1">
                  Payment Method
                </label>
                <div className="p-3 border border-gray-300 bg-gray-50 space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer font-medium text-[#1E5631]">
                    <input type="radio" name="pay" defaultChecked className="accent-[#1E5631]" />
                    <span>Credit / Debit Card (Visa, Mastercard, Amex)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                    <input type="radio" name="pay" className="accent-[#1E5631]" />
                    <span>UPI / NetBanking / International Wire Transfer</span>
                  </label>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm font-semibold text-[#1E5631] mb-3">
                  <span>Total Due</span>
                  <span>{formatPrice(totalINR, currency)}</span>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1E5631] hover:bg-[#164225] text-white text-xs uppercase tracking-[0.25em] font-medium transition-colors shadow-md"
                >
                  Place Order Now
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Normal Cart Item List */
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {/* Free Shipping Banner */}
            <div className="p-3 bg-[#F0F6F2] border border-[#1E5631]/20 text-xs text-gray-700 flex items-center justify-between">
              <span className="font-medium text-[#1E5631]">
                Complimentary Express Delivery Across India
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1E5631]">
                Active
              </span>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-20 text-gray-500 space-y-3">
                <p className="font-serif-brand text-lg text-black">
                  Your shopping bag is empty
                </p>
                <p className="text-xs max-w-xs mx-auto">
                  Explore our collection of handcrafted horse saddles, anatomically shaped bridles, halters, and rider apparel.
                </p>
                <button
                  onClick={onClose}
                  className="mt-3 px-6 py-2.5 bg-[#1E5631] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#164225] transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4 divide-y divide-gray-100">
                {items.map((item, idx) => (
                  <div key={idx} className="pt-4 first:pt-0 flex gap-4">
                    {/* Item Image */}
                    <div className="w-20 h-26 bg-gray-100 border border-gray-200 overflow-hidden flex-shrink-0">
                      <img
                        referrerPolicy="no-referrer"
                        src={item.selectedColor.image || item.product.primaryImage}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 flex flex-col justify-between text-xs">
                      <div>
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-[#1E5631] font-semibold block">
                              {item.product.subBrand}
                            </span>
                            <h4 className="font-medium text-gray-900 line-clamp-1">
                              {item.product.name}
                            </h4>
                          </div>
                          <button
                            onClick={() => onRemoveItem(idx)}
                            aria-label="Remove item"
                            className="text-gray-400 hover:text-red-700 p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-gray-500 mt-1 space-y-0.5 text-[11px]">
                          <p>
                            Color: <span className="text-gray-800 font-medium">{item.selectedColor.name}</span>
                          </p>
                          <p>
                            Size: <span className="text-gray-800 font-medium">{item.selectedSize}</span>
                          </p>
                          {item.isGiftBox && (
                            <p className="text-[#1E5631] flex items-center gap-1 font-medium">
                              <Sparkles className="w-3 h-3 text-[#1E5631]" />
                              Presentation Box included
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-gray-300">
                          <button
                            onClick={() => onUpdateQty(idx, item.quantity - 1)}
                            className="p-1 text-gray-600 hover:bg-gray-100"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 font-semibold text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQty(idx, item.quantity + 1)}
                            className="p-1 text-gray-600 hover:bg-gray-100"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-semibold text-gray-900 text-sm">
                          {formatPrice(item.product.priceINR * item.quantity, currency)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Footer actions when cart has items and not yet ordered */}
        {items.length > 0 && !orderComplete && !isCheckingOut && (
          <div className="p-5 border-t border-gray-200 bg-[#faf9f8] space-y-4">
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                placeholder="Enter Promo Code (e.g. SELLERIA10)"
                className="flex-1 px-3 py-2 text-xs border border-gray-300 bg-white text-gray-900 uppercase tracking-wider focus:outline-none focus:border-[#1E5631]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#1E5631] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#164225] transition-colors"
              >
                Apply
              </button>
            </form>
            {promoMessage && (
              <p className="text-[11px] text-[#1E5631] font-medium">{promoMessage}</p>
            )}

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-gray-600 pt-2 border-t border-gray-200">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(subtotalINR, currency)}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-[#1E5631] font-medium">
                  <span>VIP Courtesy Discount ({appliedDiscount}%)</span>
                  <span>-{formatPrice(discountINR, currency)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="text-[#1E5631] font-semibold uppercase">Complimentary</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-[#1E5631] pt-2 border-t border-gray-200">
                <span>Estimated Total</span>
                <span>{formatPrice(totalINR, currency)}</span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              id="cart-checkout-btn"
              onClick={() => setIsCheckingOut(true)}
              className="w-full py-3.5 bg-[#1E5631] hover:bg-[#164225] text-white text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1 text-[10px] text-gray-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1E5631]" />
              <span>Encrypted SSL 256-Bit Protection</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
