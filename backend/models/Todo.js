import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: true,
  },
});

export default mongoose.model("Todo", TodoSchema);
