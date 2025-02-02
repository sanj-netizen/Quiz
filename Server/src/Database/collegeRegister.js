// const mongoose = require('mongoose');

// const registrationSchema = new mongoose.Schema({
//   teamName: {
//     type: String,
//     required: true,
//   },
//   teamHead: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//     match: /^[0-9]{10}$/, // Validate phone number format
//   },
//   institution: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   employeeId: {
//     type: Number,
//     required: true,
//     unique: true,
//   },
//   otp: {
//     type: Number,
//     required: true,
//   },
//   rounds: {
//     round1: {
//       type: Number,
//       default: 0,
//     },
//     round2: {
//       type: Number,
//       default: 0,
//     },
//     round3: {
//       type: Number,
//       default: 0,
//     },
//     round4: {
//       type: Number,
//       default: 0,
//     },
//     round5: {
//       type: Number,
//       default: 0,
//     },
//     round6: {
//       type: Number,
//       default: 0,
//     },
//     round7: {
//       type: Number,
//       default: 0,
//     },
//   },
//   accessCodes: {
//     round1: {
//       type: String,
//       default: '',
//     },
//     round2: {
//       type: String,
//       default: '',
//     },
//     round3: {
//       type: String,
//       default: '',
//     },
//     round4: {
//       type: String,
//       default: '',
//     },
//     round5: {
//       type: String,
//       default: '',
//     },
//     round6: {
//       type: String,
//       default: '',
//     },
//     round7: {
//       type: String,
//       default: '',
//     },
//   },
// }, { timestamps: true });

// const Registration = mongoose.model('Registration', registrationSchema);
// module.exports = Registration;

const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
  },
  teamHead: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/, // Validate phone number format
  },
  institution: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  employeeId: {
    type: Number,
    required: true,
    unique: true,
  },
  otp: {
    type: Number,
    required: true,
  },
  rounds: {
    round1: {
      type: Number,
      default: 0,
    },
    round2: {
      type: Number,
      default: 0,
    },
    round3: {
      type: Number,
      default: 0,
    },
    round4: {
      type: Number,
      default: 0,
    },
    round5: {
      type: Number,
      default: 0,
    },
    round6: {
      type: Number,
      default: 0,
    },
    round7: {
      type: Number,
      default: 0,
    },
  },
  accessCodes: {
    round1: {
      type: String,
      default: '',
    },
    round2: {
      type: String,
      default: '',
    },
    round3: {
      type: String,
      default: '',
    },
    round4: {
      type: String,
      default: '',
    },
    round5: {
      type: String,
      default: '',
    },
    round6: {
      type: String,
      default: '',
    },
    round7: {
      type: String,
      default: '',
    },
  },
  scores: {
    round1: {
      type: Number,
      default: 0,
    },
    round2: {
      type: Number,
      default: 0,
    },
    round3: {
      type: Number,
      default: 0,
    },
    round4: {
      type: Number,
      default: 0,
    },
    round5: {
      type: Number,
      default: 0,
    },
    round6: {
      type: Number,
      default: 0,
    },
    round7: {
      type: Number,
      default: 0,
    },
  },
}, { timestamps: true });

const Registration = mongoose.model('Registration', registrationSchema);
module.exports = Registration;
