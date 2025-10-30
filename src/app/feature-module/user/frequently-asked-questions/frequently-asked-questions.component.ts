import { Component } from '@angular/core';

@Component({
  selector: 'app-frequently-asked-questions',
  templateUrl: './frequently-asked-questions.component.html',
  styleUrl: './frequently-asked-questions.component.css'
})
export class FrequentlyAskedQuestionsComponent {
selectedCategory: string = 'Ordering'; // default active

  faqCategories = [
    { icon: 'fas fa-shopping-cart', title: 'Ordering', questions: 25 },
    { icon: 'fas fa-credit-card', title: 'Payments', questions: 11 },
    { icon: 'fas fa-truck', title: 'Shipping', questions: 16 },
    { icon: 'fas fa-store', title: 'Sell on Bellaluna', questions: 14 },
    { icon: 'fas fa-user', title: 'Account', questions: 10 },
    { icon: 'fas fa-info-circle', title: 'About Us', questions: 7 },
  ];

  // Category wise questions
orderingQuestions = [
  {
    q: 'How can I place an order on Bellaluna?',
    a: 'You can place an order directly from our website by adding your favorite Korean beauty products to your cart and completing the checkout process.'
  },
  {
    q: 'Do I need an account to place an order?',
    a: 'Yes, having an account is mandatory to place an order for better tracking, order history, and customer support.'
  },
  {
    q: 'Can I use Cash on Delivery (COD) for my order?',
    a: 'Cash on Delivery is available only for products shipped from our India warehouse. For cross-border (Korea warehouse) orders, prepaid payment is mandatory.'
  },
  {
    q: 'Why is Cash on Delivery not available for some products?',
    a: 'Products shipped directly from our Korea warehouse are cross-border items, and COD is not supported for those orders.'
  },
  {
    q: 'Is Aadhaar card required for ordering?',
    a: 'Yes, for cross-border (Korean warehouse) orders, Aadhaar card details are mandatory for customs clearance as per Indian regulations.'
  },
  {
    q: 'Are all products on Bellaluna of Korean origin?',
    a: 'Yes, every product listed on Bellaluna is 100% authentic and sourced directly from top Korean beauty brands.'
  },
  {
    q: 'Where are the products shipped from?',
    a: 'Products are shipped from either our India warehouse or our Korea warehouse, depending on availability and your product selection.'
  },
  {
    q: 'How can I check which warehouse my order is coming from?',
    a: 'Each product page clearly mentions the warehouse (India or Korea) it will be shipped from.'
  },
  {
    q: 'How long will my order take to deliver?',
    a: 'Orders from our India warehouse are delivered within 3–5 working days, while Korea warehouse (cross-border) orders may take 8–15 working days.'
  },
  {
    q: 'Can I track my order after placing it?',
    a: 'Yes, you can track your order in real time from your Bellaluna account under the “My Orders” section.'
  },
  {
    q: 'Can I cancel my order?',
    a: 'Yes, orders can be canceled before dispatch. Once shipped, cancellation is not possible.'
  },
  {
    q: 'Can I modify my order after it has been placed?',
    a: 'Modifications or address changes are not possible once the order is being processed.'
  },
  {
    q: 'What happens if my order is delayed?',
    a: 'Sometimes, delays can occur due to customs or courier issues. You will be notified by email or SMS if there’s any delay.'
  },
  {
    q: 'What should I do if I receive a damaged or wrong product?',
    a: 'Please contact our support team within 24 hours of delivery with pictures. We will arrange a replacement or refund as per our return policy.'
  },
  {
    q: 'Can I return or exchange my order?',
    a: 'Yes, returns or exchanges are accepted as per our return policy for eligible items.'
  },
  {
    q: 'What is Bellaluna’s refund policy?',
    a: 'Refunds are issued to your original payment method after the returned product is verified at our warehouse.'
  },
  {
    q: 'Do you ship internationally?',
    a: 'Currently, Bellaluna ships only within India, but all products are sourced from Korea.'
  },
  {
    q: 'Can I place an order for multiple Korean brands together?',
    a: 'Yes, you can add products from multiple brands to a single order.'
  },
  {
    q: 'Do you provide an invoice for each order?',
    a: 'Yes, a detailed invoice is generated automatically and can be downloaded from your account.'
  },
  {
    q: 'Why is my payment failing?',
    a: 'Payment failures may occur due to network or banking issues. Try using a different payment method or contact support.'
  },
  {
    q: 'Can I reorder my previous purchase?',
    a: 'Yes, you can easily reorder from your order history by clicking on “Reorder”.'
  },
  {
    q: 'Are the prices inclusive of customs and taxes?',
    a: 'For India warehouse products, prices are inclusive of taxes. For Korea warehouse orders, customs duties are included in the final checkout price.'
  },
  {
    q: 'How do I know if a product is in stock?',
    a: 'Stock availability is displayed on each product page and updated in real time.'
  },
  {
    q: 'Can I contact Bellaluna for bulk or wholesale orders?',
    a: 'Yes, you can reach out to our sales team for bulk or wholesale order inquiries.'
  },
  {
    q: 'Do you provide any samples or freebies?',
    a: 'Free samples may be included for selected Korean brands, based on availability and promotions.'
  }
];


paymentsQuestions = [
  {
    q: 'What payment methods does Bellaluna accept?',
    a: 'Bellaluna accepts all major credit and debit cards, UPI, net banking, and wallet payments. Cash on Delivery (COD) is available only for India warehouse orders.'
  },
  {
    q: 'Is Cash on Delivery (COD) available for all products?',
    a: 'No. COD is available only for products shipped from our India warehouse. For cross-border (Korea warehouse) orders, prepaid payment is required.'
  },
  {
    q: 'Why is prepaid payment mandatory for Korea warehouse orders?',
    a: 'Cross-border orders are shipped internationally from Korea and require advance payment for customs clearance and processing.'
  },
  {
    q: 'Can I pay using international cards or PayPal?',
    a: 'Yes, international credit/debit cards are accepted. PayPal support is limited to select orders and may include additional processing fees.'
  },
  {
    q: 'Are there any extra charges for online payments?',
    a: 'Bellaluna does not charge extra fees, but your bank or payment provider may apply small transaction or currency conversion fees.'
  },
  {
    q: 'What currency does Bellaluna accept?',
    a: 'All transactions are processed in Indian Rupees (INR). For international cards, your bank will handle currency conversion automatically.'
  },
  {
    q: 'Is it safe to make online payments on Bellaluna?',
    a: 'Yes. Bellaluna uses SSL encryption and trusted payment gateways to ensure that all transactions are secure and protected.'
  },
  {
    q: 'Can I split my payment across multiple methods?',
    a: 'Currently, Bellaluna supports single-method payment per order for accurate tracking and invoicing.'
  },
  {
    q: 'When is payment confirmed after I place an order?',
    a: 'For prepaid orders, payment is confirmed instantly. For COD orders, confirmation happens once the order is processed for dispatch.'
  },
  {
    q: 'What if my payment fails or gets deducted but the order isn’t placed?',
    a: 'If your payment fails but the amount is deducted, it is automatically refunded by your bank within 3–5 business days. You can also contact Bellaluna support for assistance.'
  },
  {
    q: 'What is the refund process if I cancel or return my order?',
    a: 'Refunds for prepaid orders are issued to your original payment method within 5–7 business days after verification at our warehouse.'
  }
];


