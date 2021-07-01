module.exports = (req, res, next) => {
    res.locals.umaVeriavelLocal = 'Este é o valor da veriavel local.'
    next();
};

exports.checkCsrfError =(err, req, res, next) =>{
    if(err &&  err.code === 'LSNALDNALDNKS'){
        return res.send('BAD CSRF')
    }
}