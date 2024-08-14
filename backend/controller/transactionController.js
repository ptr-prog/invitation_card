import axios from 'axios';
import TransactionModel from '../models/TransactionModel.js';
import dotenv from 'dotenv';

dotenv.config();

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

export const createTransaction = async (req, res) => {
  const { userName, isAttending, food, drink } = req.body;

  try {
    const foodValue = food ? food : 'Tidak Hadir';
    const drinkValue = drink ? drink : 'Tidak Hadir';

    const newTransaction = await TransactionModel.create({
      userName,
      isAttending,
      food: foodValue,
      drink: drinkValue,
    });

    const embed = {
      title: 'New Attending Notification',
      color: isAttending === 'yes' ? 3066993 : 15158332,
      fields: [
        {
          name: 'Nama',
          value: userName,
          inline: true,
        },
        {
          name: 'Kedatangan',
          value: isAttending,
          inline: true,
        },
        {
          name: 'Makanan',
          value: foodValue,
          inline: true,
        },
        {
          name: 'Minuman',
          value: drinkValue,
          inline: true,
        },
      ],
      footer: {
        text: 'Notification System',
      },
    };

    const response = await axios.post(DISCORD_WEBHOOK_URL, {
      embeds: [embed],
    });

    if (response.status === 204) {
      res.status(201).json({ message: 'Transaction saved successfully' });
    } else {
      throw new Error('Failed to send webhook message');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error saving transaction', error });
  }
};
