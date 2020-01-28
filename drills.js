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

// 2

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

// 3

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

// 4

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

  return tree;
};

console.log(drill());
