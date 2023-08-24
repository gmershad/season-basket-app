import { useRoutes } from 'react-router-dom';
import PrivateRoutes from "./PrivateRoute";

export default function ThemeRoutes() {
    return useRoutes(PrivateRoutes);
}
