import {PANEL_ROUTE} from "./utils/consts";
import AdminPanel from "./components/adminPanel/AdminPanel";
import VisaForm from "./components/VisaForm";

export const publicRoutes = [
    {
        path: PANEL_ROUTE,
        Component: VisaForm
    }
]

export const privateRoutes = [
    {
        path: PANEL_ROUTE,
        Component: AdminPanel
    }
]