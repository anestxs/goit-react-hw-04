import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  return (
    <header>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (values.query === "") {
            toast.error("The text field is empty!", {
              position: "center",
            });
            return;
          }
          onSubmit(values.query);
          actions.resetForm();
        }}
      >
        <Form>
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <Toaster />
    </header>
  );
}
