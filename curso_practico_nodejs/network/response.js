exports.success = function ( req , res , message , status )
{ 
    let statusCode = status || 200;
    let statusMessage = message || '';
    res.status(statusCode).send({
        error: false,
        stats: status,
        body: statusMessage,
    });
}

exports.err = function ( req , res , message , status)
{
    let statusCode = status || 500;
    let statusMessage = message || 'internal server error';
    res.status(statusCode).send({
        error: true,
        stats: status,
        body: statusMessage,
    });
}