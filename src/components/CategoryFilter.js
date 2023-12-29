import React from "react";

function CategoryFilter({categories, selectedIndex, onCategoryClicked}) {


  const categoryComponents = categories.map( (cat, index) => {
    return(
      <button 
      key={cat}
      className={index === selectedIndex ? "selected" : ""}
      onClick={() => onCategoryClicked(index)}
      >{cat}</button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryComponents}
    </div>
  );
}

export default CategoryFilter;
