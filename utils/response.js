const onSuccess = (res, message, data, status = 200) => {
    return res.status(status).json({
        code: status,
        message: message,
        data: data
    });
}

const onError = (res, message, status = 400) => {
    return res.status(status).json({
        code: status,
        message: message
    });
}

export { onSuccess, onError }