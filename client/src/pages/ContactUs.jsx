
const ContactUs = () => {
  return (
    <>
      <div className="container mx-auto my-12 py-12">
        <h1 className="text-center text-3xl font-bold">Contact Us</h1>
        <hr className="my-4 border-gray-300" />

        <div className="flex justify-center items-center my-8">
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <form>
              {/* Name Input */}
              <div className="mb-6">
                <label
                  htmlFor="Name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label
                  htmlFor="Email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="name@example.com"
                />
              </div>

              {/* Message Input */}
              <div className="mb-6">
                <label
                  htmlFor="Message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="Message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-900 transition-colors duration-200"
                  disabled
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
