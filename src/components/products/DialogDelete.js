import React, { useState } from "react";
import {
   Button,
   Dialog,
   Card,
   CardBody,
   CardFooter,
   Typography,
   Input,
} from "@material-tailwind/react";
import { BsTrash } from "react-icons/bs";

function DialogDeleteProduct({ handleCreate }) {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen((cur) => !cur);
   const [form, setForm] = useState({
      name: "",
      price: "",
      image: "",
   });
   const submit = () => {
      handleCreate(form);
      setForm({
         name: "",
         price: "",
         image: "",
      });
      handleOpen();
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
                  <Button variant="gradient" onClick={submit} fullWidth>
                     Tambah
                  </Button>
               </CardFooter>
            </Card>
         </Dialog>
      </>
   );
}
export default DialogDeleteProduct;
