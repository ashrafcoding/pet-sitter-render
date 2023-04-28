const { check, validationResult, oneOf } = require("express-validator");

exports.validateRegister = [
  check("username", "Please enter a username").not().isEmpty(),
  check("email", "Please enter a valid email address").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({
    min: 6,
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validateLogin = [
  check("email", "Please enter a valid email address").isEmail(),
  check("password", "Password is required").not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validateSendMessage = [
  check("conversationId", "conversationId is required").not().isEmpty(),
  check("text", "text is required").not().isEmpty(),
  check("recipientProfileId", "recipientProfileId is required").not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validateCreateConversation = [
  check("recipientProfileId", "recipientProfileId is required").not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validateProfile = [
  check("firstName", "firstName is required (min:3, max:30)").trim().isLength({
    min: 3,
    max: 30,
  }),
  check("lastName", "lastName is required (min:3, max:30)").trim().isLength({
    min: 3,
    max: 30,
  }),
  check("gender").isIn(["Male", "Female", "Other"]),
  check("birth", "date of birth is invalid (e.g., YYYY/MM/DD)").isDate(),
  check("phone", "phone is invalid (e.g. 1234567890)").isMobilePhone(),
  check("address", "address is required (min:3, max:200)").isLength({
    min: 3,
    max: 200,
  }),
  check("description", "description is required (min:3, max:1000)").isLength({
    min: 3,
    max: 1000,
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validateSitterProfile = [
  oneOf(
    [
      [
        check("isSitter").not().isEmpty().equals("true"),
        check("title", "title is required (min:3, max:200)")
          .trim()
          .isLength({
            min: 3,
            max: 200,
          })
          .toUpperCase(),
        check("hourlyWage", "hourlyWage is required (min:1, max:500)").isInt({
          min: 1,
          max: 500,
          allow_leading_zeroes: false,
        }),
      ],
      [
        check("isSitter").not().isEmpty().equals("false"),
        check("title").isEmpty(),
        check("hourlyWage").isEmpty(),
      ],
    ],
    "title and hourlyWage are only required for Sitter profile"
  ),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];
