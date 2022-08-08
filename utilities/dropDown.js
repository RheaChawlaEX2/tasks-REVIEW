export function getCurrentSearchItems(str, data) {
  let new_list = [];
  data.forEach(({ title }) => {
    let word = title.toLowerCase();
    let search_word = str.toLowerCase();
    if (word.startsWith(search_word)) {
      new_list.push(title);
    }
  });
  return new_list;
}

export function selectItemOfListFunctionality() {
  document.querySelectorAll(".inside-list").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector("#spacesSave").disabled = false;
      const item_value = item.dataset.value;
      document.querySelector("#search-input-spaces").value = item_value;
      console.log("item clicked: ", item_value);
    });
  });
}
