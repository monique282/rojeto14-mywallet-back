
export function validateJoiForAll(joi) {
    return (req, res, next) => {
        const validateBeingCorrect = joi.validate(req.body, { abortEarly: false });
        if (validateBeingCorrect.error) {
            const specificError = validateBeingCorrect.error.details.map(type => type.message);
            return res.status(422).send(specificError);
        }
        next();
    };
};





