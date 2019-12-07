"use strict";

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // functions to be implemented

  add(element) {
    const node = new Node(element);

    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  // insertAt(element, location)
  // removeFrom(location)
  // removeElement(element)

  // Helper Methods
  // isEmpty
  // size_Of_List

  // print
  print() {
    let list = [];
    let current = this.head;
    while (current) {
      list.push(current.data);
      current = current.next;
    }
    console.log(list.join(" => "));
  }
}

(() => {
  let ll = new LinkedList();
  ll.add(12);
  ll.add(17);
  ll.print();
})();
