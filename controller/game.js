import mongoose from 'mongoose';
import GameData from '../model/gameData.js';

export const getData = async (req, res) => {
  try {
    const gameData = await GameData.find();
    res.status(200).json(gameData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addData = async (req, res) => {
  const data = req.body;

  const newData = GameData({
    ...data,
  });

  try {
    console.log('success');
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};
