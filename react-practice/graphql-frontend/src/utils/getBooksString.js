// extract and connects books from array
export const getBooksString = (arr) => {
  let titlesArr = [];
  arr.forEach((item) => {
    titlesArr.push(item.title);
  });
  return titlesArr.join(" ,");
};
