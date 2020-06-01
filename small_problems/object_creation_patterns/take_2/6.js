let ItemManager = (function() {
  function undefinedParams(...params) {
    return params.some(param => param === undefined);
  }

  function invalidName(name) {
    return name.match(/\S/g).length < 5;
  }

  function invalidCategory(category) {
    return category.match(/\S/g).length < 5 || category.split('').includes(' ');
  }

  function createSku(item, category) {
    return (item.slice(0,3) + category.slice(0, 2)).toUpperCase();
  }

  return {
    items: [],

    create: function(name, category, quantity) {
      if (undefinedParams(name, category, quantity) ||
         invalidName(name) || invalidCategory(category)) {
        return false;
      } else {
        let item = { 
          name: name,
          category: category,
          quantity: quantity,
          sku: createSku(name, category),
        };
  
        this.items.push(item);
      }
    },
    
    update: function(sku, obj) {
      this.items.forEach(item => {
        if (item.sku === sku) {
          Object.keys(obj).forEach(key => {
            item[key] = obj[key];
          });
        }
      });
    },
    
    delete: function(sku) {
      for (let i = 0; i < this.items.length; i += 1) {
        if (this.items[i].sku === sku) {
          this.items.splice(i, 1);
          break
        }
      }
    },
    
    inStock: function() {
      console.log("Here's a list of all items that are in stock:");
      this.items.forEach(item => {
        if (item.quantity > 0) {
          console.log(item);
        }
      });
    },
    
    itemsInCategory: function(category) {
      console.log(`Here's a list of all '${category}' items:`);
      this.items.forEach(item => {
        if (item.category === category) {
          console.log(item);
        }
      });
    },
  }
})();

let ReportManager = {
  init: function(manager) {
    this.items = manager.items
  },

  createReporter: function(sku){
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].sku === sku) {
        let item = this.items[i];
        return {
          itemInfo: function() {
            for (prop in item) {
              console.log(`${prop}: ${item[prop]}`);
            }
          },
        };
        break;
      }
    }
  },

  reportInStock: function() {
    let inStockItems = [];

    this.items.forEach(item => {
      if (item.quantity > 0) {
        inStockItems.push(item.name);
      }
    });

    console.log(inStockItems.join(', '));
  }
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log('list with the 4 valid items', ItemManager.items);       
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log('list with the remaining 3 valid items', ItemManager.items);
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

var kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10