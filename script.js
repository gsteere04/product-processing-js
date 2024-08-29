const startProcessing = () => {
    const products = [
      { name: "Laptop", category: "Electronics", price: 1000, quantity: 5, inStock: true },
      { name: "Phone", category: "Electronics", price: 500, quantity: 0, inStock: false },
      { name: "Shirt", category: "Apparel", price: 20, quantity: 100, inStock: true },
      { name: "Jeans", category: "Apparel", price: 40, quantity: 50, inStock: true },
      { name: "TV", category: "Electronics", price: 1500, quantity: 3, inStock: true },
      { name: "Hat", category: "Apparel", price: 15, quantity: 200, inStock: true },
    ];
  
    const discountCategory = "Apparel";
    const discountRate = 0.1; // 10% discount
  
    const processedProducts = processProducts(products, discountCategory, discountRate);
    displayProducts(processedProducts);
  };
  
  const processProducts = (products, discountCategory, discountRate) => {
    return products
      .filter(product => product.inStock) // Filter out out-of-stock products
      .map(product => {
        let totalValue = product.price * product.quantity; // Calculate total value
        if (product.category === discountCategory) {
          totalValue -= totalValue * discountRate; // Apply discount
        }
        return {
          name: product.name,
          category: product.category,
          discountedTotalValue: totalValue.toFixed(2) // Format to 2 decimal places
        };
      });
  };
  
  const displayProducts = (products) => {
    const output = document.getElementById("output");
    output.innerHTML = ""; // Clear previous output
    products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
      productDiv.innerHTML = `
        <strong>${product.name}</strong> 
        <p>Category: ${product.category}</p>
        <p>Discounted Total Value: $${product.discountedTotalValue}</p>
      `;
      output.appendChild(productDiv);
    });
  };
  