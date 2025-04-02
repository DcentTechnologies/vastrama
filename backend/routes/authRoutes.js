import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import passport from "passport";
import User from "../models/User.js";

const router = express.Router();

/**
 * @route   POST /register
 * @desc    Register a new user
 */
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * @route   POST /login
 * @desc    Authenticate user and return token
 */
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.status(200).json({ 
            token, 
            user: { id: user._id, name: user.name, email: user.email } 
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * @route   GET /google
 * @desc    Authenticate with Google
 */
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

/**
 * @route   GET /google/callback
 * @desc    Google auth callback
 */
router.get("/google/callback", passport.authenticate("google", { session: false }), async (req, res) => {
    try {
        let user = await User.findOne({ email: req.user.email });

        // If user does not exist, create a new one
        if (!user) {
            user = new User({
                name: req.user.name,
                email: req.user.email,
                password: "", // Since Google login doesn't require a password
            });
            await user.save();
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.redirect(`https://localhost:3000/login-success?token=${token}`);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * @route   GET /facebook
 * @desc    Authenticate with Facebook
 */
router.get("/facebook", passport.authenticate("facebook", { scope: ["email"] }));

/**
 * @route   GET /facebook/callback
 * @desc    Facebook auth callback
 */
router.get("/facebook/callback", passport.authenticate("facebook", { session: false }), async (req, res) => {
    try {
        let user = await User.findOne({ email: req.user.email });

        // If user does not exist, create a new one
        if (!user) {
            user = new User({
                name: req.user.name,
                email: req.user.email,
                password: "", // Since Facebook login doesn't require a password
            });
            await user.save();
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.redirect(`https://localhost:3000/login-success?token=${token}`);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;