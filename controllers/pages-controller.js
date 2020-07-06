const showHomepage = (req, res, next) => {
    console.log('messages', req.messages)
    res.render(
        'index',
        { title: 'Wild Chat', user: req.user, messages: req.messages }
    );
}

module.exports = { showHomepage };