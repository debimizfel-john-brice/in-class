import mongoose from "mongoose";

// 1. Interface representing our nodel:
export interface IWishlistModel extends mongoose.Document{
    // Don't need to the declere _id:
    name: string;
}

// 2. Schema build on the interface, containing more settings:
export const WishlistSchema = new mongoose.Schema<IWishlistModel>({
    name: {
        type: String, // JavaScript 'String' object
        trim: true,
        required: [true, "Missing Name."],
        minlength: [2, "Name too short."],
        maxlength: [30, "Name too Long."]
    },
},{
    versionKey: false,
    timestamps: true
})

// 3. Model - The finel class:
export const WishlistModel = mongoose.model<IWishlistModel>("WishlistModel", WishlistSchema, "wishlist"); // Model name, Scema, Collaction name:

