const healthCheck = (req, res) => {
    res.status(200).json({
        status: 'UP',
        timestamp: new Date().toISOString(),
    });
};

export default healthCheck;