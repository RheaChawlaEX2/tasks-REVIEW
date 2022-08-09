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
