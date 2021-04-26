import mongoose from "mongoose";
const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Admin",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    team_name: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;
