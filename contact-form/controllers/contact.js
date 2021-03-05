module.exports = {
    index,
    submit,
}


function index(req, res,) {
    res.render('contact/index')
};

function submit(req, res) {
    res.render('contact/confirmation', {data: req.body})
}