// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    let sums = [];
    helpersums(root, 0, sums);
    return sums;
}
function helpersums(node, runningsum, sums) {
    if (node === null) return;
    let newrunningsum = runningsum + node.value;
    if (node.left === null && node.right === null) {
        sums.push(newrunningsum);
        return;
    }
    helpersums(node.left, newrunningsum, sums);
    helpersums(node.right, newrunningsum, sums);
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
