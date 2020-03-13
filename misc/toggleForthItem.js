// Code snippet fro ComposingMenusWithState.js
// Extracted snippet for better com[prehension
]
const items = [
    { name: 'Enable Fourth' },
    { name: 'Second', onClick: 'onClose' },
    { name: 'Third', onClick: 'onClose' },
    { name: 'Fourth', onClick: 'onClose', disabled: true }
  ];

const toggleFourth = () => {
        let newItems = [...items];
        console.log(items);
        newItems[3] = { ...items[3], disabled: !items[3].disabled };
        newItems[0] = {
          ...items[0],
          name: newItems[3].disabled
            ? 'Enable Fourth'
            : 'Disable Fourth'
        };
  
        console.log(newItems);
};
toggleFourth()