  shippingQuestions = [
{ 
    q: 'Do I need an account to start shopping on Bellaluna?', 
    a: 'Yes, creating an account helps you track orders, save your wishlist, and receive personalized offers.' 
  },
  { 
    q: 'Are all products on Bellaluna authentic?', 
    a: 'Absolutely! All products are 100% genuine and sourced directly from leading Korean beauty brands.' 
  },
  { 
    q: 'Are all products made in Korea?', 
    a: 'Yes, every product on Bellaluna originates from Korea and meets strict Korean quality standards.' 
  },
  { 
    q: 'Can I shop from both India and Korea warehouses in one order?', 
    a: 'Yes, you can add items from both warehouses to your cart, but they will be shipped separately with different delivery timelines.' 
  },
  { 
    q: 'How do I know whether a product ships from India or Korea?', 
    a: 'Each product page clearly shows the warehouse location—either India or Korea—so you can identify the shipping source before checkout.' 
  },
  { 
    q: 'Are the prices inclusive of taxes and duties?', 
    a: 'For India warehouse products, prices include GST. For Korea warehouse items, applicable customs duties and charges are included at checkout.' 
  },
  { 
    q: 'Do you offer Cash on Delivery (COD)?', 
    a: 'COD is available only for India warehouse products. Cross-border orders from Korea require prepaid payment.' 
  },
  { 
    q: 'Can I use coupons or promo codes while shopping?', 
    a: 'Yes, valid coupons and promo codes can be applied during checkout to enjoy discounts on your order.' 
  },
  { 
    q: 'How can I find the latest or trending Korean products?', 
    a: 'You can visit the “New Arrivals” and “Bestsellers” sections to explore trending and newly launched Korean beauty products.' 
  },
  { 
    q: 'Does Bellaluna sell limited edition or exclusive Korean products?', 
    a: 'Yes, we frequently add exclusive and limited edition collections directly from Korean brands.' 
  },
  { 
    q: 'Can I save products to purchase later?', 
    a: 'Yes, you can add any item to your wishlist and buy it later from your account dashboard.' 
  },
  { 
    q: 'Do you notify customers about restocks?', 
    a: 'Yes, you can enable “Notify Me” alerts on out-of-stock products to get an update when they’re restocked.' 
  },
  { 
    q: 'Are there any loyalty points or reward programs?', 
    a: 'Bellaluna offers reward points for every purchase. These points can be redeemed for discounts on future orders.' 
  },
  { 
    q: 'Can I compare products before buying?', 
    a: 'Yes, our comparison feature allows you to evaluate ingredients, prices, and benefits across Korean brands before purchasing.' 
  },
  { 
    q: 'Does Bellaluna offer gift wrapping or gift sets?', 
    a: 'Yes, we offer special gift wrapping options and curated Korean skincare gift sets during festive seasons.' 
  },
  { 
    q: 'Is it safe to shop on Bellaluna?', 
    a: 'Yes, Bellaluna uses secure payment gateways and SSL encryption to protect all your shopping and payment information.' 
  }
  ];


