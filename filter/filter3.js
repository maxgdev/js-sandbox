// https://stackoverflow.com/questions/34925609/javascript-map-method-on-array-of-string-elements
{
    const string = 'I live at home with my Mum, my Dad and my Brother!';
    const items = string.toLowerCase().replace(/[^a-z0-9-\s]+/, '').split(' ');
    
    const result = items.filter(function(item) {
    return item.split('').reverse().join('') === item;
    });
    
    // returns ['i', 'mum', dad']
    console.log(result)
}


