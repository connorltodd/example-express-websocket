const showHomepage = (req, res, next) => {
    res.render(
        'index',
        { title: 'Wild Chat', user: req.user, messages: req.messages}
    );
}

module.exports = { showHomepage };