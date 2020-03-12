// find - return first match

const categories = [
    { label: 'Category 1', id: 1, selected: false  },
    { label: 'Category 2', id: 2, selected: true  },
    { label: 'Category 3', id: 3, selected: true  }
  ];

  const products = [
    { label: 'Product 1', id: 1, category: 1, selected: false },
    { label: 'Product 2', id: 2, category: 1, selected: false  },
    { label: 'Product 3', id: 3, category: 1, selected: true  },
    { label: 'Product 4', id: 4, category: 2, selected: true  },
    { label: 'Product 5', id: 5, category: 2, selected: true },
    { label: 'Product 6', id: 6, category: 2, selected: true  },
    { label: 'Product 7', id: 7, category: 3, selected: true  },
    { label: 'Product 8', id: 8, category: 3, selected: true  },
    { label: 'Product 9', id: 9, category: 3, selected: true  }
  ];

const category = categories.find(category => category.selected) || {
    id: ''
  };

const product = products.find(product => product.selected) || {
    id: ''
  };

  console.log(category)
  console.log(product)