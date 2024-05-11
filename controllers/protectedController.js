 
 const protectedRoute =(req, res) => {
    res.json({ message: 'Protected route accessed successfully'});
}

module.exports = {protectedRoute}