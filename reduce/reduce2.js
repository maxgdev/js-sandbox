const initialItems = [
    {
      name: 'AccountBalance',
      Icon: 'AccountBalanceOutlined',
      CheckedIcon: 'AccountBalance'
    },
    {
      name: 'Backup',
      Icon: 'BackupOutlined',
      CheckedIcon: 'Backup'
    },
    {
      name: 'Build',
      Icon: 'BuildOutlined',
      CheckedIcon: 'Build'
    }
  ];

const  result =  initialItems.reduce(
        (state, item) => ({ ...state, [item.name]: false }),
        {}
      )
      console.log(result)
      console.log(initialItems)