export async function fetchData(url) {
  const data = await fetch(url);
  const res = await data.json();
  return res;
}
