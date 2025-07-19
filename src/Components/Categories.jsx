import { use } from "react";
import { categoryPromise } from "../Utils/api";
import { NavLink } from "react-router";

const Categories = () => {
//   const [loading, setLoading] = useState(true);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     getCategories().then((data) => {
//       setCategories(data.data.news_category);
//       setLoading(false);
//       console.log(data.data.news_category);
//     });
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="spinner-border animate-spin inline-block w-8 h-8 border-r-4 border-b-4 border-l-4 border-t-4 border-primary rounded-full"></div>
//       </div>
//     );
//   }

const categories = use(categoryPromise);
    console.log(categories.data.news_category);
  return (
    <div>
      <h2 className="text-2xl font-bold">All Categories</h2>
      <div className="flex flex-col gap-2">
        {categories.data.news_category.map((category) => (
          <NavLink
            key={category.category_id}
            className={
              "btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent"
            }
            to={`/category/${category.category_id}`}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