  sellOnBellalunaQuestions = [
  { 
    q: 'What does “Sell on Bellaluna” mean?', 
    a: 'Sell on Bellaluna allows beauty brands, distributors, and individual sellers to list and sell their Korean beauty products directly to Indian customers through the Bellaluna marketplace.' 
  },
  { 
    q: 'What are the types of selling options on Bellaluna?', 
    a: 'Bellaluna offers two programs: B2C for direct retail selling to customers, and B2B for wholesale purchasing at factory or distributor prices from Korea.' 
  },
  { 
    q: 'What is the B2C seller program?', 
    a: 'The B2C program allows verified sellers to create an account on the Bellaluna Seller Admin panel, upload product listings, and sell directly to Indian customers.' 
  },
  { 
    q: 'What is the B2B (Wholesale) program?', 
    a: 'The B2B program enables resellers, distributors, and business owners to buy Korean beauty products at wholesale prices directly from our Korea warehouse.' 
  },
  { 
    q: 'How can I register as a B2C seller on Bellaluna?', 
    a: 'Go to the Seller section on the Bellaluna website, sign up with your business details, upload required documents, and submit for verification.' 
  },
  { 
    q: 'What documents are required for seller verification?', 
    a: 'For B2C sellers, GST certificate, business PAN, and brand authorization (if applicable) are required for verification.' 
  },
  { 
    q: 'Can individuals without a brand sell on Bellaluna?', 
    a: 'Yes, individuals can sell as authorized resellers or under their own label after completing the seller verification process.' 
  },
  { 
    q: 'How long does the seller verification process take?', 
    a: 'Verification usually takes 2–3 working days after submitting complete documents and product information.' 
  },
  { 
    q: 'What commission or fees does Bellaluna charge to sellers?', 
    a: 'Bellaluna charges a small service commission per sale depending on the product category. Details are shared during seller onboarding.' 
  },
  { 
    q: 'Can I list my own Korean brand on Bellaluna?', 
    a: 'Yes, if you own or represent a Korean brand, you can list it on Bellaluna by registering through the Seller Admin and completing brand authorization.' 
  },
  { 
    q: 'What are the benefits of the B2B program?', 
    a: 'The B2B program gives access to wholesale pricing, bulk order discounts, and direct sourcing from Korea, ensuring authentic and cost-effective supply for resellers.' 
  },
  { 
    q: 'Can B2B buyers use Cash on Delivery?', 
    a: 'No, B2B (wholesale) orders from Korea require prepaid payment since they are cross-border shipments.' 
  },
  { 
    q: 'Can a seller participate in both B2C and B2B programs?', 
    a: 'Yes, a verified seller can participate in both programs if they meet the eligibility criteria for each.' 
  },
  { 
    q: 'Who should I contact for selling or partnership inquiries?', 
    a: 'You can reach out to our Seller Support team via email or the contact form on the Bellaluna website for any partnership or onboarding assistance.' 
  }
];


accountQuestions = [
  {
    q: 'How do I create an account on Bellaluna?',
    a: 'Click on the “Sign Up” button on the homepage, enter your name, email, phone number, and password, then verify your email to activate your account.'
  },
  {
    q: 'Do I need an account to shop on Bellaluna?',
    a: 'Yes, having an account helps you track orders, manage your wishlist, view order history, and access exclusive offers.'
  },
  {
    q: 'How do I reset my password?',
    a: 'Go to the login page, click on “Forgot Password?”, enter your registered email address, and follow the link sent to your email to reset your password.'
  },
  {
    q: 'Can I change my registered email or phone number?',
    a: 'Yes, you can update your contact details anytime from your “My Account” settings after logging in.'
  },
  {
    q: 'How can I view my order history?',
    a: 'Login to your Bellaluna account and go to “My Orders” to view your current and past purchases.'
  },
  {
    q: 'How can I manage my shipping addresses?',
    a: 'You can add, edit, or remove saved addresses from the “Address Book” section in your account settings.'
  },
  {
    q: 'Can I delete my Bellaluna account?',
    a: 'Yes, you can request account deletion by contacting our customer support team. Once deleted, all data and history will be permanently removed.'
  },
  {
    q: 'Why am I not receiving verification or order emails?',
    a: 'Please check your spam or promotions folder. If you still don’t see the email, ensure your registered email address is correct in your account settings.'
  },
  {
    q: 'Can I have multiple accounts with the same email or phone number?',
    a: 'No, each Bellaluna account must be linked to a unique email address and phone number.'
  },
  {
    q: 'How do I update my profile picture or personal details?',
    a: 'Go to “My Profile” in your account dashboard and click “Edit Profile” to update your name, photo, and other personal information.'
  }
];


aboutQuestions = [
  {
    q: 'Who are we?',
    a: 'Bellaluna is a global beauty marketplace connecting Indian customers with authentic Korean and international cosmetic brands.'
  },
  {
    q: 'What does Bellaluna offer?',
    a: 'We offer a wide range of skincare, makeup, and wellness products sourced directly from top Korean beauty brands and trusted suppliers.'
  },
  {
    q: 'Are all Bellaluna products authentic?',
    a: 'Yes, every product on Bellaluna is 100% authentic and sourced directly from verified brand partners and official distributors.'
  },
  {
    q: 'Where is Bellaluna based?',
    a: 'Bellaluna operates from India with partnerships in Korea for product sourcing and brand collaborations.'
  },
  {
    q: 'What makes Bellaluna different?',
    a: 'We combine Korean skincare innovation with local accessibility, offering genuine products, fast delivery, and exclusive brand deals.'
  },
  {
    q: 'Does Bellaluna collaborate with Korean brands?',
    a: 'Yes, we work directly with leading Korean beauty brands to bring trending and high-quality products to Indian customers.'
  },
  {
    q: 'What is Bellaluna’s mission?',
    a: 'Our mission is to make global beauty accessible, authentic, and affordable for everyone in India.'
  }
];


  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  getQuestionsFor(category: string) {
    switch (category) {
      case 'Ordering': return this.orderingQuestions;
      case 'Payments': return this.paymentsQuestions;
      case 'Shipping': return this.shippingQuestions;
      case 'Sell on Bellaluna': return this.sellOnBellalunaQuestions;
      case 'Account': return this.accountQuestions;
      case 'About Us': return this.aboutQuestions;
      default: return [];
    }
  }
}
