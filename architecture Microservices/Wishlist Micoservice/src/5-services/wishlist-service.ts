import { IWishlistModel, WishlistModel } from "../2-models/wishlist-model";


async function saveWishlist(name:string):Promise<void>{
    const wishlist = new WishlistModel({name});
    await wishlist.save();
}

async function getWishlistItems():Promise<IWishlistModel[]>{
    return WishlistModel.find().exec()
}

export default {
    saveWishlist,
    getWishlistItems
}