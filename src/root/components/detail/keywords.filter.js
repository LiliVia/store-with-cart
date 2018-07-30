export default function keywords() {
  return function (posts, keys) {
    // console.log(posts, keys);
    return posts.filter(item => {
      if (!keys.length) return true;
      return keys.findIndex(key => item.caption.toLowerCase().indexOf(key.toLowerCase()) != -1) != -1;
    })
  }
}
