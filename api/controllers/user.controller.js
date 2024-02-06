import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';

export const test = (req, res) => {
    res.json({
        message: 'Api route is working!',
    });
};

export const updateUser = async (req, res, next) => {

    const user = await User.findById(req.params.id);
    const userId = user.id;


    if (userId !== req.params.id) {
        console.log('User IDs do not match.');
        return next(errorHandler(401, 'You can only update your own account!'));
    }

    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    avatar: req.body.avatar,
                },
            },
            { new: true }
        );

        const { password, ...rest } = updatedUser._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};


export const deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);
    const userId = user.id;
    console.log(req.user.id);
    console.log(userId)
    if (req.user.id !== userId)

        return next(errorHandler(401, 'You can only delete your own account!'));
    try {
        await User.findByIdAndDelete(req.params.id);
        res.clearCookie('access_token');
        res.status(200).json('User has been deleted!');
    } catch (error) {
        next(error);
    }
};