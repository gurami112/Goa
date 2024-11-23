function NestedMapExample() {
    const categories = [
      { name: "Fruits", items: ["Apple", "Banana", "Orange"] },
      { name: "Vegetables", items: ["Carrot", "Broccoli", "Spinach"] },
    ];
  
    return (
      <div>
        {categories.map((category, index) => (
          <div key={index}>
            <h3>{category.name}</h3>
            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  
  export default NestedMapExample;
  