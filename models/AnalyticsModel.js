import mongoose from 'mongoose';

const { Schema } = mongoose;

const analyticsSchema = new Schema({
  monthname: {
    type: String,
    required: true,
  },
  noinv: {
      type: Number,
      default:1
  },
  profit: {
      type: Number
  },
  lastupdated: {
      type: String
  },
  year: {
    type: String
}
});


const Analytics = mongoose.model('Analytics', analyticsSchema);

export default Analytics;
