import { useState } from "react";
import api from "../services/api";
import CertificateForm from "../components/CertificateForm";
import CertificatePreview from "../components/CertificatePreview";

export default function GenerateCertificate() {
  const [certificate, setCertificate] = useState(null);

  const generateCertificate = async (formData) => {
    try {
      const response = await api.post(
        "/certificates",
        formData
      );

      setCertificate(response.data);

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to generate certificate"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#1e5aa8] py-10 px-4">

      {!certificate ? (
        <CertificateForm
          onGenerate={generateCertificate}
        />
      ) : (
        <CertificatePreview
          data={certificate}
        />
      )}

    </div>
  );
}