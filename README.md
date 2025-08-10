# Front-end Developer Test – Based on the Existing E-commerce Project

This is a test implementation of a responsive Product Card UI based on the provided eCommerce project template by Hustlr.

## Demo

https://github.com/user-attachments/assets/8270e275-fedf-4890-bb85-940656108ea7

---

## Layout Approach
I implemented a reusable `ProductCard` component that displays the product image, name, price, variant selector, and an action button that changes to "Out of Stock" when unavailable. The design uses a clean, card-based layout with spacing, hover effects, and clear visual hierarchy for easy scanning.

## Responsiveness Considerations
The card layout is built with flexible CSS and relative sizing so it adapts across desktop, tablet, and mobile. Images scale proportionally, text wraps as needed, and a single-column layout is used for narrow screens via media queries.

---

## Run Locally

Clone the project

```bash
  git clone https://dredsoftlabs-admin@bitbucket.org/dredsoftlabs/ecommerce.git
```

Go to the project directory

```bash
  cd eCommerce
```

Install dependencies

```bash
  npm install

  or 

  npm install react-material-ui-carousel --save --legacy-peer-deps
```

Start the server

```bash
  npm start
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```
