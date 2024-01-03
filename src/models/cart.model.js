'use strict'

const { model, Schema } = require('mongoose');

const DOCUMENT_NAME = 'cart'
const COLLECTION_NAME = 'carts'

const cartSchema = new Schema({
  cart_state: {
    type: String,
    required: true,
    enum: ['active', 'completed', 'failed', 'pending'],
    default: 'active'
  },
  cart_products: {
    type: Array,
    required: true,
    default: []
  },
  /*
  [
    {
      productId,
      shopId,
      quantity,
      name,
      price
    }
  ]
  */
  cart_count_product: {
    type: Number,
    default: 0
  },
  cart_userId: {
    type: Number,
    required: true
  }
},
  {
    collection: COLLECTION_NAME,
    timestamps: {
      createdAt: 'createdOn',
      updatedAt: 'modifiedOn'
    }
  })

module.exports = model(DOCUMENT_NAME, cartSchema);