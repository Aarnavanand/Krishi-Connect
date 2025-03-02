import mongoose from 'mongoose';

const CropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, default: 'Kilogram (kg)', enum: ['Kilogram (kg)', 'Gram (g)', 'Ton (t)', 'Quintal (q)'] },
  location: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

const Crop = mongoose.model('Crop', CropSchema);

export default Crop;