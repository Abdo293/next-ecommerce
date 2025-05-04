"use client";
import { removeItem, updateQuantity } from "@/store/productSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, CheckCircle2, AlertCircle } from "lucide-react";

// Define TypeScript interfaces
interface ICart {
  id: number;
  title: string;
  price: number;
  quantity: number;
  img: string;
}

interface CartState {
  products: ICart[];
  totalPrice: number;
}

interface RootState {
  cart: CartState;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  paymentMethod: string;
  cardNumber: string;
  cardExpiry: string;
  cardCVV: string;
  promoCode: string;
}

function CheckOut(): JSX.Element {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.cart?.products || []
  );
  const [formData, setState] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "credit",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
    promoCode: "",
  });

  const [promoApplied, setPromoApplied] = useState<boolean>(false);
  const [promoDiscount, setPromoDiscount] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState<"info" | "success" | "error">(
    "info"
  );
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setState({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    // Simulate API call to process order
    setTimeout(() => {
      // Clear cart after order is placed
      products.forEach((product) => {
        dispatch(removeItem(product.id));
      });

      setIsProcessing(false);
      setAlertType("success");
      setAlertMessage("Order placed successfully!");
      setAlertVisible(true);
    }, 2000);
  };

  const validateForm = (): boolean => {
    // Basic validation - expand as needed
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setAlertType("error");
      setAlertMessage("Please fill in all required personal information");
      setAlertVisible(true);
      return false;
    }

    if (
      !formData.address ||
      !formData.city ||
      !formData.postalCode ||
      !formData.country
    ) {
      setAlertType("error");
      setAlertMessage("Please fill in all required personal information");
      setAlertVisible(true);
      return false;
    }

    if (formData.paymentMethod === "credit") {
      if (!formData.cardNumber || !formData.cardExpiry || !formData.cardCVV) {
        setAlertType("error");
        setAlertMessage("Please fill in all required personal information");
        setAlertVisible(true);
        return false;
      }
    }

    return true;
  };

  const applyPromoCode = (): void => {
    const promoCode = formData.promoCode.trim().toUpperCase();

    // Example promo codes
    if (promoCode === "WELCOME10") {
      setPromoDiscount(calculateSubtotal() * 0.1); // 10% off
      setPromoApplied(true);
      setAlertType("success");
      setAlertMessage("Promo code applied: 10% discount!");
      setAlertVisible(true);
    } else if (promoCode === "FREESHIP") {
      setPromoDiscount(calculateShipping());
      setPromoApplied(true);
      setAlertType("success");
      setAlertMessage("Promo code applied: Free shipping!");
      setAlertVisible(true);
    } else {
      setAlertType("error");
      setAlertMessage("Invalid promo code");
      setAlertVisible(true);
      setPromoApplied(false);
      setPromoDiscount(0);
    }
  };

  const calculateSubtotal = (): number => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const calculateTax = (): number => {
    return calculateSubtotal() * 0.07; // 7% tax example
  };

  const calculateShipping = (): number => {
    // Basic shipping calculation, you could make this more complex
    return products.length > 0 ? 15 : 0;
  };

  const calculateTotal = (): number => {
    return (
      calculateSubtotal() + calculateTax() + calculateShipping() - promoDiscount
    );
  };

  const removeFromCart = (productId: number): void => {
    dispatch(removeItem(productId));
  };

  const updateItemQuantity = (productId: number, newQuantity: number): void => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="veiw-cart">
        <div className="container mx-auto flex items-center h-full text-[28px] font-medium">
          <p>Check Out</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        {alertVisible && (
          <Alert
            className={`mb-6 border ${
              alertType === "success"
                ? "bg-green-50 border-green-200 text-green-800"
                : alertType === "error"
                ? "bg-red-50 border-red-200 text-red-800"
                : "bg-yellow-50 border-yellow-200 text-yellow-800"
            }`}
            variant={alertType === "error" ? "destructive" : "default"}
          >
            {alertType === "success" && (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            )}
            {alertType === "error" && (
              <AlertCircle className="h-5 w-5 text-red-500" />
            )}
            {alertType === "info" && <Info className="h-5 w-5 text-blue-500" />}
            <AlertTitle className="capitalize">{alertType}</AlertTitle>
            <AlertDescription>{alertMessage}</AlertDescription>
          </Alert>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Form */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">
                Order Summary
              </h2>

              {products.length === 0 ? (
                <div className="py-6 text-center text-gray-500">
                  Your cart is empty
                </div>
              ) : (
                <div className="space-y-4 mb-6">
                  {products.map((product) => (
                    <div key={product.id} className="flex gap-4">
                      <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={product.img}
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-gray-800">
                          {product.title}
                        </h3>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-gray-600">${product.price}</p>
                          <div className="flex items-center">
                            <button
                              onClick={() =>
                                updateItemQuantity(
                                  product.id,
                                  product.quantity - 1
                                )
                              }
                              className="text-gray-500 hover:text-gray-700 p-1"
                            >
                              -
                            </button>
                            <span className="px-2">{product.quantity}</span>
                            <button
                              onClick={() =>
                                updateItemQuantity(
                                  product.id,
                                  product.quantity + 1
                                )
                              }
                              className="text-gray-500 hover:text-gray-700 p-1"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-sm text-red-500 hover:text-red-700 mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-2 pt-4 border-t border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">
                    ${calculateSubtotal().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (7%)</span>
                  <span>${calculateTax().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>${calculateShipping().toFixed(2)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Promo Discount</span>
                    <span>-${promoDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between pt-4 border-t border-gray-200 text-lg font-semibold">
                  <span>Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="mr-2 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    Free returns within 30 days
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    Secure payment processing
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Personal Information */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Information */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">
                  Payment Method
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="credit-card"
                      name="paymentMethod"
                      value="credit"
                      checked={formData.paymentMethod === "credit"}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <label
                      htmlFor="credit-card"
                      className="text-sm font-medium text-gray-700"
                    >
                      Credit / Debit Card
                    </label>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="paypal"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === "paypal"}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <label
                      htmlFor="paypal"
                      className="text-sm font-medium text-gray-700"
                    >
                      PayPal
                    </label>
                  </div>

                  {formData.paymentMethod === "credit" && (
                    <div className="mt-4 p-4 border border-gray-200 rounded-md bg-gray-50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Card Number
                          </label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Expiration Date
                          </label>
                          <input
                            type="text"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Security Code (CVV)
                          </label>
                          <input
                            type="text"
                            name="cardCVV"
                            value={formData.cardCVV}
                            onChange={handleChange}
                            placeholder="123"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Promo Code Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">
                  Promo Code
                </h2>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="promoCode"
                    value={formData.promoCode}
                    onChange={handleChange}
                    placeholder="Enter promo code"
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={applyPromoCode}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoApplied && (
                  <div className="mt-2 text-sm text-green-600">
                    Promo code applied! You saved ${promoDiscount.toFixed(2)}
                  </div>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={isProcessing}
                className={`w-full flex justify-center items-center font-semibold py-3 px-4 rounded-md transition-colors ${
                  isProcessing
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {isProcessing ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Complete Order"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
