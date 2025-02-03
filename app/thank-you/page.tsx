import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Thank You!
        </h1>
        <p className="text-lg text-gray-600">
          Thank you for your enquiry. We will get back to you within 24 hours.
          If you do not hear from us, please feel free to call <a href="tel:0402808175" className="text-blue-600 hover:text-blue-700">0402 808 175</a>.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-navy-900 hover:bg-navy-800"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
