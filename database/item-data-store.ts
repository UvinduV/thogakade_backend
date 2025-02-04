import {PrismaClient} from "@prisma/client";
import {Item} from "../model/Item";

const prisma= new PrismaClient();

export async function ItemAdd(i: Item ){
    try{
        const newItem  = await prisma.item.create({
            data: {
                name: i.name,
                quantity: typeof i.quantity === "string" ? parseInt(i.quantity, 10) : i.quantity,
                price: typeof i.price === "string" ? parseInt(i.price, 10) : i.price,
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
            where:{ name: name},
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

export async function ItemDelete(name: string) {
    try{
        await prisma.item.delete({
            where: {name: name}
        });
        console.log('item deleted :',name);
    }catch(err){
        console.log("error deleting item", err);
    }
}

