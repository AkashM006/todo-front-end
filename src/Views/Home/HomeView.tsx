import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { toggleTheme } from "../../store/ThemeSlice";

function HomeView() {
  const dispatch: AppDispatch = useDispatch();

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <button onClick={toggleThemeHandler}>Toggle theme</button>
    </div>
  );
}

export default HomeView;
