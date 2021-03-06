const BinarySearchTree = require('./bst');

// 1

/*

                   3
                /    \
               1       4  
               \         \
                2         6
                        /   \
                       5     9
                            /
                           7
                        
*/

/*

                    E
                  /   \
                A       S
                      /   \
                     Q     Y
                    /     /
                   I     U
                    \   /
                     O T
                    /
                   N  

*/

// 2

/*

                    E
                  /   \
                a       s
                      /   \
                     q     y
                    / \   /
                   e   s u
                    \     \
                     i     t
                      \
                       o
                      /
                     n

*/

// 3

const drill = () => {
  let tree = new BinarySearchTree();

  tree.insert(3, 3);
  tree.insert(1, 1);
  tree.insert(4, 4);
  tree.insert(6, 6);
  tree.insert(9, 9);
  tree.insert(2, 2);
  tree.insert(5, 5);
  tree.insert(7, 7);
  //   console.log(tree.height());
  return tree;
};

// console.log(drill());

// 4

// function tree(t) {
//   if (!t) {
//     return 0; // if theres no argument val then it returns '0'
//   }
//   return tree(t.left) + t.value + tree(t.right); // recusion function that gets the sum of all the tree's values
// }

// console.log(tree(drill()));

// 5
// Line 68

// 6

// const isBST = tree => {
//   let root = tree.value;

//   if (tree.value === null) {
//     return 0;
//   }

//   if (tree.left) {
//     if (tree.left.value < root) {
//       isBST(tree.left);
//     } else {
//       return false;
//     }
//   }

//   if (tree.right) {
//     if (tree.right.value > root) {
//       isBST(tree.right);
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isBST(drill()));

// 7

const threeLargest = (tree, state) => {
  if (tree.right) threeLargest(tree.right, state);
  --state.n;
  if (state.n === 0) state.result = tree.key;
  if (state.result) return;
  if (tree.left) threeLargest(tree.left, state);
};

const state = { n: 3 };
console.log(threeLargest(drill(), state), 'result:', state.result);

// 8

const isBalanced = tree => {
  if (tree.height() < 1) {
    return false;
  }

  let leftHeight = tree.height(tree.left);
  let rightHeight = tree.height(tree.right);

  if (leftHeight - rightHeight > 1) {
    return false;
  } else {
    return true;
  }
};

console.log(isBalanced(drill()));

// 9 (O)n

const matchingBST = (tree1, tree2) => {
  if (tree1.length !== tree2.length) {
    return false;
  }

  let sorted1 = tree1.sort();
  let sorted2 = tree2.sort();

  if (JSON.stringify(sorted1) === JSON.stringify(sorted2)) {
    return true;
  }
  return false;
};

const tree1 = [3, 5, 4, 6, 1, 0, 2];
const tree2 = [3, 1, 5, 2, 4, 6, 0];

console.log(matchingBST(tree1, tree2));
