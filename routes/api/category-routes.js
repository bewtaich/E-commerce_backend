const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


// GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// GET category by ID
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!category) {
      return res.status(404).json({ message: 'No category found with this id' });
    }

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// POST new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

// PUT update category by ID
router.put('/:id', async(req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updatedCategory[0]) {
      return res.status(404).json({ message: 'No category found with this id' });
    }

    res.status(200).json({ message: 'Category updated successfully' });
  } catch (err) {
    res.status(400).json(err.message);
  }
});

// DELETE category
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.destroy({
      where: { id: req.params.id },
    });

    if (!category) {
      return res.status(404).json({ message: 'No category found with this id!' });
    }

    res.status(200).json({ message: 'Category successfully deleted!' });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
