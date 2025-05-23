import { useContext } from "react";
import { RequestContext } from "../../context/RequestProvider";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.css"

function AdminAdd() {
  const { postElement,url } = useContext(RequestContext);
  return (
    <>
      <title>Admin Add Page</title>
      <Formik
        initialValues={{ name: "", price: "", image: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          price: Yup.number().required("Required"),
          image: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting,resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          resetForm()
          postElement(url,values)
        }}
      >
        <Form>
          <label htmlFor="name">Product Name</label>
          <Field name="name" type="text" className="formikInp"/>
          <div className="errorMes">
          <ErrorMessage name="name" />
          </div>

          <label htmlFor="price">Price</label>
          <Field name="price" type="number" className="formikInp"/>
          <div className="errorMes">
          <ErrorMessage name="price" />
          </div>

          <label htmlFor="image">Image URL</label>
          <Field name="image" type="text" className="formikInp"/>
          <div className="errorMes">
          <ErrorMessage name="image" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default AdminAdd;
