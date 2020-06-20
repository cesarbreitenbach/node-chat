const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports ={
   async index(req, res) {
      const { page = 1 } = req.query;
      const product = await Product.paginate({}, {page, limit: 10});

      return res.json(product)
   } ,

   async store(req, res){
      const create = await Product.create(req.body)
      return res.send("inserido..")
   },

   async show(req, res){
      const show = await Product.findById(req.params.id);
      return res.json(show);
   },

   async update(req, res){
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new:true});
      return res.json(product);
   },

   async destroy(req, res){
      const product = await Product.findByIdAndDelete(req.params.id);
      return res.send("Apagado com sucesso!") ;
   }

}