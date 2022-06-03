//BST

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
		let currentNode = this;
		while(true){
			if(value < currentNode.value){
				if(currentNode.left === null){
					currentNode.left = new BST(value);
					break;
				}else{
					currentNode = currentNode.left;
				}
			}else{
				if(currentNode.right === null){
					currentNode.right = new BST(value);
					break;
				}else{
					currentNode = currentNode.right;
				}
			}
		}
    return this;
  }

//   contains(value) {
//     let currentNode = this;
// 		while(currentNode !== null){
// 			if(value < curentNode.value){
// 				currentNode = currentNode.left;
// 			}else if(value > currentNode.value){
// 				currentNode = currenNode.right;
// 			}else{
// 				return true;
// 			}
// 		}
// 		return false;
//   }