import { Form } from "react-router-dom";

export const contactdata = async ({ request }) => {
  try {
    console.log(request);
    const responce = await request.formData();
    const data = Object.fromEntries(responce);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error);
  }
};

export const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-full max-w-lg border border-white/20 animate-fadeIn">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Get in Touch
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Have questions or want to work together? Fill out the form below and
          I’ll get back to you!
        </p>

        <Form method="POST" action="/contact" className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              name="UserName"
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              name="Email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              name="Message"
              rows="4"
              placeholder="Your message..."
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#393E46] hover:bg-[#222831] text-white font-semibold py-3 rounded-lg shadow-lg  cursor-pointer transition transform hover:scale-105 active:scale-95"
          >
            Send Message
          </button>
        </Form>
      </div>
    </div>
  );
};
