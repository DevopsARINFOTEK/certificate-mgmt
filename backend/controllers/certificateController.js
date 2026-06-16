const pool = require("../db/db");

exports.createCertificate = async (req, res) => {
  try {
    const {
      name,
      gender,
      course_name,
      start_date,
      end_date,
    } = req.body;

    const certificate_ref =
      `CERT-${Date.now()}`;

    const result = await pool.query(
      `
      INSERT INTO certificates
      (
        name,
        gender,
        course_name,
        start_date,
        end_date,
        certificate_ref
      )
      VALUES ($1,$2,$3,$4,$5,$6)
      RETURNING *
      `,
      [
        name,
        gender,
        course_name,
        start_date,
        end_date,
        certificate_ref,
      ]
    );

    res.status(201).json(
      result.rows[0]
    );

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

exports.getCertificates = async (req, res) => {
  try {

    const result =
      await pool.query(
        `
        SELECT *
        FROM certificates
        ORDER BY created_at DESC
        `
      );

    res.json(result.rows);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

exports.getCertificateById = async (
  req,
  res
) => {
  try {

    const result =
      await pool.query(
        `
        SELECT *
        FROM certificates
        WHERE id = $1
        `,
        [req.params.id]
      );

    if (
      result.rows.length === 0
    ) {
      return res
        .status(404)
        .json({
          message:
            "Certificate not found",
        });
    }

    res.json(
      result.rows[0]
    );

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message:
        error.message,
    });

  }
};