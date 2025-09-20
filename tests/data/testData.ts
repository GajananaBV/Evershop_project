export const testData = {
  user: {
    name: "Gajanan Bhange",
    email: "gajanan@example.com",
    password: "Gatha1013@",
  },
  admin: {
    name: "Super Admin",
    email: "admin@admin.com",
    password: "Gatha1013@",
  },
  product: {
    category: ["Men", "Women", "Kids"],
    productId: 1,
    name: "Samsung s25 Ultra Pro",
    description: "Samsung Galaxy S25 Ultra 5G",
    attributes: {
      Color: ["White", "Black", "Yellow"],
      Size: ["XXL", "XL", "SM"],
    },
  },
  coupon: {
    generateCode: (prefix: string = "TEST"): string => {
      return `${prefix}${Math.floor(1000 + Math.random() * 9000)}`;
    },
    discountTypes: [
      "Fixed discount to entire order",
      "Percentage discount to entire order",
      "Fixed discount to specific products",
      "Percentage discount to specific products",
      "Buy X get Y"
    ],
    defaultDiscountType: "Fixed discount to entire order",
    statusOptions: ["Enabled", "Disabled"],
    customerGroups: ["Default", "VIP", "Wholesale"],
    discountAmount: 15.00,
    minOrderAmount: 100.00,
  }
};