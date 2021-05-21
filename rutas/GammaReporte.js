const router = require('express').Router();
const axios = require('axios');

router.get('/:id', async function (req,res){
  const {id} = req.params;
  res.status(200).json({message: 'Estas conectado a la API'})
  try {
    const response = await axios({
      url: 'http://52.14.152.216:8080/v1/graphql',
      method: 'POST',
      data:{
        query: `{
          device (where: {
            pkdevice:{
              _eq:"${id}"
            }
          }){
          device_gamma{
            gabinetes{
              pkgabinete
              slatitud
              slongitud
              sdireccion
            }
          }
          }
        }`
      }
    })
  
  let device = response.data.data.device[0].device_gamma[0].gabinetes[0]
  console.log(device)
  } catch (error) {
    let e = error;
  }
});

module.exports = router;