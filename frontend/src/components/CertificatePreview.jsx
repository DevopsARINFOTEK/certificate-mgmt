import { QRCodeCanvas } from "qrcode.react";

export default function CertificatePreview({
  data,
}) {
  if (!data) return null;

  const pronoun =
    data.gender === "Male"
      ? "his"
      : "her";

  const shareCertificate = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title:
            "ARINFOTEK Internship Certificate",
          text:
            `${data.name}'s Internship Certificate`,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">

      <div
        id="certificate"
        className="
        bg-white
        border-[12px]
        border-yellow-500
        rounded-lg
        shadow-2xl
        p-10
      "
      >

        {/* Logo */}

        <div className="text-center">

          <img
            src="/logo.png"
            alt="ARINFOTEK"
            className="w-24 mx-auto"
          />

          <h1 className="text-4xl font-bold text-blue-700 mt-4">
            ARINFOTEK
          </h1>

          <p className="text-gray-500">
            Software Development &
            Training Institute
          </p>

        </div>

        <hr className="my-8" />

        {/* Title */}

        <h2 className="text-center text-5xl font-bold mb-10">
          INTERNSHIP CERTIFICATE
        </h2>

        {/* Body */}

        <p className="text-center text-xl">
          This is to certify that
        </p>

        <h3 className="text-center text-4xl font-bold text-blue-700 my-6">
          {data.name}
        </h3>

        <p className="text-center text-xl leading-10">

          has successfully completed the
          Internship Program in

          <strong>
            {" "}
            {data.course_name}
          </strong>

          {" "}
          at

          <strong>
            {" "}
            ARINFOTEK
          </strong>

          {" "}
          from

          <strong>
            {" "}
            {new Date(
              data.start_date
            ).toLocaleDateString()}
          </strong>

          {" "}
          to

          <strong>
            {" "}
            {new Date(
              data.end_date
            ).toLocaleDateString()}
          </strong>

          .

        </p>

        <p className="text-center text-xl mt-8 leading-10">

          During the internship period,
          {" "}
          {pronoun}
          {" "}
          dedication, performance and
          professional conduct were
          found to be excellent.

        </p>

        {/* Footer */}

        <div className="flex justify-between items-end mt-16">

          <div>

            <p className="font-semibold">
              Ref No:
            </p>

            <p>
              {data.certificate_ref}
            </p>

            <p className="mt-3">
              Date:
              {" "}
              {new Date().toLocaleDateString()}
            </p>

          </div>

          <QRCodeCanvas
            value={data.certificate_ref}
            size={110}
          />

          <div className="text-center">

            <div className="border-t border-black w-40 mb-2"></div>

            <p className="font-semibold">
              Authorized Signatory
            </p>

            <p>
              ARINFOTEK
            </p>

          </div>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex justify-center gap-4 mt-8">

        <button
          onClick={() =>
            window.print()
          }
          className="
            bg-green-600
            hover:bg-green-700
            text-white
            px-6
            py-3
            rounded-lg
          "
        >
          Print Certificate
        </button>

        <button
          onClick={shareCertificate}
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-6
            py-3
            rounded-lg
          "
        >
          Share Certificate
        </button>

      </div>

    </div>
  );
}