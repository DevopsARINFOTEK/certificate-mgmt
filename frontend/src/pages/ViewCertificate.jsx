import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import CertificatePreview from "../components/CertificatePreview";

export default function ViewCertificate() {

  const { id } = useParams();

  const [certificate, setCertificate] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadCertificate();
  }, [id]);

  const loadCertificate = async () => {
    try {

      const response =
        await api.get(
          `/certificates/${id}`
        );

      setCertificate(
        response.data
      );

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Certificate not found"
      );

    } finally {

      setLoading(false);

    }
  };

  if (loading) {
    return (
      <div className="text-center mt-20">
        Loading Certificate...
      </div>
    );
  }

  if (!certificate) {
    return (
      <div className="text-center mt-20">
        Certificate Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <CertificatePreview
        data={certificate}
      />
    </div>
  );
}