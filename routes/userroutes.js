const express = require('express');
const router = express.Router();
const Freelancer = require('../models/freelancer');
const Client = require('../models/client');

// Freelancer endpoints
router.post('/freelancers', async (req, res) => {
  const freelancer = new Freelancer(req.body);
  const saved = await freelancer.save();
  res.json(saved);
});

router.put('/freelancers/:id', async (req, res) => {
  const updated = await Freelancer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/freelancers/:id', async (req, res) => {
  await Freelancer.findByIdAndDelete(req.params.id);
  res.json({ message: 'Freelancer deleted' });
});

// Client endpoints
router.post('/clients', async (req, res) => {
  const client = new Client(req.body);
  const saved = await client.save();
  res.json(saved);
});

router.put('/clients/:id', async (req, res) => {
  const updated = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/clients/:id', async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.json({ message: 'Client deleted' });
});

module.exports = router;
