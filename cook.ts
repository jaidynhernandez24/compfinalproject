/**
 * A LinkedList node is used to hold a value and a reference to either the next
 * node in the list, or `null` if this is the last element in the list.
 */
export interface LinkedList {
  data: number;
  next: LinkedList;
}

/**
 * Initialize a new LinkedList node that holds the given data and has a `null`
 * reference to the next node.
 */
export const initList = (data: number): LinkedList => {
  return {data, next: null};
};

//okay goodluck have fun
/** 
 * Returns a string representation of the list contents with a single space
 * character separating them. If the input list is `null`, return the empty
 * string "". 
 */
export const report = (list: LinkedList): string => {
  let cursor = list;
  let buf = " ";
  while (cursor != null) {
    buf += cursor.data + " ";
    cursor = cursor.next;
  }
  return buf.trim();
  //trim() removes extra white space
};

/**
 * Remove the element found at the given offset from the list and returns a
 * reference to the first node after performing the removal. If the given offset
 * isn't addressable in the list, take no action and return the input list.
 */
export const removeAt = (list: LinkedList, offset: number): LinkedList => {
  let cursor = list;
  let counter = 0;

  if (list == null) {
    return list;
  }
  if (offset == 0) {
    return list.next;
  }
  while (counter < offset - 1 && cursor != null) {
    cursor = cursor.next;
    counter++;
  }
  if (cursor == null || cursor.next == null) {
    return list;
  }
  cursor.next = cursor.next.next;
  return list;
};