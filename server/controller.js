module.exports ={
    getHouses(req,res) {
        req.app.get('db').get_houses().then(response => {
            console.log('found the houses')
            res.status(200).send(response)
        })
    },
}