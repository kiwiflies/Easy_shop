// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getCategories() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/product/category/list`);
  const data = await response.json();

  return data.data || []
}
