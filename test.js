newFun = () => {
  {
    var oneVar = "Global Variable";
    let twoVar = "Global Variable";
    const threeVar = "Global Variable";
  }
  console.log(oneVar);
  console.log(twoVar);
};

newFun();
