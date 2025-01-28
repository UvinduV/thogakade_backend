import {PrismaClient} from "@prisma/client";
import {Customer} from "../model/Customer";
import {Item} from "../model/Item";

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

export async function getAllCustomers(){
    try{
        return await prisma.customer.findMany();
    }catch(err){
        console.log("error getting customers from prisma data",err);
    }
}

export async function CustomerUpdate(email: string, c: Customer){
    try{
        await prisma.customer.update({
            where:{ email : c.email},
            data:{
                name: c.name,
                nic: c.nic,
                email: c.email,
                phone: c.phone

            }
        })
    }catch(err){
        console.log("error updating customer", err);
    }
}
export async function CustomerDelete(email: string) {
    try{
        await prisma.customer.delete({
            where: {email: email}
        });
        console.log('Customer deleted :',email);
    }catch(err){
        console.log("error deleting customer", err);
    }
}

//// Items ////

export async function ItemAdd(i: Item ){
    try{
        const newItem  = await prisma.item.create({
            data:{
                id:i.id,
                name: i.name,
                quantity: i.quantity,
                price:i.price
            }

        })
        console.log('Item Added :',newItem)
    }catch(err) {
        console.log("error adding item", err);
    }
}
export async function getAllItem(){
    try{
        return await prisma.item.findMany();
    }catch(err){
        console.log("error getting items from prisma data",err);
    }
}
export async function ItemUpdate(name: string, i: Item){
    try{
        await prisma.item.update({
            where:{ name : i.name},
            data:{
                name: i.name,
                quantity: i.quantity,
                price: i.price
            }
        })
    }catch(err){
        console.log("error updating item", err);
    }
}
