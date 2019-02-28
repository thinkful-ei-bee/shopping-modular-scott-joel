'use strict';
/* global cuid Item */

const store = (function() {
  const foo = 'bar';

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findById = function(id) {
    return items.find( element => element.id === id);
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch(error) {
      console.log(`store.addItem(): ${error.message}`);
    }
  };

  const findAndToggleChecked = function(id) {
    this.findById(id).checked = !this.findById(id).checked;
  };

  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      this.findById(id).name = newName;
    } 
    catch(error) {
      console.log(`store.findAndUpdateName(): ${error.message}`);
    }
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(element => element.id !== id );
  };
  
  return {
    items, 
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
  };

}() );