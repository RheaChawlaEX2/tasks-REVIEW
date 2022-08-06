export async function fetchData(url) {
  const data = await fetch(url);
  const res = await data.json();
  // console.log(`data fetched from ${url}`);
  // console.log(res);
  return res;
}
