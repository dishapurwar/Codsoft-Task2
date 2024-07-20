import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, "Please Enter Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
    select: false,
  },


  timeline: [
    {
      title: {
        type: String,
        // required: true,
      },
      company: {
        type: String,
        // required: true,
      },
      date: {
        type: Date,
        // required: true,
      },
      points: {
        type: [String],
        // required: true,
      },
    },
  ],

  skills: {
    image1: {
      public_id: String,
      url: String,
    },

    image2: {
      public_id: String,
      url: String,
    },
    image3: {
      public_id: String,
      url: String,
    },
    image4: {
      public_id: String,
      url: String,
    },
    image5: {
      public_id: String,
      url: String,
    },
    image6: {
      public_id: String,
      url: String,
    },
    image7: {
      public_id: String,
      url: String,
    },
    image8: {
      public_id: String,
      url: String,
    },
    image9: {
      public_id: String,
      url: String,
    },
    image10: {
      public_id: String,
      url: String,
    },
    image11: {
      public_id: String,
      url: String,
    },
    image12: {
      public_id: String,
      url: String,
    },
    image13: {
      public_id: String,
      url: String,
    },
    image14: {
      public_id: String,
      url: String,
    },
  },



  projects: [
    {
      url: String,
      title: String,
      image: {
        public_id: String,
        url: String,
      },
      description: String,
      techStack: String,
    },
  ],

  about: {
    name: String,
    title: String,
    subtitle: String,
    description: String,
    avatar: {
      public_id: String,
      url: String,
    },
  },
});

export const User = mongoose.model("User", userSchema);
