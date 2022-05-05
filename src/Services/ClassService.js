function createClass() {
  let arr = ['CSC', 'XYZ', 'PSY', 'BUI', 'WTW', 'YUT', 'DS', 'MNM', 'WEB'];
  let obj = [];
  for (let i = 100; i < 120; i++) {
    for (let el of arr) {
      obj.push({ category: el, number: i });
    }
  }
  return obj;
}

export { createClass };
