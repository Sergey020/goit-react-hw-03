import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationShema = Yup.object().shape({
  id: "",
  name: Yup.string()
    .min(3, "Name must be at least 3 symbols")
    .max(50, "Name should be no more than 50 symbols")
    .required("Field must be filled in"),
  number: Yup.string()
    .required("Field must be filled in"),
});

const ContactForm = ({ submit }) => {
  return (
    <Formik
      initialValues={{ id: "", name: "", number: "" }}
      onSubmit={(values, actions) => {
        submit(values);
        actions.resetForm();
      }}
      validationSchema={validationShema}
    >
      <Form>
        <p>Name</p>

        <Field type="text" name="name" />

        <ErrorMessage name="name" component="span" />
        <p >Number</p>

        <Field type="text" name="number" />

        <ErrorMessage name="number" component="span" />

        <br />

        <button type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
