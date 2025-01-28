import {PrismaClient} from "@prisma/client";
import {Customer} from "../model/Customer";

const prisma =new PrismaClient();

export async function CustomerAdd(c: Customer ){
    try{
        const newCustomer  = await prisma.customer.create({
            data:{
                id:c.id,
                name: c.name,
                nic: c.nic,
                email: c.email,
                phone: c.phone
            }

        })
        console.log('Customer Added :',newCustomer)
    }catch(err) {
        console.log("error adding customer", err);
    }

}