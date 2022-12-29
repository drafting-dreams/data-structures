class PriorityQueue {
  q = [-1]

  constructor(lessFunction) {
    this.lessThan = (a, b) => lessFunction(this.q[a], this.q[b]) < 0
  }

  size() {
    return this.q.length - 1
  }

  add(x) {
    this.q.push(x)
    this.swim(this.q.length - 1)
  }

  poll() {
    this.swap(1, this.q.length - 1)
    let re = this.q.pop()
    this.sink(1)
    return re
  }

  left(i) {
    return 2 * i
  }
  right(i) {
    return 2 * i + 1
  }
  parent(i) {
    return Math.floor(i / 2)
  }

  swap(a, b) {
    const temp = this.q[a]
    this.q[a] = this.q[b]
    this.q[b] = temp
  }

  swim(i) {
    if (i <= 1) return
    const p = this.parent(i)
    if (this.lessThan(i, p)) {
      this.swap(p, i)
      this.swim(p)
    }
  }

  sink(i) {
    if (i >= this.q.length) return
    const l = this.left(i)
    const r = this.right(i)
    let smallest = i
    if (this.q.length > l && this.lessThan(l, i)) {
      smallest = l
    }
    if (this.q.length > r && this.lessThan(r, smallest)) {
      smallest = r
    }
    if (i !== smallest) {
      this.swap(i, smallest)
      this.sink(smallest)
    }
  }
}
