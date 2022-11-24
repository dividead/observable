function _1(md){return(
md`# Zen`
)}

function _2(md){return(
md`# DOT

## graph

rankdir = LR;  
orientation=landscape; ??  
{rank = min; i}  
{rank = same; a; b;} 
ranksep=.1;  
node [shape = "square", fixedsize=true, height=0.55];  
nodesep = "0.1 equally";  
ranksep = "0.1 equally";  
edge[style=invisible]  
Object.assign(g, { style: "max-width:100%;height:auto;" })

## node

node [style, shape, ...]  
style = filled  
shape = square, circle, none  
label = nil  
peripheries = 2

### edge
  
dir=both  
`
)}

function _zArray(dot){return(
function zArray (list, index) {
  if(!list.length) return
  const indexes = list.map((_, i) => i)
  const current = list[index]
  const g = dot`graph { 
rankdir = LR; 
node [shape = "square"];
nodesep = .1;
ranksep = "0.1 equally";

subgraph Array {
  ${list.join(' -- ')};
}

subgraph Index {
  node [height=0.1, color=grey];
  ${indexes.map(i => `i${i}`).join(' ')};
  ${indexes.map(i => `i${i} [label=${i}]`).join('\n')};
}

${list.map((v, i) => `{rank = same; i${i}; ${v};}`).join('\n')};
i${index} [color=red, label=${index}]
${current} [color=red]
i${index} -- ${current} [color=red]
}`
  return g
  // return Object.assign(g, { style: "max-width:100%;height:auto;" })
}
)}

function _4(zArray,lost_array){return(
zArray(lost_array,2)
)}

function _walk_array(zArray,loop_forever){return(
function walk_array (list){
  const steps = list.map((_, i) =>  zArray(list, i))
  
  return loop_forever(steps, 500)
}
)}

function _6(walk_array,lost_array){return(
walk_array(lost_array)
)}

function _zList(dot){return(
function zList (list, value) {
  if(!list) return dot`digraph { node [shape = "circle"] nil; }`
  const nodes = []
  let head = list
  let tail = null
  while(head){
    const {val, next} = head
    nodes.push(val)
    tail = val
    head = next
  }
  
  const g = dot`digraph { 
rankdir = LR; 
node [shape = "circle", height=0.55];
nodesep = "0.2 equally";
ranksep = "0.3 equally";

${nodes.join(' -> ')};
${tail} -> nil;
${value} [color=red];
}`
  return g
}
)}

function _8(zList,lost_linked_list){return(
zList(lost_linked_list, 8)
)}

function _walk_linked_list(zList,loop_forever){return(
function walk_linked_list (list){
  const steps = []
  let node = list
  while(node){
    const {val, next} = node
    steps.push(zList(list, val))
    node = next
  }
  
  return loop_forever(steps, 500)
}
)}

function _10(walk_linked_list,lost_linked_list){return(
walk_linked_list(lost_linked_list)
)}

function _zBinaryTree(dot,random){return(
function zBinaryTree (root, value, visited = new Set()) {
  if(!root) return dot`digraph { node [shape = "circle"] nil; }`
  const edges = []
  const nodes = []
  let leafs = 0
  const dfs = (node) => {
    if(!node) return
    
    const {val, left, right} = node
    nodes.push(val)
    if(left){
      edges.push(`${val} -> ${left.val};`)
      dfs(left)
    } else if (right) {
      const id = 'l_'+random()
      const leaf = `${id} [label=nil]`
      nodes.push(leaf)
      edges.push(`${val} -> ${id};`)
    }
    
     if(right){
      edges.push(`${val} -> ${right.val};`)
      dfs(right)
    } else if (left) {
      const id = 'l_'+random()
      const leaf = `${id} [label=nil]`
      nodes.push(leaf)
      edges.push(`${val} -> ${id};`)
    }
  }
  
  dfs(root)
  
  const g = dot`digraph { 
node [shape = "circle", height=0.55];
nodesep = "0.2 equally";
ranksep = "0.3 equally";
fixedsize=true;
${nodes.join('\n')}
${edges.join('\n')}
_x [label=${value}, penwidth=2, color=red];
${[...visited].map(i => `${i} [penwidth=2,color=blue]`).join('\n')}
}`
  
  return g
}
)}

function _12(zBinaryTree,lost_binary_tree){return(
zBinaryTree(lost_binary_tree, 23)
)}

