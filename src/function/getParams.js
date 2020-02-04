const getParams = () => {
  let params;
  const sortBy = "";
  const codeCategroy = "USAGE: N";

  if (sortBy === "") {
    // 關聯性
    if (codeCategroy === "") {
      // 關聯性 + 沒篩選
      params = {
        searchText: "ring",
        page: 1
      };
    } else {
      // 關聯性 + 有篩選
      params = {
        searchText: "ring",
        page: 1,
        codeCategroy: codeCategroy
      };
    }
    params = {
      searchText: "ring",
      page: 1
    };
  } else {
    // 不是關聯性
    params = {
      searchText: "ring",
      page: 1
    };
  }
  console.log(params);
};

export { getParams };
