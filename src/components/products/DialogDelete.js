import React, { useState } from "react";
import {
   Button,
   Dialog,
   Card,
   CardBody,
   CardFooter,
   Typography,
} from "@material-tailwind/react";
import { BsTrash } from "react-icons/bs";
import DeleteProduct from "../../api/integrations/Products/Delete";

function DialogDeleteProduct({ id, getAll }) {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen((cur) => !cur);

   const deleteProduct = () => {
      DeleteProduct({ id })
         .then((res) => {
            if (res.status) {
               getAll();
               handleOpen();
            }
         })
         .catch((e) => {
            console.log(e);
         });
   };

   return (
      <>
         <Button size="sm" color="red" onClick={handleOpen}>
            <BsTrash />
         </Button>
         <Dialog
            size="xs"
            open={open}
            handler={handleOpen}
            className="bg-transparent shadow-none"
         >
            <Card className="mx-auto w-full max-w-[24rem]">
               <CardBody className="flex flex-col gap-4">
                  <Typography variant="h4" color="blue-gray">
                     Hapus Produk
                  </Typography>
                  <Typography className="-mb-2" variant="h6">
                     Anda yakin akan menghapus produk ini?
                  </Typography>
               </CardBody>
               <CardFooter className="pt-0">
                  <Button color="red" onClick={deleteProduct} fullWidth>
                     Hapus
                  </Button>
               </CardFooter>
            </Card>
         </Dialog>
      </>
   );
}
export default DialogDeleteProduct;
