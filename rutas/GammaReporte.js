const router = require('express').Router();
const axios = require('axios');

router.get('/:id', async function (req,res){
  const {id} = req.params;
  res.status(200).json({message: 'Estas conectado a la API'})
  const response = await axios({
    url: 'http://52.14.152.216:8080/v1/graphql',
    method: 'post',
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
  let device = response.data.data.device[0]
  console.log(device);
});

module.exports = router;