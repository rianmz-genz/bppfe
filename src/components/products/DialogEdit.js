import React, { useEffect, useState } from "react";
import {
   Button,
   Dialog,
   Card,
   CardBody,
   CardFooter,
   Typography,
   Input,
} from "@material-tailwind/react";
import { AiFillEdit } from "react-icons/ai";
import EditProduct from "../../api/integrations/Products/Edit";

function DialogEditProduct({ name, price, id, getAll }) {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen((cur) => !cur);
   const [form, setForm] = useState({
      name: "",
      price: "",
      image: "",
   });
   useEffect(() => {
      setForm({
         name,
         price,
      });
   }, [name, price]);
   const submit = () => {
      EditProduct({ id, form })
         .then((res) => {
            if (res.status) {
               setForm({
                  name: "",
                  price: "",
                  image: "",
               });
               handleOpen();
               getAll();
            }
         })
         .catch((e) => console.log(e));
   };

   return (
      <>
         <Button variant="text" className="p-1 ml-1" onClick={handleOpen}>
            <AiFillEdit />
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
                     Ubah Produk
                  </Typography>
                  <Typography className="-mb-2" variant="h6">
                     Nama
                  </Typography>
                  <Input
                     value={form.name}
                     onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                     }
                     label="Nama Produk"
                     size="lg"
                  />
                  <Typography className="-mb-2" variant="h6">
                     Harga
                  </Typography>
                  <Input
                     value={form.price}
                     onChange={(e) =>
                        setForm({ ...form, price: e.target.value })
                     }
                     label="Harga"
                     type="number"
                     size="lg"
                  />
                  <Typography className="-mb-2" variant="h6">
                     Foto
                  </Typography>
                  <Input
                     label="Foto Produk"
                     type="file"
                     accept=".png"
                     size="lg"
                     onChange={(e) =>
                        setForm({ ...form, image: e.target.files[0] })
                     }
                  />
               </CardBody>
               <CardFooter className="pt-0">
                  <Button variant="gradient" onClick={submit} fullWidth>
                     Ubah
                  </Button>
               </CardFooter>
            </Card>
         </Dialog>
      </>
   );
}

export default DialogEditProduct;
