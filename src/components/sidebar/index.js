import {
   Card,
   Typography,
   List,
   ListItem,
   ListItemPrefix,
} from "@material-tailwind/react";
import Logo from "../logo";
import {
   MdOutlineProductionQuantityLimits,
   MdOutlineSell,
   MdOutlineLogout,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHistory } from "react-icons/ai";
export function DefaultSidebar() {
   const navigate = useNavigate();
   const Logout = () => {
      navigate("/");
   };
   return (
      <Card className="h-screen w-full max-w-[20rem] px-4 py-8 fixed top-0 left-0">
         <div className="mb-2 p-4">
            <Typography variant="h5" color="blue-gray">
               <Logo />
            </Typography>
         </div>
         <hr className="my-2 border-blue-gray-50" />
         <List>
            <Link to={"/products"}>
               <ListItem>
                  <ListItemPrefix>
                     <MdOutlineProductionQuantityLimits />
                  </ListItemPrefix>
                  Product
               </ListItem>
            </Link>
            <Link to={"/sell"}>
               <ListItem>
                  <ListItemPrefix>
                     <MdOutlineSell />
                  </ListItemPrefix>
                  Penjualan
               </ListItem>
            </Link>
            <Link to={"/history"}>
               <ListItem>
                  <ListItemPrefix>
                     <AiOutlineHistory />
                  </ListItemPrefix>
                  Riwayat
               </ListItem>
            </Link>
            <hr className="my-2 border-blue-gray-50" />
            <ListItem onClick={() => Logout()}>
               <ListItemPrefix>
                  <MdOutlineLogout />
               </ListItemPrefix>
               Log Out
            </ListItem>
         </List>
      </Card>
   );
}