function _walk_binary_tree(zBinaryTree,loop_forever){return(
function walk_binary_tree(tree){
  const steps = []
  const visited = new Set()
  const dfs = node => {
    if(!node)return
    const {val, left, right} = node
    steps.push(zBinaryTree(tree, val, visited))
    visited.add(val)
    dfs(left)
    dfs(right)
  }
  dfs(tree, visited)
  
  return loop_forever(steps, 600)
}
)}

function _14(walk_binary_tree,lost_binary_tree){return(
walk_binary_tree(lost_binary_tree)
)}

function _15(md){return(
md`# [Range Sum of BST (938)](https://leetcode.com/problems/range-sum-of-bst/)

Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].`
)}

function _rangeSumBST(zBinaryTree,loop_forever){return(
function rangeSumBST (root, low, high) {
  function _rangeSumBST (root, low, high) {
      let sum = 0
      const visited = new Set()
      const steps = [zBinaryTree(root, sum, visited)]

      const dfs = (node) => {
        if(!node) return
        const {val, left, right} = node
        if(val >= low && val <= high) sum += val
        steps.push(zBinaryTree(root, sum, visited.add(val)))
        low < val && dfs(left)
        val < high && dfs(right)
      }

      dfs(root)

      return steps
  };
  const steps = _rangeSumBST (root, low, high)
  
  return loop_forever(steps, 700)
}
)}

function _17(rangeSumBST,bst_938_ex1){return(
rangeSumBST(bst_938_ex1, 7, 15)
)}

function _18(rangeSumBST,bst_938_ex2){return(
rangeSumBST(bst_938_ex2, 6, 10)
)}

function _bst_938_ex1(){return(
{"val":10,"left":{"val":5,"left":{"val":3,"left":null,"right":null},"right":{"val":7,"left":null,"right":null}},"right":{"val":15,"left":null,"right":{"val":18,"left":null,"right":null}}}
)}

function _bst_938_ex2(){return(
{"val":10,"left":{"val":5,"left":{"val":3,"left":{"val":1,"left":null,"right":null},"right":null},"right":{"val":7,"left":{"val":6,"left":null,"right":null},"right":null}},"right":{"val":15,"left":{"val":13,"left":null,"right":null},"right":{"val":18,"left":null,"right":null}}}
)}

function _21(md){return(
md`# [Jewels and Stones (771)](https://leetcode.com/problems/jewels-and-stones/)

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".`
)}

function _numJewelsInStones(dot,loop_forever){return(
function numJewelsInStones (jewels, stones) {  
  const make_node = (prefix, id, options) => {
    const opts = Object.entries(options).filter(([k, v]) => v !== null).map(([k, v]) => `${k}=${v}`)
    return `{${prefix}_${id} [${opts.join(',')}]}`
  }
  const graph = (nodes, set, cur, count) => {
    const node = nodes[cur]
    const _set = Array.from(set).map((n, i) => make_node('s', i, {
      label: n,
      color: n === node ? 'red' : null,  
      penwidth: n === node ? 2 : null
    }))
    const _array = nodes.map((n, i) => make_node('a', i, {
      label: n,
      color: (set.has(n) && i === cur) ? 'red' : i === cur ? 'blue' : null,  
      penwidth: (set.has(n) && i === cur) ? 2 : null
    }))
    const set_node = Array.from(set).indexOf(node)
    
    return dot`graph { 
rankdir = LR; 
node [shape = "square",fixedsize=true, height=0.55];
nodesep = "0.1 equally";
ranksep = "0.1 equally";

subgraph Count {
edge[style=invisible]
Count -- {count [label=${count},color=red]}
}

subgraph Set {
edge[style=invisible]
Jewels -- ${_set.join(' -- ')};
}

subgraph Array {
edge[style=invisible]
Stones -- ${_array.join(' -- ')};
}
}`
  }
  
  const steps = []
  const f = (jewels, stones) => {
    const J = new Set(jewels)
    let count = 0
    const arr = stones.split('')
    
    steps.push(graph(arr, J, -1, count))
    
    for(let i = 0; i < stones.length; i++){
      const stone = stones[i]
      if(J.has(stone)){
        count++
      }
      
      steps.push(graph(arr, J, i, count))
    }
    return count
  }
  
  f(jewels, stones)
  
  return loop_forever(steps, 700)
}
)}

function _23(numJewelsInStones){return(
numJewelsInStones("abAC", "aAAbeebbb")
)}

