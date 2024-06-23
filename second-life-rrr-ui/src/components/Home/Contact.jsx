// import React from "react";

// const Contact = () => {
//   return (
//     <>
//       <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
//         <div className="container">
//           <div className="-mx-4 flex flex-wrap lg:justify-between">
//             <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
//               <div className="mb-12 max-w-[570px] lg:mb-0">
//                 <span className="mb-4 block text-base font-semibold text-primary">
//                   Contact Us
//                 </span>
//                 <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
//                   GET IN TOUCH WITH US
//                 </h2>
//                 <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eius tempor incididunt ut labore e dolore magna aliqua. Ut
//                   enim adiqua minim veniam quis nostrud exercitation ullamco
//                 </p>
//                 <div className="mb-8 flex w-full max-w-[370px]">
//                   <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]"></div>
//                   <div className="w-full">
//                     <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
//                       Our Location
//                     </h4>
//                     <p className="text-base text-body-color dark:text-dark-6">
//                       99 S.t Jomblo Park Pekanbaru 28292. Indonesia
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mb-8 flex w-full max-w-[370px]">
//                   <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  
//                   </div>
//                   <div className="w-full">
//                     <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
//                       Phone Number
//                     </h4>
//                     <p className="text-base text-body-color dark:text-dark-6">
//                       (+62)81 414 257 9980
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mb-8 flex w-full max-w-[370px]">
//                   <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                   
//                   </div>
//                   <div className="w-full">
//                     <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
//                       Email Address
//                     </h4>
//                     <p className="text-base text-body-color dark:text-dark-6">
//                       info@yourdomain.com
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
//               <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
//                 <form>
//                   <ContactInputBox
//                     type="text"
//                     name="name"
//                     placeholder="Your Name"
//                   />
//                   <ContactInputBox
//                     type="text"
//                     name="email"
//                     placeholder="Your Email"
//                   />
//                   <ContactInputBox
//                     type="text"
//                     name="phone"
//                     placeholder="Your Phone"
//                   />
//                   <ContactTextArea
//                     row="6"
//                     placeholder="Your Message"
//                     name="details"
//                     defaultValue=""
//                   />
//                   <div>
//                     <button
//                       type="submit"
//                       className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
//                     >
//                       Send Message
//                     </button>
//                   </div>
//                 </form>
//                 <div>
//                   <span className="absolute -right-9 -top-10 z-[-1]">
//                     <svg
//                       width={100}
//                       height={100}
//                       viewBox="0 0 100 100"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         clip-Rule="evenodd"
//                         d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
//                         fill="#3056D3"
//                       />
//                     </svg>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;

// const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
//   return (
//     <>
//       <div className="mb-6">
//         <textarea
//           rows={row}
//           placeholder={placeholder}
//           name={name}
//           className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
//           defaultValue={defaultValue}
//         />
//       </div>
//     </>
//   );
// };

// const ContactInputBox = ({ type, placeholder, name }) => {
//   return (
//     <>
//       <div className="mb-6">
//         <input
//           type={type}
//           placeholder={placeholder}
//           name={name}
//           className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
//         />
//       </div>
//     </>
//   );
// };
import React from 'react';

function ContactForm() {
  return (
    <div className="bg-blue-200 p-10 mt-32">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full p-4">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Get In Touch With Us</h3>
              <p className="text-gray-600 text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            <form>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                <input type="text" id="fullName" placeholder="Full Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="mb-4">
                <label htmlFor="emailAddress" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input type="email" id="emailAddress" placeholder="Email Address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                <input type="tel" id="phoneNumber" placeholder="Phone Number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
                <input type="text" id="subject" placeholder="Subject" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Type Your Message</label>
                <textarea id="message" rows="4" placeholder="Your message here" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
