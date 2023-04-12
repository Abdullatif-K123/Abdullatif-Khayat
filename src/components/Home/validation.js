import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters")
    .required("Message is required"),
});

export default validationSchema;