function _24(md){return(
md`# [Shuffle the Array (1470)](https://leetcode.com/problems/shuffle-the-array/)

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].`
)}

function _shuffle_1470(dot,loop_forever){return(
function shuffle_1470(nums, n){
   const make_node = (prefix, id, options) => {
    const opts = Object.entries(options).filter(([k, v]) => v !== null).map(([k, v]) => `${k}=${v}`)
    return `{${prefix}_${id} [${opts.join(',')}]}`
  }
  function _array (input, output, i1, i2, color, taken) {    
    const out = output.map((v,i) => make_node('out', i, {
      label: v,
      color: (i === output.length - 2 && color === 'blue') ? 'red' : i === output.length - 1 ? color: null,
    }))
    
    const _in = input.map((v, i) => make_node('in', i, {
      label: v,
      color:  i === i1 ? 'red' : i === i2 ? 'blue' : taken.has(i) ? 'grey' : null
    }))
    
    const indexes = input.map((v, i) => make_node('i', i, {
      label: i,
      color: i === i1 ? 'red' : i === i2 ? 'blue' : null
    }))
                              
    const g = dot`graph { 
rankdir = LR; 
node [shape = "square", fixedsize=true, height=0.55];
nodesep = "0.1 equally";
ranksep = "0.1 equally";

subgraph Result {
  edge[style=invisible]
  out${output.length ? '-- ' + out.join(' -- ') : ''};
}

subgraph Array {
  edge[style=invisible]
  in -- ${_in.join(' -- ')};
}

subgraph Index {
  node [fixedsize=true, height=0.3, color=grey];
  ${indexes.join('\n')};
}

${input.map((v, i) => `{rank = same; i_${i}; in_${i};}`).join('\n')};

// highlight current element at i1 and link
i_${i1} -- in_${i1} [color=red]
i_${i2} [color=blue]

// highlight current element at i2 and link
i_${i2} -- in_${i2} [color=blue]
in_${i2} [color=blue]
}`
    return g
}
  const steps = []
  const res = []
  const taken = new Set()
    
  for(let i = 0; i < n; i++){
    steps.push(_array(nums, res, i, n+i, null, taken))
    res.push(nums[i])
    taken.add(i)
    steps.push(_array(nums, res, i, n+i, 'red', taken))
    res.push(nums[n+i])
    taken.add(n+i)
    steps.push(_array(nums, res, i, n+i, 'blue', taken))
  }
  
  return loop_forever(steps, 1000)
}
)}

function _26(shuffle_1470){return(
shuffle_1470([2,5,1,3,4,7], 3)
)}

function _27(shuffle_1470){return(
shuffle_1470([1,2,3,4,4,3,2,1], 4)
)}

function _28(md){return(
md`# [Permutations (46)](https://leetcode.com/problems/permutations/) (Medium)

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.`
)}

function _frame_46(dot){return(
function frame_46(input, output, i1) {    
     const make_node = (prefix, id, options) => {
      const opts = Object.entries(options).filter(([k, v]) => v !== null).map(([k, v]) => `${k}=${v}`)
      return `{${prefix}_${id} [${opts.join(',')}]}`
    }
    const out = output.map((v,i) => make_node('out', i, { label: v }))
    const _in = input.map((v, i) => make_node('in', i, {label: v}))
    const indexes = input.map((v, i) => make_node('i', i, { label: i}))
                              
    const g = dot`graph { 
rankdir = LR; 
node [shape = "square", fixedsize=true, height=0.55];
nodesep = "0.1 equally";
ranksep = "0.1 equally";

subgraph Result {
  edge[style=invisible ]
nodesep = .01;
node [shape = "square", height=0.25];
  out${output.length ? '-- ' + out.join(' -- ') : ''};
}

subgraph Array {
  edge[style=invisible]
  in -- ${_in.join(' -- ')};
}

subgraph Index {
  node [fixedsize=true, height=0.3, color=grey];
  ${indexes.join('\n')};
}

${input.map((v, i) => `{rank = same; i_${i}; in_${i};}`).join('\n')};

// highlight current element at i1 and link
i_${i1} -- in_${i1} [color=red]
}`
    return g
}
)}

function _permute_46(frame_46){return(
function permute_46 (nums) {
    const p = []
    
    const f = (used) => {
      if(used.size === nums.length) return p.push(Array.from(used))
      
      for(let n of nums){
        if(!used.has(n)) f(new Set(used).add(n))
      }
    }
  
    f(new Set())
    
    // return p
    return frame_46(nums, [1,2,3,4], 0)
}
)}

