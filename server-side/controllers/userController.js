const User = require("./../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { roles } = require("../roles");

async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

async function validatePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword)
}

exports.singup = async (req, res, next) => {
    console.log(req.body)
    try {
        const { firstName, lastName, email, password, hash } = req.body
        const hashedPassword = await hashPassword(password);
        const newUser = new User({ firstName, lastName, email, password: hashedPassword, hashKey: hash, role: "user" })
        const accessToken = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });
        newUser.accessToken = accessToken;
        await newUser.save();
        res.json({
            data: newUser,
            message: "Вы успешно зарегистрированы"
        })
    } catch (error) {
        next(error)
    }
}

exports.singin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return next(new Error("Электронная почта не существует!"));
        const validPassword = await validatePassword(password, user.password);
        if (!validPassword) return next(new Error("Неверный пароль!"));
        const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });
        await User.findByIdAndUpdate(user._id, { accessToken })
        res.status(200).json({
            data: { email: user.email, role: user.role, id: user._id, firstName: user.firstName, lastName: user.lastName },
            accessToken,
            message: "Вы вошли в систему"
        })
    } catch (error) {
        next(error)
    }
}