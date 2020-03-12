// Iteracting over an array of objects
// A usefull contruct in react componets to display lists of DataTransferItemList

const values = [
    { label: 'First', checked: false },
    { label: 'Second', checked: false },
    { label: 'Third', checked: false }
  ];

const testfn = (values ) => (

    values.map((value, index) => {
        console.log("Index: "+ index, " Checked: "+value.checked, " Label: "+value.label)
    })
      
    );


testfn(values)
