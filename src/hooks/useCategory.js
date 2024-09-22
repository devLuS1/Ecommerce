import { useEffect, useState } from "react";
import { useGetCategoriesQuery } from "../services/shopServices";
import { useDispatch } from "react-redux";
import { setCategories } from "../features/shop/shopSlice";

const useCategory = () => {
  const { data, isLoading } = useGetCategoriesQuery();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    
    console.log("loading a cambiado a " + loading)
    dispatch(setCategories(data));
    setLoading(false);
  }, [isLoading]);

  return { loading };
};

export default useCategory;
