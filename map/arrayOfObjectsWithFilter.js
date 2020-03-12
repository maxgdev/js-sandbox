// Iterating over an array of objects and filtering checked values
//

const values = [
    { label: 'First', checked: false },
    { label: 'Second', checked: true },
    { label: 'Third', checked: false },
    { label: 'Fourth', checked: true }
  ];

    const filterfn = (values ) => (
        values
        .filter(value => value.checked)
        .map((value, index) => {
            console.log("Index: "+ index, " Checked: "+value.checked, " Label: "+value.label)
            }) 
    );

filterfn(values)