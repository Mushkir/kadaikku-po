import Item from "../models/Item.js";

export const Create = async (req, res) => {
  const { item } = req?.body;

  try {
    const newItem = new Item({ name: item });
    await newItem.save();
    res.status(201).json({
      message: "Item created successfully",
      status: 201,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error | "Error creating item",
      error: true,
      status: 500,
    });
  }
};

export const Read = async (req, res) => {
  try {
    const allListItems = await Item.find();
    res.status(200).json({
      status: 200,
      error: false,
      data: allListItems,
    });
  } catch (error) {
    res.status(500).json({
      message: error | "Error reading item",
      error: true,
      status: 500,
    });
  }
};

export const Success = async (req, res) => {
  const { id } = req?.params;

  try {
    const filter = { _id: id };
    const update = { status: true };

    const updatedItem = await Item.findOneAndUpdate(filter, update);
    if (updatedItem) {
      res.status(200).json({
        message: "Item marked as completed",
        status: 200,
        error: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error | "Error marking item as success",
      error: true,
      status: 500,
    });
  }
};
