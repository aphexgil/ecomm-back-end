const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      joinTableAttributes: [],
      include: [
        { association: 'tagged_products', through: { attributes: [] }, attributes: ['product_name'] }
      ]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      joinTableAttributes: [],
      include: [
        { association: 'tagged_products', through: { attributes: [] }, attributes: ['product_name'] }
      ]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {

    const newTag = await Tag.create({
      ...req.body
    });

    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.put('/:id', async (req, res) => {
  try {

    const tagData = await Tag.findByPk(req.params.id);

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    tagData.set({
      tag_name: req.body.tag_name
    });

    await tagData.save();

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try{
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    
    if(!tagData){
      res.status(404).json({message: 'No tag found with that id!'});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }});

module.exports = router;