// 节点对象
class Node {
  constructor(data) {
      this.root = this;
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

// 二叉树
class BST {
  constructor() {
      this.root = null;
  }

  // 插入节点
  insert(data) {
      let newNode = new Node(data);
      let insertNode = (node, newNode) => {
          if (newNode.data < node.data) {
              if (node.left === null) {
                  node.left = newNode;
              } else {
                  insertNode(node.left, newNode);
              }
          } else {
              if (node.right === null) {
                  node.right = newNode;
              } else {
                  insertNode(node.right, newNode)
              }
          }
      };

      if (!this.root) {
          this.root = newNode;
      } else {
          insertNode(this.root, newNode)
      }
  }

  /* 中序遍历 =>
      1.访问左子树(先访问左子树中的左子树，再访问左子树中的右子树)；
      2.访问根
      3.访问右子树(先访问右子树中的左子树，再访问右子树中的右子树)

      可以起到排序作用
  */
  inOrder() {
      let backs = [];
      let inOrderNode = (node, callback) => {
          if (node !== null) {
              inOrderNode(node.left, callback);
              backs.push(callback(node.data));
              inOrderNode(node.right, callback);
          }
      }

      let callback = function(v) {
          return v
      }
      inOrderNode(this.root, callback);
      return backs
  }

  // 前序遍历 => 1.访问根节点； 2.访问左子树； 3.访问右子树
  preOrder() {
      let backs = [];
      let preOrderNode = (node, callback) => {
          if (node !== null) {
              backs.push(callback(node.data));
              preOrderNode(node.left, callback);
              preOrderNode(node.right, callback);
          }
      }
      let callback = function(v) {
          return v
      }
      preOrderNode(this.root, callback);
      return backs
  }

  /* 后序遍历 =>
      1.访问左子树。（先访问左子树中的左子树，再访问左子树中的右子树）
      2.访问右子树。（先访问右子树中的左子树，再访问右子树中的右子树）
      3.访问根
  */
  postOrder(){
      let backs = [];
      const postOrderNode = (node,callback) => {
          if(node !== null){
              postOrderNode(node.left,callback);
              postOrderNode(node.right,callback);
              backs.push(callback(node.data))
          }
      };

      let callback = function(v) {
          return v
      }
      postOrderNode(this.root,callback);
      return backs
  }

  // 查找最小值
  getMin(node) {
      let minNode = node => {
          return node ? (node.left ? minNode(node.left) : node) : null
      }

      return minNode(node || this.root)
  }

  // 查找最大值
  getMax(node) {
      let maxNode = node => {
          return node ? (node.right ? maxNode(node.right) : node) : null
      }

      return maxNode(node || this.root)
  }

  // 查找特定值
  find(data) {
      let findNode = (node, data) => {
          if (node == null) return false
          if (node.data === data) return node;
          return findNode((data < node.data) ? node.left : node.right, data);
      }

      return findNode(this.root, data);
  }

  // 删除节点
  // 返回新的二叉树？
  remove(data) {
      let removeNode = (node, data) => {
          if (node === null) return null;
          if (node.data === data) {
              if (node.left === null && node.right === null) return null
              if (node.left === null) return node.right;
              if (node.right === null) return node.left;
              if (node.left !== null && node.right !== null) {
                  let _node = this.getMin(node.right);
                  node.data = _node.data;
                  node.right = removeNode(node.right, data);
                  return node
              }
          } else if (data < node.data) {
              node.left = removeNode(node.left, data);
              return node;
          } else {
              node.right = removeNode(node.right, data);
              return node;
          }
      }

      return removeNode(this.root, data)
  }
}

/***********************************/
// some operation
let datas = [11,7,5,3,6,9,8,10,20,14,12,25,18];
let bst = new BST();
datas.forEach(data => {
  bst.insert(data)
})

console.log(bst)

console.log("中序",bst.inOrder())
// console.log(bst.getMin())