class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(element) {
    var node = new Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
}

const list = new LinkedList();
list.add(1);
list.add(0);
list.add(2);
list.add(2);
list.add(1);
list.add(0);
list.add(0);
list.add(2);
list.add(1);
list.add(1);
list.add(0);
list.add(1);

let current = list.head;

aggregrate(list.head);

function aggregrate(head) {
  var headZ, headO, headT, tailZ, tailO, tailT;
  var current = head;

  while (current) {
    if (current.element == 0) {
      if (!headZ) {
        headZ = current;
      } else {
        tailZ.next = current;
      }
      tailZ = current;
    } else if (current.element == 1) {
      if (!headO) {
        headO = current;
      } else {
        tailO.next = current;
      }
      tailO = current;
    } else if (current.element == 2) {
      if (!headT) {
        headT = current;
      } else {
        tailT.next = current;
      }
      tailT = current;
    }
    current = current.next;
  }

  tailZ ? (tailZ.next = null) : "";
  tailO ? (tailO.next = null) : "";
  tailT ? (tailT.next = null) : "";

  var last;
  if (headO) {
    tailO.next = headT;
    last = headO;
  } else {
    last = headT;
  }

  if (headZ) {
    tailZ.next = last;
  } else {
    headZ = last;
  }

  return headZ;
}
