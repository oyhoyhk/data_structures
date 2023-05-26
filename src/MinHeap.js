class MinHeap {
	constructor() {
		this.heap = [];
	}

	add(n) {
		this.heap.push(n);
		if (this.heap.length === 1) return;
		let cur = this.heap.length - 1;
		let parent = Math.floor((cur - 1) / 2);
		while (parent !== cur && this.heap[parent] > this.heap[cur]) {
			[this.heap[parent], this.heap[cur]] = [this.heap[cur], this.heap[parent]];
			cur = parent;
			parent = Math.floor((cur - 1) / 2);
		}
	}
	poll() {
		const result = this.heap[0];
		[this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
		this.heap.pop();
		let cur = 0;
		let left = cur * 2 + 1,
			right = cur * 2 + 2;
		while (
			(this.heap[left] !== undefined && this.heap[cur] > this.heap[left]) ||
			(this.heap[right] !== undefined && this.heap[cur] > this.heap[right])
		) {
			let target = left;
			if (this.heap[right] !== undefined && this.heap[left] > this.heap[right]) target = right;
			[this.heap[cur], this.heap[target]] = [this.heap[target], this.heap[cur]];
			cur = target;
			left = cur * 2 + 1;
			right = cur * 2 + 2;
		}
		return result;
	}

	length() {
		return this.heap.length;
	}
	done() {
		return new Set([...this.heap]).size === 1;
	}
}
