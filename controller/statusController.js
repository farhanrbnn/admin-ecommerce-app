const success200 = (res, data) =>{
    res.json({
        'status': '200',
        'message': 'success',
        'data': data
    })
}

const notFound404 = (res) => {
    res.json({
        'status': '404',
        'message': 'not found',
        'data': {}
    })
}

const badRequest400 = (res, err) => {
    res.json({
        'status': '400',
        'message': err,
        'data': {}
    })
}

module.exports = {
    success200,
    notFound404,
    badRequest400
}