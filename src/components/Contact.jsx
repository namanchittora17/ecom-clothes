const Contact = () => {
  return (
    <div>
      <section className="max-w-2xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-6 text-center">Get in Touch</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
              placeholder="Your name..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
              placeholder="xyz@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={5}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
              placeholder="Your message..."
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 hover:bg-gray-800 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
