function _1(md){return(
md`# Leetcode`
)}

function _is_same_array(){return(
function is_same_array(a, b){
  return a.join('') === b.join('')
}
)}

function _bsearch(){return(
function bsearch(list, value, start, end){
  if(start > end) return -1

  const mid = Math.floor((start + end)/2)


  const x = list[mid]
  if(x === value) return mid

  return x > value ? bsearch(list, value,start, mid - 1) : bsearch(list, value, mid + 1, end)
}
)}

function _4(bsearch){return(
bsearch([4,8,15,16,23,42], 23, 0, 5)
)}

function _dfs(){return(
function dfs(node, f){
  if(!node) return
  const {val, left, right} = node

  if(f(val)) return

  dfs(left, f)
  dfs(right, f)
}
)}

function _dfs_t(){return(
function dfs_t(node, f){
  if(!node) return
  const {val, children} = node

  if(f(val)) return

  for(let child of children){
    dfs_t(child, f)
  }
}
)}

function _bfs(){return(
function bfs(root, f){
  if(!root) return
  let q = [root]
  while(q.length){
    const node = q.pop()
    const {val, left, right} = node
    f(val)
    q.push(left)
    q.push(right)
  }
}
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("is_same_array")).define("is_same_array", _is_same_array);
  main.variable(observer("bsearch")).define("bsearch", _bsearch);
  main.variable(observer()).define(["bsearch"], _4);
  main.variable(observer("dfs")).define("dfs", _dfs);
  main.variable(observer("dfs_t")).define("dfs_t", _dfs_t);
  main.variable(observer("bfs")).define("bfs", _bfs);
  return main;
}
