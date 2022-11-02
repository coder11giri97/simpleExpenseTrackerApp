const user =require('../model/head')

exports.postdetails =((req,res,next)=>{
      const{name,des,categ}=req.body
     console.log(name,des,categ)
      user.create({name,des,categ})
      .then((response)=>{
        res.status(201).json({data:response})
      })
      .catch(err=>res.status(500).json({err}))
})

exports.getdetails =(req,res,next)=>{
    user.findAll()
    .then(response=>{
     res.status(200).json({response})
    })
    .catch(err=> res.status(500).json(err))
}

exports.delete=(req,res,next)=>{
    const id = req.params.id;
    user.destroy({where:{id:id}})
    .then(response=> res.status(200).json({msg:'successful'}))
        .catch(err=>{console.log(err)})
}



























































































// exports.update = (req,res)=>{
//       const exp = {
//         name : req.body.name,
//         des : req.body.des,
//         categ : req.body.categ
//       };
//       const id = req.params.id;
//       user.update(user,{
//           returning : true,
//           where : {id : id}
//       }).then(updated =>{
//           user.findByPk(id).then(user =>{
//              res.status(200).send(updated);
//           }).catch(err =>{
//              res.status(500).send({
//                 message : "some internal error"
//              })
//           })
//       })
// }