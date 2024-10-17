"use client"
import { 
  FC, 
  useState, 
} from 'react';
import {
  Field,
  Formik,
  Form,
  FormikHelpers,
} from "formik";
import * as Yup from "yup";
import useFeedbacks from '@/hooks/useFeedbacks';
import { PostFeedback } from '@/types/feedback';
import dynamic from 'next/dynamic';

const Feedback = dynamic(() => import("@/components/Feedback"));

const Contact: FC = () => {
  const [ feedbackShow, setFeedbackShow ] = useState<boolean>(false);
  const { addFeedback, error } = useFeedbacks();

  const toggleFeedback = () => {
    setFeedbackShow(prev => !prev)
  }

  const initialValues: PostFeedback = {
    name: "",
    email: "",
    message: "",
  }

  const handleSubmit = async (values: PostFeedback, formikHelpers: FormikHelpers<PostFeedback>) => {
    console.log("Adding feedback");

    addFeedback(values);

    if (error) {
      alert("Message fail to add");
      return;
    }

    formikHelpers.resetForm();
    alert("Message added successfully");
    return;
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Your name is required"),
    email: Yup.string().required("Email is required").email("Please enter a valid email"),
    message: Yup.string()
      .max(500, "Your message has exceeded the 500 character limit")
      .required("Message is required"),
  });

  return (
    <>
      {
        feedbackShow && (<Feedback toggleFeedback={toggleFeedback} />)
      }
      <div className="w-full min-h-[100vh] bg-product pt-20 px-10 flex flex-col md:flex-row gap-10">
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}>
          {({ errors, touched }) => (
          <Form className="w-full md:w-[60%] flex flex-col">
          <div className="text-black text-sm">
            At Pallete, we&apos;re always here to help! 
            Whether you have questions about our products and services, need guidance on a project, 
            or want to explore color customization options, our team is ready to assist you.
          </div>
          <div className="w-full px-5 md:px-24 flex flex-col mt-20 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-lg font-medium text-black">
                Name
              </label>
              <Field
                className="text-lg border-b border-dark-grey p-2 bg-transparent focus:outline-none"
                type="text"
                name="name"
                placeholder="name"
              />
              {touched && errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg font-medium text-black">
                Email
              </label>
              <Field
                className="text-lg border-b border-dark-grey p-2 bg-transparent focus:outline-none"
                type="email"
                name="email"
                placeholder="email@example.com"
              />
              {touched && errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-lg font-medium text-black">
                Message
              </label>
              <Field
                className="text-lg border-b border-dark-grey p-2 bg-transparent focus:outline-none"
                name="message"
                components="textarea"
                rows="4" cols="50"
                placeholder="Your Message"
              />
              {touched && errors.message && <span className="text-xs text-red-500">{errors.message}</span>}
            </div>
            <div className="flex w-full justify-end mt-10">
              <button type="submit"
                className="w-28 h-12 bg-black text-white rounded-full cursor-pointer">
                <span className="font-medium text-lg py-10">Submit</span>
              </button>
            </div>
          </div>
          </Form>
          )}
        </Formik>
        <div className="w-full md:w-[30%] flex flex-col gap-2">
          <div>
            <div className="text-black text-medium font-medium">Get in Touch</div>
            <div className="text-black text-sm">For any inquiries, feel free to reach out to us 
              through the following channels:</div>
          </div>
          <div>
            <div className="text-black text-medium font-medium">Phone:</div>
            <div className="text-black text-sm">📞 1-800-EXPERT-COLOR</div>
            <div className="text-black text-sm">Our lines are open from 9 AM - 6 PM (Monday - Friday). </div>
            <div className="text-black text-sm">Feel free to give us a call for immediate assistance 
              or to schedule a consultation.</div>
          </div>
          <div>
            <div className="text-black text-sm font-medium">Email:</div>
            <div className="text-black text-sm">
              <span onClick={toggleFeedback}>📧</span>&nbsp;support@pallete.com
            </div>
            <div className="text-black text-sm">We strive to respond to all emails within 24 hours on business days.</div>
          </div>
          <div>
            <div className="text-black text-sm font-medium">Visit Us:</div>
            <div className="text-black text-sm">🏢 Head Office:</div>
            <div className="text-black text-sm">Expert Color Solutions</div>
            <div className="text-black text-sm">1234 Creativity Avenue</div>
            <div className="text-black text-sm">Innovation District, Suite 567</div>
            <div className="text-black text-sm">City, State, ZIP Code</div>
          </div>
          <div>
            <div className="text-black text-sm font-medium">Office Hours:</div>
            <div className="text-black text-sm">Monday - Friday: 9 AM - 6 PM</div>
            <div className="text-black text-sm">Saturday: 10 AM - 4 PM</div>
            <div className="text-black text-sm">Sunday: Closed</div>
          </div>
          <div>
            <div className="text-black text-sm font-medium">Social Media:</div>
            <div className="text-black text-sm">Stay connected with us through our social media channels for updates, 
              inspiration, and special offers.</div>
          </div>
          <div>
            <div className="text-black text-sm">Facebook: @Pallete_ExpertColorSolutions</div>
            <div className="text-black text-sm">Instagram: @Pallete_ExpertColorSolutions</div>
            <div className="text-black text-sm">Twitter: @Pallete_ColorSolutionsX</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;