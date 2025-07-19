export const categoryPromise = fetch(
  "https://openapi.programming-hero.com/api/news/categories"
).then((res) => res.json());
