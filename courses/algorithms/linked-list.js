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

  insertAt(element, index) {
    const node = new Node(element);

    if (this.head == null) {
      this.head = node;
    } else if (index == 0) {
      let oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
      oldHead.next = null;
    } else {
      let insertAfter = this.head;
      let insertAfterIndex = 0;
      while (insertAfterIndex < index - 1) {
        if (insertAfter.next == null) break;
        insertAfter = insertAfter.next;
        insertAfterIndex++;
      }

      let oldNext = insertAfter.next;
      insertAfter.next = node;
      node.next = oldNext;
    }

    this.size++;
  }

  removeAt(index) {
    if (this.size < index + 1 || index < 0) return;

    let currentIndex = 0;
    let current = this.head;
    let previous = null;

    while (currentIndex < index) {
      if (current == null) {
        // break;
        let a = 1345;
      }
      previous = current;
      current = current.next;
      currentIndex++;
    }

    if (previous) {
      previous.next = current.next;
    } else {
      this.head = current.next;
    }
    this.size--;
    console.log("Removed value " + current.data + " at index " + index);
  }

  removeElement(element) {
    let current = this.head;
    let previous = null;

    while (current != null) {
      if (current.data == element) {
        previous.next = current.next;
        this.size--;
        return current.data;
      }

      previous = current;
      current = current.next;
    }

    return null;
  }

  // Helper Methods

  isEmpty() {
    return this.head == null;
  }

  listSize() {
    return this.size;
  }

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
  // creating an object for the Linkedlist class
  var ll = new LinkedList();

  // testing isEmpty on an empty list returns true
  console.log(ll.isEmpty());

  // adding element to the list
  ll.add(10);

  // prints 10
  ll.print();

  // returns 1
  console.log(ll.listSize());

  // adding more elements to the list
  ll.add(20);
  ll.add(30);
  ll.add(40);
  ll.add(50);

  // returns 10 20 30 40 50
  ll.print();

  // prints 50 from the list
  console.log("Removed from list => " + ll.removeElement(50));

  // prints 10 20 30 40
  ll.print();

  // returns 3
  // console.log("Index of 40 " + ll.indexOf(40));

  // insert 60 at second position
  // ll contains 10 20 60 30 40
  ll.insertAt(60, 2);

  // ll.print();

  // returns false
  console.log("is List Empty ? " + ll.isEmpty());

  // prints 10 20 60 40
  ll.print();

  // remove 3rd element from the list
  console.log("ll.removeAt(5)");
  console.log(ll.removeAt(5));

  // prints 10 20 60 40
  ll.print();
})();
