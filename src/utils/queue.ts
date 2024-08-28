class Node<T> {
  value: T
  next: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedListQueue<T> {
  private head: Node<T> | null = null
  private tail: Node<T> | null = null
  // private length: number = 0

  enqueue(value: T): void {
    const newNode = new Node(value)
    if (this.tail) {
      this.tail.next = newNode
      this.tail = newNode
    } else {
      this.head = this.tail = newNode
    }
    // this.length++
  }

  dequeue(): T | null {
    if (!this.head) return null
    const value = this.head.value
    this.head = this.head.next
    if (!this.head) {
      this.tail = null
    }
    // this.length--
    return value
  }

  isEmpty(): boolean {
    // return this.length === 0
    return this.head === null
  }

  // size(): number {
  //   return this.length
  // }
}

export { SinglyLinkedListQueue }
