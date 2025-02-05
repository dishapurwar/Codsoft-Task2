import { User } from "../model/User.js";
import jwt from "jsonwebtoken";
import { sendMail } from "../middlewares/sendMail.js";
import cloudinary from "cloudinary";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 600000),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Logged In Successfully",
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Logged Out Successfully",
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne().select("-password -email");

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const myProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const userMessage = `Hey, I am ${name}. My email is ${email}. My message is ${message}.`;

    await sendMail(userMessage);

    return res.status(200).json({
      success: true,
      message: "Message Sent Successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const { name, email, password, skills, about } = req.body;

    if (name) {
      user.name = name;
    }

    if (email) {
      user.email = email;
    }
    if (password) {
      user.password = password;
    }

    if (skills) {
      if (skills.image1) {
        await cloudinary.v2.uploader.destroy(user.skills.image1.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image1, {
          folder: "portfolio",
        });

        user.skills.image1 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image2) {
        await cloudinary.v2.uploader.destroy(user.skills.image2.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image2, {
          folder: "portfolio",
        });

        user.skills.image2 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image3) {
        await cloudinary.v2.uploader.destroy(user.skills.image3.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image3, {
          folder: "portfolio",
        });

        user.skills.image3 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image4) {
        await cloudinary.v2.uploader.destroy(user.skills.image4.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image4, {
          folder: "portfolio",
        });

        user.skills.image4 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image5) {
        await cloudinary.v2.uploader.destroy(user.skills.image5.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image5, {
          folder: "portfolio",
        });

        user.skills.image5 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image6) {
        await cloudinary.v2.uploader.destroy(user.skills.image6.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image6, {
          folder: "portfolio",
        });

        user.skills.image6 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image7) {
        // await cloudinary.v2.uploader.destroy(user.skills.image7.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image7, {
          folder: "portfolio",
        });

        user.skills.image7 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image8) {
        await cloudinary.v2.uploader.destroy(user.skills.image8.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image8, {
          folder: "portfolio",
        });

        user.skills.image8 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image9) {
        await cloudinary.v2.uploader.destroy(user.skills.image9.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image9, {
          folder: "portfolio",
        });

        user.skills.image9 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image10) {
        await cloudinary.v2.uploader.destroy(user.skills.image10.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image10, {
          folder: "portfolio",
        });

        user.skills.image10 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image11) {
        await cloudinary.v2.uploader.destroy(user.skills.image11.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image11, {
          folder: "portfolio",
        });

        user.skills.image11 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image12) {
        await cloudinary.v2.uploader.destroy(user.skills.image12.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image12, {
          folder: "portfolio",
        });

        user.skills.image12 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image13) {
        await cloudinary.v2.uploader.destroy(user.skills.image13.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image13, {
          folder: "portfolio",
        });

        user.skills.image13 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image14) {
        await cloudinary.v2.uploader.destroy(user.skills.image14.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image14, {
          folder: "portfolio",
        });

        user.skills.image14 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }


    }

    if (about) {
      if (about.name) {
        user.about.name = about.name;
      }
      if (about.title) {
        user.about.title = about.title;
      }
      if (about.subtitle) { // Update for resume instead of subtitle
        user.about.subtitle = about.subtitle;
      }

      if (about.description) {
        user.about.description = about.description;
      }
     

      if (about.avatar) {
        await cloudinary.v2.uploader.destroy(user.about.avatar.public_id);

        const myCloud = await cloudinary.v2.uploader.upload(about.avatar, {
          folder: "portfolio",
        });

        user.about.avatar = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "User Updated Successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};



export const addTimeline = async (req, res) => {
  try {
    const { title, company, date, points } = req.body;

    const user = await User.findById(req.user._id);

    user.timeline.unshift({
      title,
      company,
      date,
      points,
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "Added To Timeline",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTimeline = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(req.user._id);

    user.timeline = user.timeline.filter((item) => item._id.toString() !== id);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Deleted from Timeline",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};




export const addProject = async (req, res) => {
  try {
    const { url, title, image, description, techStack } = req.body;

    const user = await User.findById(req.user._id);

    const myCloud = await cloudinary.v2.uploader.upload(image, {
      folder: "portfolio",
    });
    user.projects.unshift({
      url,
      title,
      description,
      techStack,
      image: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "Added To Projects",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const project = user.projects.find((item) => item._id.toString() === id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // Debug log to verify project details
    console.log("Deleting project: ", project);

    await cloudinary.v2.uploader.destroy(project.image.public_id);

    user.projects = user.projects.filter((item) => item._id.toString() !== id);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Deleted from Projects",
    });
  } catch (error) {
    console.error(error);  // Log the error for debugging
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};