function _31(permute_46){return(
permute_46([1,2,3])
)}

function _array_to_list(){return(
function array_to_list (array) {
  let head = null
  
  for(let val of [...array].reverse()){
    const node = {val, next: head}
    head = node
  }
  
  return head
}
)}

function _lost_binary_tree(){return(
{
  val: 15, 
  left: {
    val: 8, left: {val: 4}
  },
  right: {
    val: 23, left: {val: 16}, right: {val: 42}
  }
}
)}

function _lost_array(){return(
[4,8,15,16,23,42]
)}

function _lost_linked_list(array_to_list,lost_array){return(
array_to_list(lost_array)
)}

function _loop_forever(Promises){return(
async function* loop_forever (array, delay) {
  let i = 0
  while(true){
    await Promises.delay(delay);
    yield array[i]
    if(++i === array.length) i = 0
  }
}
)}

function _random(){return(
function random(from = 1, to = 1000){
  return Math.round(Math.random()*to - from)
}
)}

function _dot(require){return(
require("@observablehq/graphviz@0.2")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("zArray")).define("zArray", ["dot"], _zArray);
  main.variable(observer()).define(["zArray","lost_array"], _4);
  main.variable(observer("walk_array")).define("walk_array", ["zArray","loop_forever"], _walk_array);
  main.variable(observer()).define(["walk_array","lost_array"], _6);
  main.variable(observer("zList")).define("zList", ["dot"], _zList);
  main.variable(observer()).define(["zList","lost_linked_list"], _8);
  main.variable(observer("walk_linked_list")).define("walk_linked_list", ["zList","loop_forever"], _walk_linked_list);
  main.variable(observer()).define(["walk_linked_list","lost_linked_list"], _10);
  main.variable(observer("zBinaryTree")).define("zBinaryTree", ["dot","random"], _zBinaryTree);
  main.variable(observer()).define(["zBinaryTree","lost_binary_tree"], _12);
  main.variable(observer("walk_binary_tree")).define("walk_binary_tree", ["zBinaryTree","loop_forever"], _walk_binary_tree);
  main.variable(observer()).define(["walk_binary_tree","lost_binary_tree"], _14);
  main.variable(observer()).define(["md"], _15);
  main.variable(observer("rangeSumBST")).define("rangeSumBST", ["zBinaryTree","loop_forever"], _rangeSumBST);
  main.variable(observer()).define(["rangeSumBST","bst_938_ex1"], _17);
  main.variable(observer()).define(["rangeSumBST","bst_938_ex2"], _18);
  main.variable(observer("bst_938_ex1")).define("bst_938_ex1", _bst_938_ex1);
  main.variable(observer("bst_938_ex2")).define("bst_938_ex2", _bst_938_ex2);
  main.variable(observer()).define(["md"], _21);
  main.variable(observer("numJewelsInStones")).define("numJewelsInStones", ["dot","loop_forever"], _numJewelsInStones);
  main.variable(observer()).define(["numJewelsInStones"], _23);
  main.variable(observer()).define(["md"], _24);
  main.variable(observer("shuffle_1470")).define("shuffle_1470", ["dot","loop_forever"], _shuffle_1470);
  main.variable(observer()).define(["shuffle_1470"], _26);
  main.variable(observer()).define(["shuffle_1470"], _27);
  main.variable(observer()).define(["md"], _28);
  main.variable(observer("frame_46")).define("frame_46", ["dot"], _frame_46);
  main.variable(observer("permute_46")).define("permute_46", ["frame_46"], _permute_46);
  main.variable(observer()).define(["permute_46"], _31);
  main.variable(observer("array_to_list")).define("array_to_list", _array_to_list);
  main.variable(observer("lost_binary_tree")).define("lost_binary_tree", _lost_binary_tree);
  main.variable(observer("lost_array")).define("lost_array", _lost_array);
  main.variable(observer("lost_linked_list")).define("lost_linked_list", ["array_to_list","lost_array"], _lost_linked_list);
  main.variable(observer("loop_forever")).define("loop_forever", ["Promises"], _loop_forever);
  main.variable(observer("random")).define("random", _random);
  main.variable(observer("dot")).define("dot", ["require"], _dot);
  return main;
}
