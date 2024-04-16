






function calculateInvoiceTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (!item.quantity || !item.price) {
            console.error('Invalid item', item);
            continue;
        }
        const itemTotal = item.quantity * item.price;
        total += itemTotal;
    }
    return total;
}










function calculateInvoiceTotal(items) {
    let total = 0;
    items.forEach(item => {
        if (!item.quantity || !item.price) {
            console.error('Invalid item', item);
        } else {
            total += item.quantity * item.price;
        }
    });
    return total;
}
//可以看到将在 for 循环内运行的复杂代码转换为另一种方法以简化和提高可读性。






/** 
  function calculateInvoiceTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemTotal = calculateItemTotal(item);
      total += itemTotal;
    }
    return total;
  }
  
  function calculateItemTotal(item) {
    if (!item.quantity || !item.price) {
      console.error('Invalid item', item);
      return 0;
    }
    return item.quantity * item.price;
  }
  */